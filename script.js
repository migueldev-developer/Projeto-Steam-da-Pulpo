const faixa = document.getElementById('faixa-jogos');
const setaEsquerda = document.querySelector('.seta.esquerda');
const setaDireita = document.querySelector('.seta.direita');

let indice = 0;
const totalItens = document.querySelectorAll('.selokouecadeomeumano').length;
const itensVisiveis = 5;
const totalGrupos = Math.ceil(totalItens / itensVisiveis);

function atualizarFaixa() {
  const larguraItem = faixa.querySelector('.selokouecadeomeumano').offsetWidth + 8; // 8px de margem
  faixa.style.transform = `translateX(-${indice * larguraItem * itensVisiveis}px)`;
}

setaDireita.addEventListener('click', () => {
  indice = (indice + 1) % totalGrupos;
  atualizarFaixa();
});

setaEsquerda.addEventListener('click', () => {
  indice = (indice - 1 + totalGrupos) % totalGrupos;
  atualizarFaixa();
});


/*  redirecionamento que os botões fazem  */



document.querySelectorAll(".ocastrin").forEach(botao => {
  botao.addEventListener("click", () => {
    const destino = document.getElementById("loud-coringa");
    if (destino) {
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelectorAll(".caiox").forEach(botao => {
  botao.addEventListener("click", () => {
    const destino = document.getElementById("playhard");
    if (destino) {
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelectorAll(".selokouecadeomeumano button").forEach(botao => {
  botao.addEventListener("click", () => {
    const destino = document.getElementById("playhard");
    if (destino) {
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});