 // const trocarImagem = document.getElementById('trocar-imagem');

  // let imagemTrocada = 0;


// trocarImagem.addEventListener('click' , function(){
//      const botaoTrocar = document.querySelectorAll('.imagem-check')
          
//    imagemTrocada++;
//   botaoTrocar [imagemTrocada].classList.add('imagem-marcada')
//  })


const trocarImagem = document.getElementById("trocar-imagem");
const botaoVoltar = document.getElementById("trocar-imagem");
const check = document.querySelectorAll(".check");
let imagemAtual = 0;

function esconderImagem() {
  const cartaoSelecionado = document.querySelector(".selecionada");
  cartaoSelecionado.classList.remove("selecionada");
}

function mostrarImagem(indiceCheck) {
  check[indiceCheck].classList.add("selecionada");
}

trocarImagem.addEventListener("click", function () {
  if (imagemAtual === cartoes.length - 1) return;

  esconderImagemSelecionada();

  imagemAtual++;
  mostrarImagem(imagemAtual);
});

imagemDesmarcada.addEventListener("click", function () {
  if (imagemAtual === 0) return;

  esconderImagemSelecionada();

  imagemAtual--;
  mostrarImagem(imagemAtual);
});






