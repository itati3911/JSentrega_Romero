document.querySelector('#registroMail').addEventListener('click', run)

function run() {
    const mailRegistrado = document.querySelector('#mailNuevo').value


    if (mailRegistrado !== " ") {
        Swal.fire({
            title: 'Datos guardados!',
            text: "Recibirás nuestro newsletter con las mejores ofertas!",
            imageUrl: 'https://images.pexels.com/photos/3760260/pexels-photo-3760260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            imageWidth: 400,
            imageHeight: 250,
            imageAlt: 'Custom image',
        })



    }

}