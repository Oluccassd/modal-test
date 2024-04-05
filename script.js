const modal = document.getElementById('modal')
const btnabrir = document.getElementById('btn__modal--open')
const btnfechar = document.getElementById('btn__modal--close')

function abrirmodal(){
    modal.style.setProperty('opacity','1');
    modal.style.setProperty('pointer-events', 'all')
}
function fecharmodal(){
    modal.style.setProperty('opacity','0');
    modal.style.setProperty('pointer-events', 'none')
}

btnabrir.addEventListener('click', abrirmodal);
btnfechar.addEventListener('click', fecharmodal);
