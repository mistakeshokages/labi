let creditCardAttempts = 0;

document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const orgName = document.getElementById("orgName").value; 
  const creditCard = document.getElementById("creditCard").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  const errorMessage = document.getElementById("errorMessage");
  const firstNameHint = document.getElementById("firstNameHint");
  const lastNameHint = document.getElementById("lastNameHint");
  const orgNameHint = document.getElementById("orgNameHint");  
  const creditCardHint = document.getElementById("creditCardHint");
  const phoneHint = document.getElementById("phoneHint");
  const emailHint = document.getElementById("emailHint");

  errorMessage.textContent = "";
  firstNameHint.textContent = "";
  lastNameHint.textContent = "";
  orgNameHint.textContent = ""; 
  creditCardHint.textContent = "";
  phoneHint.textContent = "";
  emailHint.textContent = "";

  let isValid = true;

  if (!/^[A-Za-zА-Яа-яІіЇїЄє]+$/.test(firstName)) {
    firstNameHint.textContent = "Ім'я може містити лише букви.";
    isValid = false;
  }

  if (!/^[A-Za-zА-Яа-яІіЇїЄє]+$/.test(lastName)) {
    lastNameHint.textContent = "Прізвище може містити лише букви.";
    isValid = false;
  }

  if (!orgName.trim()) {  
    orgNameHint.textContent = "Поле 'Найменування організації' не може бути порожнім.";
    isValid = false;
  }

  if (!/^\d{16}$/.test(creditCard)) {
    creditCardAttempts++;
    if (creditCardAttempts >= 3) {
      errorMessage.textContent = "Ліміт спроб введення номеру картки досягнуто.";
      return;
    }
    creditCardHint.textContent = `Номер картки має складатися з 16 цифр. Спроба: ${creditCardAttempts}/3.`;
    isValid = false;
  }

  if (!/^\+380\d{9}$/.test(phone)) {
    phoneHint.textContent = "Телефон повинен бути в форматі +380123456789.";
    isValid = false;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailHint.textContent = "Введіть правильну електронну пошту.";
    isValid = false;
  }

  if (isValid) {
    alert("Форма успішно надіслана!");
  }
});

// Регулярний вираз

function checkInput() {
    const input = document.getElementById('inputField').value;
    const pattern = /a\d{1}a/g;
    const resultElement = document.getElementById('result');
    const matches = input.match(pattern);

    if (matches) {
        resultElement.textContent = 'Знайдені співпадіння: ' + matches.join(', ');
        resultElement.classList.remove('text-red-500');
        resultElement.classList.add('text-green-500');
    } else {
        resultElement.textContent = 'Не знайдено співпадінь';
        resultElement.classList.remove('text-green-500');
        resultElement.classList.add('text-red-500');
    }
}
