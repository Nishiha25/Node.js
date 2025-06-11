const mysql = require('mysql2');

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Nishi_13"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE DATABASE IF NOT EXISTS node", function (err, result) {
    if (err) throw err;
    console.log("Database created or already exists.");

    con.changeUser({ database: 'node' }, function(err) {
      if (err) throw err;

      const createTable = `
        CREATE TABLE IF NOT EXISTS customers (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255),
          address VARCHAR(255)
        )`;

      con.query(createTable, function(err, result) {
        if (err) throw err;
        console.log("Table ready!");

        // Insert multiple customers
        const customers = [
          ['Scarlett', 'Switzerland'],
          ['Fabrio', 'France'],
          ['Benil ', 'Georgia'],
          ['Dalia', 'Bangalore']
        ];

        con.query("INSERT INTO customers (name, address) VALUES ?", [customers], function(err, result) {
          if (err) throw err;
          console.log("Multiple customers inserted");

          con.query("SELECT * FROM customers ORDER BY name DESC", function(err, result) {
            if (err) throw err;
            console.log("Customer List:");
            console.log(result);
          });
        });
      });
    });
  });
});
