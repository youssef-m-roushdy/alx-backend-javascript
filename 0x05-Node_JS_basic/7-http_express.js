const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line.trim().length > 0);

    if (lines.length === 0) {
      return 'No students found in the file';
    }

    const [header] = lines;
    const headers = header.split(',');

    if (lines.length <= 1) {
      return 'No valid student records found.';
    }

    const students = [];
    const fields = {};

    for (let i = 1; i < lines.length; i += 1) {
      const values = lines[i].split(',');
      if (values.length === headers.length) {
        const student = {};

        for (let j = 0; j < values.length; j += 1) {
          student[headers[j]] = values[j];
        }

        students.push(student);

        const { field, firstname } = student;
        if (field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      }
    }

    let result = `Number of students: ${students.length}\n`;
    Object.entries(fields).forEach(([field, names]) => {
      result += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    });

    return result.trim();
  } catch (err) {
    return 'Cannot load the database';
  }
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const path = process.argv[2];
    const data = await countStudents(path);
    res.send(`This is the list of our students\n${data}`);
  } catch (error) {
    res.status(500).send('Error processing request');
  }
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

module.exports = app;
