// controllers/AppController.js
const getHomepage = (req, res) => {
  res.status(200).send('Hello Holberton School!');
};

module.exports = { getHomepage };
