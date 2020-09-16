const { Sequelize } = require('sequelize');
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const db = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
let myData = [];

fs.readFile('./baseDatos.csv', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    }
    myData = data.split("\n");
    console.log(typeof(myData));
    myData.forEach(el => {
        if(el){
            db.query('INSERT INTO acamica.prueba VALUES (?,?)', 
            {replacements: [parseInt(el.split(";")[0]), el.split(";")[1]]})
                .then(res => {
                    console.log(res);
                }).catch(err => {
                    console.error(err);
                });
        }
        
    })
});

