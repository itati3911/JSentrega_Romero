class Dato {
    constructor(titular, numeros, emisora, tipo) {
        this.titular = titular;
        this.numeros = numeros;
        this.emisora = emisora;
        this.tipo = tipo;
    }
}

let nombreUsuario;
document.getElementById("formulario-usuario").addEventListener("submit", manejadorFormularioUsuario);

function manejadorFormularioUsuario(e) {
    e.preventDefault();
    nombreUsuario = document.getElementById("user").value;

    let listadodeDatos = document.getElementById("listadodeDatos");
    const datos = JSON.parse(localStorage.getItem(nombreUsuario));

    if (datos == null) {
        listadodeDatos.innerHTML = "<h1>No hay datos para mostrar</h1>"
    } else {
        mostrarDatos(datos);
    }
    mostrarPanel();
    e.target.reset()
}

function mostrarDatos(datos) {
    let listadodeDatos = document.getElementById("listadodeDatos");
    listadodeDatos.innerHTML = "";


    /*MODIFICADO*/
    datos.forEach(dato => {
        let li = document.createElement("li");
        li.innerHTML = `<hr> 
        ${dato.titular} - 
        ${dato.numeros && dato.numeros + " Frente de la tarjeta -"} - 
        ${dato.emisora && dato.emisora + " No emitida por Banco -"} - 
        ${dato.tipo}`;

        const botonBorrar = document.createElement("button");
        botonBorrar.innerText = "Eliminar tarjeta";
        botonBorrar.addEventListener("click", () => {
            eliminarData(dato);
        })
        li.appendChild(botonBorrar);
        li.classList.add("card");
        li.setAttribute("data-tilt", "");
        li.setAttribute("data-tilt-scale", "1.1");

        listadodeDatos.appendChild(li);
    });
}

function mostrarPanel() {
    const opciones = document.getElementById("opciones");



    /***toastify****/
    Toastify({

        text: "Sesión iniciada",

        duration: 3000

    }).showToast();




    opciones.innerHTML =
        `<h2.style.fontSize = 50 id="bienvenida">¡Te damos la bienvenida, ${nombreUsuario}!</h2>
      <br>
      <h4 id="tarjetas">Ingresá los datos de la tarjeta que almacenaremos para que operes si no se encuentra registrada<h4>
      <br>
      <form id="formulario-datos">
        <input type="text" id="titular" placeholder="Titular de la tarjeta">
        <input type="text" id="numeros" placeholder="Números de la tarjeta">
        <input type="text" id="emisora" placeholder="Emisora de la tarjeta (VISA, AMEX, etc)">
        <input type="text" id="tipo" placeholder="Débito o crédito">
        <button type="submit">Agregar tarjeta</button>
      </form>`;

    document.getElementById("formulario-datos").addEventListener("submit", agregarData);
}

function agregarData(e) {
    e.preventDefault();


    const titular = document.getElementById("titular").value;
    const numeros = document.getElementById("numeros").value;
    const emisora = document.getElementById("emisora").value;
    const tipo = document.getElementById("tipo").value;

    const dato = new Dato(titular, numeros, emisora, tipo);

    const DataEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario));
    if (DataEnLocalStorage == null) {
        localStorage.setItem(nombreUsuario, JSON.stringify([dato]));
        mostrarDatos([dato]);
    } else {
        DataEnLocalStorage.push(dato);
        localStorage.setItem(nombreUsuario, JSON.stringify(DataEnLocalStorage));
        mostrarDatos(DataEnLocalStorage);
    }
    e.target.reset();
}

function eliminarData(dato) {
    const DataEnLocalStorage = JSON.parse(localStorage.getItem(nombreUsuario));
    const nuevoArray = DataEnLocalStorage.filter(item => item.titular != dato.titular);
    localStorage.setItem(nombreUsuario, JSON.stringify(nuevoArray));
    mostrarDatos(nuevoArray);
}



