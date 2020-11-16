// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector("#menu-toggle");
// Создаем переменную, в которую положим меню
let menu = document.querySelector(".sidebar");
// отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener("click", function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню
  menu.classList.toggle("visible");
});
// Регулярные выражения так пишут/^регулярные выражения$/;
const regExpValidEmail = /^\w+@\w+\.\w{2,}$/;

const loginElem = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector(".login-email");
const passwordInput = document.querySelector(".login-password");
const loginSignup = document.querySelector(".login-signup");
const userElem = document.querySelector(".user");
const userNameElem = document.querySelector(".user-name");

const exitElem = document.querySelector(".exit");
const editElem = document.querySelector(".edit");
const editContainer = document.querySelector(".edit-container");
const editUsername = document.querySelector(".edit-username");
const editPhotoURL = document.querySelector(".edit-photo");
const userАvatarElem = document.querySelector(".user-avatar");

const postsWrapper = document.querySelector(".posts");

const ListUsers = [{
    id: "01",
    email: "irinka04@tut.by",
    password: "12345",
    displayName: "Irinka",
  },
  {
    id: "02",
    email: "zexov02@tut.by",
    password: "12345",
    displayName: "Valera",
  },
  {
    id: "03",
    email: "tt@tut.by",
    password: "12345",
    displayName: "TT",
  }
];
const setUsers = {
  user: null,
  logIn(email, password, handler) {
    if (!regExpValidEmail.test(email)) {
      alert("email не валиден");
      // return; прерывает функцию
      return;
    }

    const user = this.getUser(email);
    if (user && user.password === password) {
      this.authorizedUser(user);
      handler();
    } else {
      alert("Пользователь с такими данными не найден.");
    }
  },
  logOut(handler) {
    this.user = null;
    handler();
  },
  signUp(email, password, handler) {
    if (!regExpValidEmail.test(email)) {
      alert("email не валиден");
      // return; прерывает функцию
      return;
    }

    // Авторегистрация проверка есть ли такой емаил
    if (!email.trim() || !password.trim()) {
      alert("Введите данные");
      return;
    }
    if (!this.getUser(email)) {
      const user = {
        email,
        password,
        displayName: email.substring(0, email.indexOf("@")),
      };
      ListUsers.push(user);
      this.authorizedUser(user);
      handler();
    } else {
      alert("пользователь с таким email уже зарегистрирован");
    }
  },
  // Редактирование Имя,фото
  editUser(userName, userPhoto, handler) {
    if (userName) {
      this.user.displayName = userName;
    }
    if (userPhoto) {
      this.user.photo = userPhoto;
    }
    handler();
  },
  getUser(email) {
    return ListUsers.find((item) => item.email === email);
  },
  authorizedUser(user) {
    this.user = user;
  },
};
// В посте методы как добовлять посты
const setPosts = {
  allPost: [{
      title: "Загрловок поста1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quas perferendis fugit quam, quibusdam repellendus praesentium optio, corrupti voluptates in soluta! Ut distinctio quia vitae repellat totam tenetur, quod sed fugiat autem recusandae omnis explicabo asperiores, quis pariatur tempore. Aliquid cupiditate autem optio nostrum debitis distinctio ut illo, aliquam enim unde accusantium aperiam qui labore et iste a quae sequi. ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis distinctio at architecto nam harum nobis ut? Asperiores aliquid illum ipsum facere magni expedita itaque explicabo fuga. Facilis quasi quidem sint.",
      tags: ["свежее", "новое", "горячее", "мое", "случайность"],
      author: "irinka04@tut.by",
      date: "11.11.2020, 20:54:00",
      like: 15,
      comments: 20,
    },
    {
      title: "Загрловок поста 2",
      text: "Далеко - далеко за словесными ами в стране гласных и согласных тыбныесты.Языком что ротмаленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая",
      tags: ["свежее", "новое", "горячее", "мое", "случайность"],
      author: "zexov02@tut.by",
      date: "11.11.2020, 20:54:00",
      like: 45,
      comments: 12,
    },
    {
      title: "Загрловок поста 3",
      text: "Далеко - далеко за словесными ами в стране гласных и согласных тыбныесты.Языком что ротмаленький реторический вершину текстов обеспечивает гор свой назад решила сбить маленькая",
      tags: ["свежее", "новое", "горячее", "мое", "случайность"],
      author: "zex@dhdj.ru",
      date: "11.11.2020, 20:54:00",
      like: 45,
      comments: 12,
    },
  ],
};

const toggleAuthDom = () => {
  const user = setUsers.user;

  if (user) {
    loginElem.style.display = "none";
    userElem.style.display = "";
    userNameElem.textContent = user.displayName;
    userАvatarElem.src = user.photo || userАvatarElem.src;
  } else {
    loginElem.style.display = "";
    userElem.style.display = "none";
  }
};

const showAllPosts = () => {
  let postsHTML = '';

  setPosts.allPost.forEach(post => {

      const {
        title,
        text,
        date,
        tags
      } = post;

      postsHTML += `
    <section class="post"> 
      <div class = "post-body">
          <h2 class = "post-title">${title}</h2>
          <p class = "post-text">${text}</p>
          <p class = "post-text">
          Далеко - далеко за словесными горами в стране 
          </p>
        <div class = "tags" >${tags}
        <a href = "#" class = "tag" > #свежее </a>
        <a href = "#" class = "tag" > #новое </a> 
        <a href = "#" class = "tag" > #горячее </a>
        <a href = "#" class = "tag" > #мое </a>
        <a href = "#" class = "tag" > #случайность </a>
      </div >    
        <div class = "post-footer" >
          <div class = "post-buttons">
            <button class = "post-button likes">
              <svg width = "19" height = "20" class = "icon icon-like">
              <use xlink: href = "img/icons.svg#like"></use></svg>
              <span class = "likes-counter"> 26 </span>
            <button class = "post-button comments">
              <svg width = "21" height = "21" class = "icon icon-comment">
              <use xlink: href = "img/icons.svg#comment"></use></svg>
              <span class = "comments-counter" > 157 </span>
            </button >
            <button class = "post-button save">
              <svg width = "19" height = "19" class = "icon icon-save">
              <use xlink: href = "img/icons.svg#save"></use></svg>
            </button>
            <button class = "post-button share">
                <svg width = "17"
                height = "19"
                class = "icon icon-share">
                <use xlink: href = "img/icons.svg#share"> </use></svg >
            </button>
          </div>
        </div>
          <div class = "post-author">
                <div class = "author-about">
                    <a href = "#" class = "author-username"> arteislamov </a>
                    <span class = "post-time">${date}</span>
                </div> 
                <a href = "#" class = "author-link">
                <img src = "img/avatar.jpeg" alt = "avatar" class = "author-avatar"/></a> 
                </div>
    </section >
    `;
    }),
    postsWrapper.innerHTML = postsHTML
};

const init = () => {
  // События навешиваем-
  loginForm.addEventListener("submit", (event) => {
    // event метод котрый отменяет стандартное бромаузерное поведение пример:event.preventDefault();
    event.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
    loginForm.reset();
  });
  loginSignup.addEventListener("click", (event) => {
    event.preventDefault();
    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    setUsers.signUp(emailValue, passwordValue, toggleAuthDom);
    loginForm.reset();
  });

  exitElem.addEventListener("click", (event) => {
    event.preventDefault();
    setUsers.logOut(toggleAuthDom);
  });

  editElem.addEventListener("click", (event) => {
    event.preventDefault();
    editContainer.classList.toggle("visible");
    editUsername.value = setUsers.user.displayName;
  });
  editContainer.addEventListener("submit", (event) => {
    event.preventDefault();

    setUsers.editUser(editUsername.value, editPhotoURL.value, toggleAuthDom);
    editContainer.classList.remove("visible");
  });

  showAllPosts();
  toggleAuthDom();
};
document.addEventListener("DOMContentloaded", init);
init();