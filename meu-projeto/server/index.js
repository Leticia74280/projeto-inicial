const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());

app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
        user: 'root',
        password: '241204',
        database: 'bditens',
})

app.post("/item", (req, res) => {
    const {item} = req.body;
    let SQL = "INSERT INTO listaitens (itens) VALUES (?)";
    db.query(SQL, item, (err, result) => {
            console.log(err);
            })
    }
    );

app.listen(3301, ()=> {
    console.log('Servidor rodando');
});

