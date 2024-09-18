  const fs = require('fs').promises;

  const countStudents = async (path) => {
    try {
      // Read the file asynchronously
      const data = await fs.readFile(path, 'utf8');

      // Split the data into lines and filter out any empty lines
      const lines = data.trim().split('\n').filter((line) => line.length > 0);

      if (lines.length === 0) {
        console.log('No students found in the file');
        return;
      }

      // Extract the header (first row) which contains field names
      const [header] = lines;
      const headers = header.split(',');

      // Check that there are students in the CSV
      if (lines.length <= 1) {
        console.log('No valid student records found.');
        return;
      }

      // Initialize variables to hold students' data and count
      const students = [];
      const fields = {};

      // Parse each line starting from the second one (first one is the header)
      for (let i = 1; i < lines.length; i += 1) {
        const values = lines[i].split(',');

        // Ignore incomplete lines (like empty values or lines missing columns)
        if (values.length === headers.length) {
          const student = {};

          // Map student data based on headers (e.g., 'firstname', 'field')
          for (let j = 0; j < values.length; j += 1) {
            student[headers[j]] = values[j];
          }

          // Add student to the list
          students.push(student);

          // Group students by field
          const { field, firstname } = student;
          if (field) {
            if (!fields[field]) {
              fields[field] = [];
            }
            fields[field].push(firstname);
          }
        }
      }

      // Log the total number of students
      console.log(`Number of students: ${students.length}`);

      // Log the number of students in each field and their names
      Object.entries(fields).forEach(([field, names]) => {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      });
    } catch (err) {
      // Handle file read errors
      throw new Error('Cannot load the database');
    }
  };

  module.exports = countStudents;
