const http = require('http');
const fs = require('fs').promises;

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

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  const requestUrl = new URL(req.url, `http://${req.headers.host}`);
  const path = requestUrl.pathname;

  if (path === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (path === '/favicon.ico') {
    res.statusCode = 204;
    res.end();
  } else if (path === '/students') {
    res.statusCode = 200;
    const filePath = process.argv[2];
    const result = await countStudents(filePath);
    res.setHeader('Content-Type', 'text/plain');
    res.end(`This is the list of our students\n${result}`);
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
