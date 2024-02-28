const http = require('http');

const hostname = '127.0.0.1';
const port = 1245;
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2] || 'database.csv';

    countStudents(databasePath)
      .then(() => {
        res.end('This is the list of our students\n');
      })
      .catch((error) => {
        res.end(`${error.message}\n`);
      });
  } else {
    res.end('Not found\n');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
