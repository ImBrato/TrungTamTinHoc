const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const signIn = $(".signinButton_wrapper");
const login1 = $(".login_body");
const login2 = $(".login_body_2");
const login_backBtn = $(".login_backBtn");
const submitBtn = $(".login_submitBtn");

console.log(signIn);

const app = {
  user: [
    {
      name: "0941720502",
      password: "1",
    },
    {
      name: "1",
      password: "1",
    },
  ],
  handleEvent() {
    signIn.onclick = () => {
      login1.style.display = "none";
      login2.style.display = "flex";
      login_backBtn.style.display = "block";
    };
    login_backBtn.onclick = () => {
      login1.style.display = "flex";
      login2.style.display = "none";
      login_backBtn.style.display = "none";
    };
    submitBtn.onclick = () => {
      let foundValidUser = false;
      const phoneInput = $(".phoneInput");
      const passwordInput = $(".passwordInput");
      app.user.map((user) => {
        if (
          user.name === phoneInput.value &&
          user.password === passwordInput.value
        ) {
          foundValidUser = true;
          localStorage.setItem("username", phoneInput.value);
          localStorage.setItem("password", passwordInput.value);
        } else {
          foundValidUser = false;
        }
      });
      if (foundValidUser) {
        const currentURL = window.location.href;
        const newURL = currentURL.replace("/login/", "/home/");
        window.history.pushState({}, "", newURL);

        window.location.reload();
      } else {
        alert(11);
      }
    };
  },
  start() {
    app.handleEvent();
  },
};
app.start();
