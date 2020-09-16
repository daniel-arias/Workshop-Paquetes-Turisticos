
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

    const user = usuarios.find(el =>
      el.email.toString() === username.toString() && el.contrasena.toString() === password.toString()
    );

    if (user) {
      return res.json(user);
    } else {
      return res.json({});
    }

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

    res.json(productos)
  });
}


module.exports = routes;