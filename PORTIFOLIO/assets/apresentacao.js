const textos = [
  "Oi, eu sou...",
  "Gilson Crisostemo de Souza",
  "Desenvolvedor back-end | front-end",
  "Seja bem vindo ao meu Portifólio"
];
const velocidade = 100; // velocidade em milissegundos
const intervalo = 5000; // intervalo de 5 segundos em milissegundos

var divTexto = document.getElementById("texto");
var i = 0;

function exibirTexto() {
  let textoAtual = textos[i];
  let j = 0;

  function digitarTexto() {
    if (j < textoAtual.length) {
      divTexto.innerHTML += textoAtual.charAt(j);
      j++;
      setTimeout(digitarTexto, velocidade);
    } else {
      setTimeout(apagarTexto, intervalo);
    }
  }

  function apagarTexto() {
    if (divTexto.innerHTML !== "") {
      divTexto.innerHTML = divTexto.innerHTML.slice(0, -1);
      setTimeout(apagarTexto, velocidade);
    } else {
      i = (i + 1) % textos.length; // Avança para o próximo texto
      exibirTexto(); // Chama a função novamente para exibir o próximo texto
    }
  }

  digitarTexto();
}

exibirTexto();