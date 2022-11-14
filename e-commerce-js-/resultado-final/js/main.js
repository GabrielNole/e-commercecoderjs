// PRODUCTOS
const productos = [
    // Notebooks
    {
        id: "notebook-01",
        titulo: "Notebook Asus Ryzen 3 8GB 256GB SSD 14 FHD",
        imagen: "./img/notebooks/01.jpg",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 484
    },
    {
        id: "notebook-02",
        titulo: "Notebook HP Core i5 11va 12GB 512GB SSD 15.6 FHD",
        imagen: "./img/notebooks/02.jpg",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 840
    },
    {
        id: "notebook-03",
        titulo: "Notebook Lenovo Core i7 12GB 256GB SSD 14 FHD Win10 Pro",
        imagen: "./img/notebooks/03.jpg",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 462
    },
    {
        id: "notebook-04",
        titulo: "Notebook Gamer Asus Core i5 4.5Ghz 8GB 512GB SSD 15.6",
        imagen: "./img/notebooks/04.jpg",
        categoria: {
            nombre: "Notebooks",
            id: "notebooks"
        },
        precio: 1044
    },
    {
        id: "notebook-05",
        titulo: "Notebook Gateway Ryzen 7 8GB 512GB SSD 15.6 IPS Win 11",
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
        titulo: "Xiaomi Redmi 9A 6.53 32GB 2GB 13MP 5000mAh Gris",
        imagen: "./img/celulares/01.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 127
    },
    {
        id: "celular-02",
        titulo: "Xiaomi Redmi 9C 6.53 64GB 3GB 13MP Cámara Triple",
        imagen: "./img/celulares/02.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 272
    },
    {
        id: "celular-03",
        titulo: "Motorola Moto e7 6.5 HD+ 32GB 2GB Cámara Dual Gris",
        imagen: "./img/celulares/03.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 197
    },
    {
        id: "celular-04",
        titulo: "Xiaomi Redmi Note 9 Pro 6.67 128GB 6GB Cámara",
        imagen: "./img/celulares/04.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 449
    },
    {
        id: "celular-05",
        titulo: "Samsung Galaxy A03 6.5 32GB 3GB 4G Cámara Dual",
        imagen: "./img/celulares/05.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 163
    },
    {
        id: "celular-06",
        titulo: "Samsung Galaxy A13 6.6 32GB 3GB 4G Cámara Cuádruple",
        imagen: "./img/celulares/06.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 219
    },
    {
        id: "celular-07",
        titulo: "Motorola E20 6.5 32GB 2GB Cámara Dual Gris",
        imagen: "./img/celulares/07.jpg",
        categoria: {
            nombre: "Celulares",
            id: "celulares"
        },
        precio: 185
    },
    {
        id: "celular-08",
        titulo: "Umidigi Power 5S 6.53 32GB 4GB Cámara Triple",
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
        titulo: "PC Gamer Core i7 11700F 11va 1TB SSD",
        imagen: "./img/pc/01.jpg",
        categoria: {
            nombre: "PC",
            id: "pc"
        },
        precio: 1869
    },
    {
        id: "pc-02",
        titulo: "Pc Ryzen 7 5800X 1TB SSD 16GB RTX3070 Ti 8GB",
        imagen: "./img/pc/02.jpg",
        categoria: {
            nombre: "PC",
            id: "pc"
        },
        precio: 3051
    },
    {
        id: "pc-03",
        titulo: "Pc Gamer i7 12700F 1TB SSD 16GB",
        imagen: "./img/pc/03.jpg",
        categoria: {
            nombre: "PC",
            id: "pc"
        },
        precio: 3084
    },
    {
        id: "pc-04",
        titulo: "Pc Gamer Core i5 10400F 16GB 512GB SSD RX6400 4GB",
        imagen: "./img/pc/04.jpg",
        categoria: {
            nombre: "PC",
            id: "pc"
        },
        precio: 1012
    },
    {
        id: "pc-05",
        titulo: "Pc Gamer Core i9 12900K 2TB SSD 32GB RTX3090 24GB",
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