teclas = document.querySelectorAll('.tecla');

teclas.forEach((tecla) =>{
    tecla.addEventListener("click", (evento) =>{
        tocarSom(evento.target.textContent);
    })
})

function tocarSom(tecla){
    som = document.querySelector("#som_tecla_"+tecla.toLowerCase()).play();
} 