
/**
 * Middlewares
 */
// const md = require('./../middleware');


/**
 * CONSTANTS
 */
// const { usuarios, productos } = require('./../utils/constants');
const {db} = require('./../DB/dbHandler');


const routes = (app) => {
  app.post('/api/usuarios', (req, res) => {
    const {username, password} = req.body;
    db.query('SELECT * FROM acamica.clientes', {type: db.QueryTypes.SELECT})
    .then(resDB => {
      const user = resDB.find(el =>
        el.email.toString() === username.toString() && el.password.toString() === password.toString()
      );
  
      if (user) {
        return res.json(user);
      } else {
        return res.json({});
      }
    }).catch(err => {
        console.error(err);
    });

  })

  app.get('/api/usuarios', (req, res) => {
    db.query('SELECT * FROM acamica.clientes', {type: db.QueryTypes.SELECT})
    .then(resDB => {
        console.log(resDB);
        res.json(resDB);
    }).catch(err => {
        console.error(err);
    });
  });

  app.get('/api/productos', (req, res) => {
    db.query('SELECT * FROM acamica.productos', {type: db.QueryTypes.SELECT})
    .then(resDB => {
        console.log(resDB);
        res.json(resDB);
    }).catch(err => {
        console.error(err);
    });
  });
}


module.exports = routes;