const { readDatabase } = require('../utils');

const getAllStudents = async (req, res) => {
  try {
    const path = process.argv[2]; // Get the path from command line arguments
    const data = await readDatabase(path);

    // Check if data is an object and not empty
    if (typeof data === 'object' && Object.keys(data).length === 0) {
      res.status(500).send('Cannot load the database');
      return;
    }

    let responseText = 'This is the list of our students\n';

    Object.keys(data).forEach((field) => {
      responseText += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
    });

    res.status(200).send(responseText.trim()); // Send the response
  } catch (err) {
    // Catch any errors from readDatabase and return the error message
    res.status(500).send('Cannot load the database');
  }
};

const getAllStudentsByMajor = async (req, res) => {
  const { major } = req.params;

  // Check if the major is 'CS' or 'SWE'
  if (major === 'CS' || major === 'SWE') {
    try {
      const path = process.argv[2]; // File path provided as a command-line argument
      const data = await readDatabase(path); // Read database

      if (typeof data === 'string') {
        // If readDatabase returns an error message string, send it with a 500 status
        res.status(500).send(data);
        return;
      }

      // Check if the requested major exists in the data
      if (!data[major] || data[major].length === 0) {
        res.status(404).send(`No students found for the major: ${major}`);
        return;
      }

      // Send the list of students for the given major
      res.status(200).send(`List: ${data[major].join(', ')}`);
    } catch (err) {
      // If an error occurs, send a 500 status with the error message
      res.status(500).send('Cannot load the database');
    }
  } else {
    // If the major is not 'CS' or 'SWE', send a 400 status with an error message
    res.status(400).send('Major parameter must be CS or SWE');
  }
};

module.exports = { getAllStudents, getAllStudentsByMajor };
