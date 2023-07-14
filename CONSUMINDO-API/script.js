const endereco = document.getElementById('endereco')
const bairro = document.getElementById('bairro')
const cidade = document.getElementById('cidade')
const estado = document.getElementById('estado')
const mensagemErro = document.getElementById('erro')


async function buscaEndereco(cep){
  mensagemErro.innerHTML = "";
  try {

    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultaCEPConvertida = await consultaCep.json();
 
    if (consultaCEPConvertida.erro) {
      throw Error ('Cep não existente!');
    }

    endereco.value = consultaCEPConvertida.logradouro;
    bairro.value = consultaCEPConvertida.bairro;
    cidade.value = consultaCEPConvertida.localidade;
    estado.value = consultaCEPConvertida.uf;
    
    return consultaCEPConvertida;
  } catch (erro) {
    mensagemErro.innerHTML = `<p>Cep inválido. Tente novamente!</p>`;
    endereco.value = ""
    bairro.value = ""
    cidade.value = ""
    estado.value = ""

  }
   
}

var cep = document.getElementById('cep');

cep.addEventListener("focusout", () => buscaEndereco(cep.value));