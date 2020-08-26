const usuarios = [
  {
    nombre: "usuario1",
    contrasena: "contra1",
    email: "usuario1@email.com",
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
    email: "usuario2@email.com",
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
    email: "usuario3@email.com",
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

const productos = [
  {
    productoId: "producto1",
    nombre: "producto1",
    descripcion: "descripcion1",
    precio: 111,
    imagen: "https://catalogo.propar.com.ec/wp-content/uploads/2019/11/EF1828.jpg",
    categoria: "categoria1",
    talla: "",
    color: ""
  },
  {
    productoId: "producto2",
    nombre: "producto2",
    descripcion: "descripcion2",
    precio: 222,
    imagen: "https://www.nintendo.com/content/dam/noa/en_US/hardware/switch/nintendo-switch-new-package/gallery/package_redblue.jpg",
    categoria: "categoria2",
    talla: "M",
    color: "azul"
  },
  {
    productoId: "producto3",
    nombre: "producto3",
    descripcion: "descripcion3",
    precio: 333,
    imagen: "https://i5.walmartimages.com/asr/feaf29b0-1f85-456e-b3ae-d372c7f36803_1.68c6e03e1e61758dac5f09f711ad4477.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
    categoria: "categoria1",
    talla: "L",
    color: "rojo"
  }
];

module.exports = {
  usuarios,
  productos
}