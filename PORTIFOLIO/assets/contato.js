//Whatsap
function whatsSendMessage() {
  let num = `+5511947799976`
  let msg = `Olá, Gilson! Eu encontrei o seu contato aqui no seu portfólio e gostaria de saber:`

  window.open(`https://wa.me/${num}?text=${msg}`, '_blank');
};

//Email valido
function validateContactForm() {
  let validate = true

  if (!$('#subject').val()) {
      validate = false
  }

  if (!$('#name').val()) {
      validate = false
  }

  if (!$('#email').val()) {
      validate = false
  }

  if (!$('#message').val()) {
      validate = false
  }

  return validate
};

//aviso para preencher os campos 
function sendEmailContact() {
  if (!validateContactForm()) {
      Alert($('#email-alert'), 'Por favor, preencha todos os campos obrigatórios.', 'warning')
      return
  }

  let subject = $('#subject').val()
  let phone = $('#phone').val()
  let name = $('#name').val()
  let email = $('#email').val()
  let message = $('#message').val()

  let body = `Email: ${email}
              Nome: ${name}
              Telefone: ${phone}
              Mensagem: ${message}
              `

  window.open(`mailto:gilsonsouza.dev@gmail.com?subject=${subject}&body=${body}`)
};

function Alert(alertEl, message, type) {
  if ($('.alert').length) {
      $('.alert').detach()
  }

  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'


  alertEl.append(wrapper)
};
