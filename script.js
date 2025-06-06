let modal = document.querySelector('.modal-birthday');
let modalContent = document.querySelector('#card-modal');

//Quando a página carregar
window.onload = function () {
    //Add display flex no modal
    modal.style.display = 'flex';
    //Add overflow hidden no body
    document.body.style.overflow = 'hidden';
}

//Quando clicar no fundo, fecha o modal
modal.addEventListener('click', function(){
    fecharModal();
})

//Não deixa clicar no card do modal, assim não fecha caso clique em cima
modalContent.addEventListener('click', function(e){
    e.stopPropagation();
})

//Função de fechar modal
function fecharModal() {
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
}