const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data
          .split('\n')
          .filter((line) => line.trim() !== ''); // Split lines and remove empty lines
        const fields = {};
        for (const line of lines) {
          const [firstName, , , field] = line.split(',');
          if (field === 'field') {
            // Skip the header line
            continue;  // eslint-disable-line
          }
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        }
        console.log(`Number of students: ${lines.length - 1}`); // Exclude the header line
        for (const [field, students] of Object.entries(fields)) {
          console.log(
            `Number of students in ${field}: ${
              students.length
            }. List: ${students.join(', ')}`,
          );
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
