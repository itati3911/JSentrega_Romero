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