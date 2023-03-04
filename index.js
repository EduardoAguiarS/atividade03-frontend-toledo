const email = document.querySelector('#email');
const name = document.querySelector('#name');
const message = document.querySelector('#message');
const send = document.querySelector('#send');

const errorMessage = (element, message) => {
  // add border red
  element.style.border = '1px solid red';

  // create error element
  const error = document.createElement('p');
  error.textContent = message;
  error.style.color = 'red';
  error.style.fontSize = '12px';
  error.style.marginTop = '5px';

  if (element.nextSibling) {
    element.nextSibling.remove();
  }

  // insert error after element
  element.parentNode.insertBefore(error, element.nextSibling);

  // remove error on element focus
  element.addEventListener('focus', () => {
    element.style.border = '1px solid #ccc';
    error.remove();
  })
}

const checkValid = () => {
  email.addEventListener('change', () => {
    if (email.value.includes('@') || email.value.includes('.')) {
      email.style.border = '1px solid green';
    } else {
      errorMessage(email, 'E-mail inválido');
    }
  });
  
  name.addEventListener('change', () => {
    if (name.value.length >= 3) {
      name.style.border = '1px solid green';
    } else {
      errorMessage(name, 'Nome inválido');
    }
  });
  
  message.addEventListener('change', () => {
    if (message.value.length >= 10) {
      message.style.border = '1px solid green';
    } else {
      errorMessage(message, 'Mensagem inválida');
    }
  });
}
checkValid();

send.addEventListener('click', (e) => {
  e.preventDefault();
  
  if (email.value === '' || name.value === '' || message.value === '') {
    if (email.value === '' || !email.value.includes('@') || !email.value.includes('.')) {
      errorMessage(email, 'Campo e-mail obrigatório');
    }

    if (name.value === '' || name.value.length < 3) {
      errorMessage(name, 'Campo nome obrigatório');
    }

    if (message.value === '' || message.value.length < 10) {
      errorMessage(message, 'Campo mensagem obrigatório');
    }

    return;
  } else {
    // redirect to success page
    window.location.href = 'success.html';
    
    // clear form
    email.value = '';
    name.value = '';
    message.value = '';
  }
})