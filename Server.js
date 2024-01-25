
const express = require('express');
const app = express();
const cors = require('cors')
const port = 3600;

app.use(cors());
// Assuming you are using a MySQL database
const mysql = require('mysql');

// Establish a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'library_management_system',
});

// Define the API endpoint for retrieving data
app.get('/api/members', (req, res) => {
    // Perform a database query to get the data
    connection.query('SELECT * FROM members', (err, results) => {
        if (err) {
            console.error('Error retrieving data:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            // Return the data as JSON
            res.json(results);
        }
    });
});

app.get('/api/books', (req, res) => {
    connection.query("SELECT * FROM books", (err, results) => {
        if (err) {
            console.log("Error retrieving book details", err.message);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log(results);
            res.json(results);
        }
    });
});


// Start the server
app.listen(port, () => {
    console.log('Server is running on port ${ 3600 }');
});
