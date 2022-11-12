// PRODUCTOS
const productos = [
    // Notebooks
    {
        id: "notebook-01",
        titulo: "Notebook 01",
        imagen: "./img/notebooks/01.jpg",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 484
    },
    {
        id: "notebook-02",
        titulo: "Notebook 02",
        imagen: "./img/notebooks/02.jpg",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 840
    },
    {
        id: "notebook-03",
        titulo: "Notebook 03",
        imagen: "./img/notebooks/03.jpg",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 462
    },
    {
        id: "notebook-04",
        titulo: "Notebook 04",
        imagen: "./img/notebooks/04.jpg",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 1889
    },
    {
        id: "notebook-05",
        titulo: "Notebook 05",
        imagen: "./img/notebooks/05.jpg",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 608
    },
    // Celulares
    {
        id: "celulares-01",
        titulo: "Celular 01",
        imagen: "./img/celulares/01.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 127
    },
    {
        id: "celular-02",
        titulo: "Celular 02",
        imagen: "./img/celulares/02.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 272
    },
    {
        id: "celular-03",
        titulo: "Celular 03",
        imagen: "./img/celulares/03.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 197
    },
    {
        id: "celular-04",
        titulo: "Celular 04",
        imagen: "./img/celulares/04.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 449
    },
    {
        id: "celular-05",
        titulo: "Celular 05",
        imagen: "./img/celulares/05.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 163
    },
    {
        id: "celular-06",
        titulo: "Celular 06",
        imagen: "./img/celulares/06.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 219
    },
    {
        id: "celular-07",
        titulo: "Celular 07",
        imagen: "./img/celulares/07.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 185
    },
    {
        id: "celular-08",
        titulo: "Celular 08",
        imagen: "./img/celulares/08.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 153
    },
    // PC
    {
        id: "pc-01",
        titulo: "PC 01",
        imagen: "./img/pc/01.jpg",
        categoria: {
            nombre: "PC",
            id: "pc"
        },
        precio: 1869
    },
    {
        id: "pc-02",
        titulo: "PC 02",
        imagen: "./img/pc/02.jpg",
        categoria: {
            nombre: "PC",
            id: "pc"
        },
        precio: 3051
    },
    {
        id: "pc-03",
        titulo: "PC 03",
        imagen: "./img/pc/03.jpg",
        categoria: {
            nombre: "PC",
            id: "pc"
        },
        precio: 3084
    },
    {
        id: "pc-04",
        titulo: "PC 04",
        imagen: "./img/pc/04.jpg",
        categoria: {
            nombre: "PC",
            id: "pc"
        },
        precio: 1012
    },
    {
        id: "pc-05",
        titulo: "PC 05",
        imagen: "./img/pc/05.jpg",
        categoria: {
            nombre: "PC",
            id: "pc"
        },
        precio: 4519
    }
];


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}