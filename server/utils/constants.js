const URLS = {
  API_BASE: '/api',
  AUTHORS: '/autores',
  BOOKS: '/libros'
};

const usuarios = [
  {
    nombre: "usuario1",
    contrasena: "contra1",
    email: "usuario1emailcom",
    edad: 1,
    sexo: "M",
    celular: "3101231231",
    productos:
      [
        {
          productoId: "producto1"
        }
      ]
  },
  {
    nombre: "usuario2",
    contrasena: "contra2",
    email: "usuario2emailcom",
    edad: 2,
    sexo: "F",
    celular: "3101231231",
    productos:
      [
        {
          productoId: "producto1"
        },
        {
          productoId: "producto2"
        }
      ]
  }, {
    nombre: "usuario3",
    contrasena: "contra3",
    email: "usuario3emailcom",
    edad: 3,
    sexo: "M",
    celular: "3101231231",
    productos:
      [
        {
          productoId: "producto3"
        }
      ]
  }
];

constproductos = [
  {
    productoId: "producto1",
    nombre: "producto1",
    descripcion: "descripcion1",
    precio: 111,
    categoria: "categoria1",
    talla: "",
    color: ""
  },
  {
    productoId: "producto2",
    nombre: "producto2",
    descripcion: "descripcion2",
    precio: 222,
    categoria: "categoria2",
    talla: "M",
    color: "azul"
  },
  {
    productoId: "producto3",
    nombre: "producto3",
    descripcion: "descripcion3",
    precio: 333,
    categoria: "categoria1",
    talla: "L",
    color: "rojo"
  }
];

module.exports = {
  URLS,
  autores
}