// Variables
/*const productos = [
    {
        id:1,
        name : "Rosa",
        img : './assets/rose.jpg'
    },
    {
        id:2,
        name : "Margarita",
        img : './assets/marga.jpg'
    },
    {
        id:3,
        name : "Petunia",
        img : './assets/petu.jpeg'
    },
    {
        id:4,
        name:"Helecho",
        img: './images/helecho.jpg'
    },
    {
        id:5,
        name : "Maceta redonda",
        img : './assets/redo.jpg'
    },
    {
        id:6,
        name : "Maceta cuadrada",
        img : './assets/cuadra.jpg'
    },
    {
        id:7,
        name : "Maceta hexagonal",
        img : './assets/hexa.jpg'
    },
    {
        id:8,
        name: "Maceta cúbica",
        img: './images/cubica.jpg'
    }
];

const contenedorProductos = document.querySelector('.contenedor-productos');
const listadoEnvio = document.querySelector('.listado-envio');
const productosEnvio = [];

//Eventos 
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
})

//Funciones
function mostrarProductos() {
    productos.forEach(producto => {
        //Scripting
        const divProducto = document.createElement('div');
        divProducto.classList.add('card');

        const imgProducto = document.createElement('img');
        imgProducto.src = producto.img;
        imgProducto.classList.add('imagen-producto');

        const tituloProducto = document.createElement('h3');
        tituloProducto.textContent = producto.name;

        const btnFavorito = document.createElement('button');
        btnFavorito.className = "btn-favorito";
        btnFavorito.textContent = "Agregar a Envíos";
        btnFavorito.onclick = () => {
            agregarAEnvio(producto.id)
        };

        divProducto.appendChild(imgProducto);
        divProducto.appendChild(tituloProducto);
        divProducto.appendChild(btnFavorito);
        
        contenedorProductos.appendChild(divProducto);
    })
}

function agregarAEnvio(id){
    const productoSeleccionado = productos.find( producto => producto.id === id);
    productosEnvio.push(productoSeleccionado);
    mostrarProductosEnvio(productosEnvio);
}

function mostrarProductosEnvio( favoritos ) {
    
    listadoEnvio.innerHTML =  "";

    favoritos.forEach(producto => {
        //Scripting
        const divProducto = document.createElement('div');
        divProducto.classList.add('card');

        const imgProducto = document.createElement('img');
        imgProducto.src = producto.img;
        imgProducto.classList.add('imagen-producto');

        const tituloProducto = document.createElement('h3');
        tituloProducto.textContent = producto.name;

        divProducto.appendChild(imgProducto);
        divProducto.appendChild(tituloProducto);
        
        listadoEnvio.appendChild(divProducto);
    })
}*/


/*****************DIA DE ENVIO*******************/
/********USO DE SWEET ALERT************/

document.querySelector("#check").addEventListener("click", check)

function check() {

    const day = document.querySelector("#day").value.toLowerCase()

    if (day === "martes" || day === "jueves") {
        Swal.fire(
            "El envío se realiza por la mañana"
        )
        

    } else if (day === "lunes" || day === "miercoles" || day === "viernes") {
        Swal.fire(
            "El envío se realiza por la tarde"
        )

    } else {
        Swal.fire(
            "No se realizan envíos, pruebe otro día"
        )
        
    }
}

/***********DATOS DE ENVIO*****************/
/**********aparece sweet alert otra vez********/

document.querySelector('#yell').addEventListener('click', run)

function run() {
    const fNames = document.querySelector('#fname').value
    const lastName = document.querySelector('#apellido').value
    const adress = document.querySelector('#domicilio').value
    const city = document.querySelector('#ciudad').value

    if (fNames !== " " || fMidName !== " " || lMidName !== " " || lName !== " ") {
        Swal.fire({
            title: 'Datos guardados!',
            text: "El envío se hará a nombre de " + fNames + ' ' + lastName + " en el domicilio " + ' ' + adress + ' ' + "de la localidad de " + city,
            imageUrl: 'https://images.pexels.com/photos/7843960/pexels-photo-7843960.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            imageWidth: 400,
            imageHeight: 250,
            imageAlt: 'Custom image',
        })

        

    }

}