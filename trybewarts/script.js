// Captura de elementos
const buttonLogin = document.querySelector('#btn-login');
const btnSubmit = document.querySelector('#submit-btn');
const accept = document.querySelector('#agreement');
const counterText = document.querySelector('#counter');
const body = document.querySelector('body');

// Captura de Inputs
const namae = document.querySelector('#input-name');
const sobrenome = document.querySelector('#input-lastname');
const email = document.querySelector('#e-mail');
const inputEmail = document.querySelector('#input-email');
const inputPassword = document.querySelector('#senha');
const textArea = document.querySelector('#textarea');
const house = document.querySelector('#house');

buttonLogin.addEventListener('click', () => {
  if (
    email.value === 'tryber@teste.com'
    && inputPassword.value === '123456'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

accept.addEventListener('change', () => {
  btnSubmit.disabled = !accept.checked;
});

const confereText = () => {
  const maxLength = parseInt(textArea.getAttribute('maxlength'), 10);
  const words = maxLength - textArea.value.length;
  counterText.innerHTML = words;
};

textArea.addEventListener('keydown', confereText);
textArea.addEventListener('keyup', confereText);

const form = document.querySelector('#form-data');
const pName = document.createElement('p');
const pEmail = document.createElement('p');
const pHouse = document.createElement('p');
const pFamily = document.createElement('p');
const pSubject = document.createElement('p');
const pRate = document.createElement('p');
const pObs = document.createElement('p');

// btnSubmit.addEventListener('click', (e) => {
//   e.preventDefault();

// });

const subjects = () => {
  const subject = [];
  const checkboxes = document.querySelectorAll('.subject-container input[type="checkbox"]');
  for (let i = 0; i < checkboxes.length; i += 1) {
    if (checkboxes[i].checked) {
      subject.push(checkboxes[i].value);
    }
  }
  return subject.join(', ');
};

const imgLogo = document.createElement('img');

const createForm = () => {
  const namaeComplete = `${namae.value} ${sobrenome.value}`;
  pName.innerText = `Nome: ${namaeComplete}`;
  form.appendChild(pName);
  pEmail.innerText = `Email: ${inputEmail.value}`;
  form.appendChild(pEmail);
  pHouse.innerText = `Casa: ${house.options[house.selectedIndex].text}`;
  form.appendChild(pHouse);
  pFamily.innerText = `Família: ${document.querySelector('input[name="family"]:checked').value}`;
  form.appendChild(pFamily);
  pSubject.innerText = `Matérias: ${subjects()}`;
  form.appendChild(pSubject);
  pRate.innerText = `Avaliação: ${document.querySelector('input[name="rate"]:checked').value}`;
  form.appendChild(pRate);
  pObs.innerText = `Observações: ${textArea.value}`;
  form.appendChild(pObs);
  imgLogo.setAttribute('src', './images/trybewarts-colored.svg');
  form.appendChild(imgLogo);
  body.appendChild(form);
};

const formHidden = () => {
  // const evaluation = document.querySelector('#evaluation-form');
  // evaluation.style.display = 'none';
  const divForm = document.querySelector('.formPrimario');
  divForm.style.display = 'none';
};

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  formHidden();
  createForm();
  form.style.display = 'flex';
});
