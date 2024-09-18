// utils/readDatabase.js
const fs = require('fs').promises;

const readDatabase = async (path) => {
  try {
    // Try to read the file
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n').filter((line) => line.trim().length > 0);

    if (lines.length <= 1) {
      throw new Error('No valid student records found.');
    }

    const [header] = lines;
    const headers = header.split(',');

    const fields = {};

    for (let i = 1; i < lines.length; i += 1) {
      const values = lines[i].split(',');
      if (values.length === headers.length) {
        const student = {};

        for (let j = 0; j < values.length; j += 1) {
          student[headers[j]] = values[j];
        }

        const { field, firstname } = student;
        if (field) {
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstname);
        }
      }
    }

    return fields;
  } catch (err) {
    // Catch file-related errors, such as file not existing
    throw new Error('Cannot load the database'); // Throw an error for the controller to catch
  }
};

module.exports = { readDatabase };
