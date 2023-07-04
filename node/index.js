const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};

const connection = mysql.createConnection(config)

const sql = `INSERT INTO people(name) values('Renam')`
connection.query(sql)

app.get('/', (req, res) => {
  connection.query('SELECT * FROM people', (error, results) => {
    if (error) throw error;

    let names = results.map(result => result.name);
    let response = `<h1>Full Cycle Rocks!</h1>\n<ul>${names.map(name => `<li>${name}</li>`).join('')}</ul>`;
    res.send(response);
  });
});


app.listen(port, () => {
  console.log(`Rodando na porta :${port}`);
});
