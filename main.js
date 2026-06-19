const formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const edad = document.querySelector("#edad");
const mensaje = document.querySelector("#mensaje")

formulario.addEventListener("submit", verificarEdad);

function verificarEdad(event){
    event.preventDefault();

    const nombreUsuario = nombre.value;
    const edadUsuario = Number(edad.value);

    if(edadUsuario >=18){
        mensaje.textContent = `Bienvenido, ${nombreUsuario}, tienes acceso al evento`;
        mensaje.classList.add("verde");
        mensaje.classList.remove("rojo");
    }else{
        mensaje.textContent = `Lo sentimos, ${nombreUsuario}, no tienes acceso al evento`;
        mensaje.classList.add("rojo");
        mensaje.classList.remove("verde");
    }
}

