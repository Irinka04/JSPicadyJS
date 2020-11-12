// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})
const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');
const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');

const ListUsers = [{
    id: '01',
    email: 'irinka04@tut.by',
    password: '12345',
    displayName: 'Irinka'
  },
  {
    id: '02',
    email: 'zexov02@tut.by',
    password: '12345',
    displayName: 'Valera'
  },
  {
    id: '03',
    email: 'tt@tut.by',
    password: '12345',
    displayName: 'TT'
  }
];
const setUsers = {
  user: null,
  logIn(email, password, handler) {
    const user = this.getUser(email);
    if (user && user.password === password) {
      this.authorizedUser(user);
      handler();
    } else {
      alert('Пользователь с такими данными не найден.')
    }
  },
  logOut() {
    console.log('выход');
  },
  signUp(email, password, handler) {
    // Авторегистрация проверка есть ли такой емаил
    if (!this.getUser(email)) {
      const user = {
        email,
        password,
        displayName: email
      };
      ListUsers.push(user);
      this.authorizedUser(user);
      handler();
    } else {
      alert('пользователь с таким email уже зарегистрирован')
    }
  },
  getUser(email) {
    return ListUsers.find((item) => item.email === email)
  },
  authorizedUser(user) {
    this.user = user;
  }
}
const toggleAuthDom = () => {
  const user = setUsers.user;
  if (user) {
    loginElem.getElementsByClassName.display = 'none';
    userElem.getElementsByClassName.display = '';
    userNameElem.textContent = user.displayName;
  } else {
    loginElem.getElementsByClassName.display = '';
    userElem.getElementsByClassName.display = 'none';
  }
};
// События навешиваем
loginForm.addEventListener('submit', (event) => {
  // event метод котрый отменяет стандартное бромаузерное поведение пример:event.preventDefault();
  event.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.logIn(emailValue, passwordValue, toggleAuthDom);

});
loginSignup.addEventListener('click', event => {
  event.preventDefault();
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
});
toggleAuthDom();














// Один из вариантов навешевания событий   
//getUser(email){
// let user = null;
//for (let i = 0;i < ListUsers.length; i++){
// if  (ListUsers[i].email === email){
// user = ListUsers[i];
//break;
//}
//}
//return user;
//}