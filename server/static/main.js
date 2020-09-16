// const { authUser } = require("../middleware/auth");

// const { json } = require("body-parser");

const login = document.getElementById('login');

if (login) {
  login.addEventListener('submit', validateLogin);
}

function validateLogin(e) {
  e.preventDefault();

  const email = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = {
    username: email,
    password: password
  };

  validateInfo(user)
};

function validateInfo(user) {
  var myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(user);

  var requestOptions = {
    method: 'POST',
    body: raw,
    headers: myHeaders
  };

  fetch("api/usuarios", requestOptions)
    .then(response => response.json())
    .then(result => loginPage(result))
    .catch(error => console.log('error', error));
}

function loginPage(result) {
  if (Object.keys(result).length > 0) {
    location.assign('dashboard.html')
  } else {
    alert('usuario o contraseña invalida')
  }
}

const productos = document.getElementById('productos');

if (productos) {
  getProducts();
}

function getProducts() {
  fetch("api/productos")
    .then(response => response.json())
    .then(result => listProducts(result))
    .catch(error => console.log('error', error));
}

function listProducts(result) {
  result.forEach(product => {
    const item = document.createElement('div');
    item.innerHTML= ` <img src="${product.imagen}">
                      <h2>${product.nombre}</h2>
                      <h3>$${product.precio}</h3> 
                      <button>comprar</button>`;
    productos.append(item);
  });

}