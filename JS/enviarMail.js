
let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let telefono = document.getElementById("tel");
let consulta = document.getElementById("consulta");
let EnviarConsulta = document.getElementById("EnviarConsulta");
let botonx = document.getElementById("paprobar");
let formContacto = document.getElementById("formContacto");

EnviarConsulta.addEventListener('click', function (e) {
    e.preventDefault();
    
});


EnviarConsulta.addEventListener("click", Enviar);


function Enviar(){

    
    if (nombre.value && email.value && telefono.value){

        console.log("Enviar ok");
        
        formContacto.action = '../enviar.php';
        formContacto.method = 'POST';
        formContacto.submit();


    } else{

        Swal.fire({
            icon: 'error',
            text: 'Completar todos los formularios de carácter obligatorio (*)',
            color: 'rgb(134, 9, 32)',
            confirmButtonColor: 'rgb(134, 9, 32)',
          })
        
    }
}