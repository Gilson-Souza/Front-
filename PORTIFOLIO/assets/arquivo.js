let textos = [
  "Oi, eu sou...",
  "Gilson Crisostemo de Souza",
  "Dev back-end | front-end"
];
let velocidade = 100; // velocidade em milissegundos
let intervalo = 5000; // intervalo de 5 segundos em milissegundos

let divTexto = document.getElementById("texto");
let i = 0;

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