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
      userName: "Đức Hoàng",
      phone: "0941720502",
      password: "1",
      avt: "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-6/327320728_589569392995097_3866947794349105941_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7a1959&_nc_ohc=KnnUdGBkES8AX_d7uFJ&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfAMiuW2O_S89MdezRfMdyso-YiMiol0hcuM25dBbADGhw&oe=64D7FDF9"
    },
    {
      userName: "Hiếu",
      phone: "1",
      password: "1",
      avt: "https://scontent.fsgn16-1.fna.fbcdn.net/v/t1.6435-9/58978526_10158354585751729_7411073224387067904_n.png?_nc_cat=1&ccb=1-7&_nc_sid=be3454&_nc_ohc=BR6Orkc_J2QAX95dser&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfAoMvkgC41e_dCAkI-jA9698kpvqIV8Ri1BZCidaKHq7g&oe=64FB0AD5"
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
          user.phone === phoneInput.value &&
          user.password === passwordInput.value
        ) {
          foundValidUser = true;
          localStorage.setItem("username", user.userName);
          localStorage.setItem("password", user.password);
          localStorage.setItem("avt", user.avt);
        } else {
          if(foundValidUser) {

          }
          else {
            foundValidUser = false;
          }
          console.log("falid")
        }
      });
      if (foundValidUser) {
        const currentURL = window.location.href;
        const newURL = currentURL.replace("/page/login/", "/")
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
