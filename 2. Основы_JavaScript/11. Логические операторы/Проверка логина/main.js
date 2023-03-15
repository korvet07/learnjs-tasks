let login = prompt('Введите логин');

if (login === 'Админ') {

  let password = prompt('Введите пароль');

  if (password === 'Я главный') {

    alert('Здравствуйте!');
  } else if (password) {
    alert('неверный пароль!');
  } else {
    alert('отменено');
  }
} else if (login) {
  alert('Я вас не знаю');
} else {
  alert('отменено');
};
