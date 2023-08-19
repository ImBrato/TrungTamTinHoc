const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const createBtn = $(".createButton");
const addNewCourse = $(".add_newBlog__link");
const loginBtn = $(".header_action__loginBtn");
const logoutBtn = $(".header_action__logoutBtn");

const app = {
  popularCourse: [
    {
      title: "Thiết kế giao diện website",
      img: "./assets/img/anh2.png",
      member: 123.129,
    },
    {
      title: "Quản trị hệ thống mạng",
      img: "./assets/img/anh3.png",
      member: 92.312,
    },
    {
      title: "Lập trình Android",
      img: "./assets/img/anh4.png",
      member: 97.125,
    },
    {
      title: "Lập trình PHP",
      img: "./assets/img/anh5.png",
      member: 34.542,
    },
  ],
  newCourse: [
    {
      title: "Lập trình viên .Net",
      img: "./assets/img/anh13.png",
      member: 89.129,
    },
    {
      title: "Quản trị hệ thống mạng",
      img: "./assets/img/anh3.png",
      member: 92.312,
    },
    {
      title: "Lập trình Android",
      img: "./assets/img/anh4.png",
      member: 97.125,
    },
    {
      title: "Lập trình PHP",
      img: "./assets/img/anh5.png",
      member: 34.542,
    },
  ],
  basicCourse: [
    {
      title: "Thiết kế giao diện website",
      img: "./assets/img/anh2.png",
      member: 123.129,
    },
    {
      title: "Quản trị hệ thống mạng",
      img: "./assets/img/anh3.png",
      member: 92.312,
    },
    {
      title: "Lập trình Android",
      img: "./assets/img/anh4.png",
      member: 97.125,
    },
    {
      title: "Lập trình PHP",
      img: "./assets/img/anh5.png",
      member: 34.542,
    },
  ],
  handleEvent() {
    createBtn.onclick = () => {
      addNewCourse.style.display =
        addNewCourse.style.display === "none" ? "flex" : "none";
    };
    addNewCourse.onclick = () => {
      addNewCourse.style.display =
        addNewCourse.style.display === "flex" ? "none" : "flex";
    };
    logoutBtn.onclick = () => {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      console.log("success");
      window.location.reload();
    };
  },
  render() {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
      console.log("Thông tin người dùng và mật khẩu đã được lưu trữ.");
      console.log("Tên người dùng:", storedUsername);
      console.log("Mật khẩu:", storedPassword);
      loginBtn.innerHTML = "Chào: " + storedUsername
    } else {
      console.log("Thông tin người dùng và mật khẩu chưa được lưu trữ.");
    }

    const popularCourses = this.popularCourse.map((c) => {
      return `
            <section class="item">
                <a class="item_link" title="HTML CSS Pro" target="_self" href="">
                <button class="item_button">Xem khóa học</button>
                <div class="img_wrapper">
                <img class="item_img"
                src="${c.img}"
                >
                                        </div>    
                </a>
                <h3>${c.title}</h3>
                <div class="studentCourse_count d-flex">
                    <span class="material-symbols-outlined">
                        groups_2
                        </span>
                        <span>${c.member}</span>
                </div>
            </section>
            `;
    });
    $(".new_course__body").innerHTML += popularCourses.join("");

    const newCourse = this.newCourse.map((c) => {
      return `
            <section class="item">
                <a class="item_link" title="HTML CSS Pro" target="_self" href="">
                <button class="item_button">Xem khóa học</button>
                <div class="img_wrapper">
                <img class="item_img"
                src="${c.img}"
                >
                                        </div>    
                </a>
                <h3>${c.title}</h3>
                <div class="studentCourse_count d-flex">
                    <span class="material-symbols-outlined">
                        groups_2
                        </span>
                        <span>${c.member}</span>
                </div>
            </section>
            `;
    });
    $(".it_course__body").innerHTML += newCourse.join("");
    const basicCourse = this.basicCourse.map((c) => {
      return `
            <section class="item">
                <a class="item_link" title="HTML CSS Pro" target="_self" href="">
                <button class="item_button">Xem khóa học</button>
                <div class="img_wrapper">
                <img class="item_img"
                src="${c.img}"
                >
                                        </div>    
                </a>
                <h3>${c.title}</h3>
                <div class="studentCourse_count d-flex">
                    <span class="material-symbols-outlined">
                        groups_2
                        </span>
                        <span>${c.member}</span>
                </div>
            </section>
            `;
    });
    $(".office_course__body").innerHTML += basicCourse.join("");
  },
  start() {
    app.handleEvent();
    app.render();
  },
};
app.start();
