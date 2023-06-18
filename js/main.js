const teclas = document.querySelectorAll('.tecla');

teclas.forEach((tecla) => {
    tecla.addEventListener("click", (evento) => {
        const extrairClasse = (evento.target.className).split(' ');
        tocarSom(extrairClasse[1]);
    })

    tecla.onkeydown = (evento) => {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }
})

function tocarSom(elemento) {
    if(elemento === null){
        alert('Elemento não existe');
    }
    document.querySelector("#som_"+elemento).play();
}

