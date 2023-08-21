const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const createBtn = $(".createButton");
const addNewCourse = $(".add_newBlog__link");
const loginBtn = $(".header_action__loginBtn");
const logoutBtn = $(".header_action__logoutBtn");
const btn_menu = $(".btn__menu");
const moblieMenu__wrapper = $(".moblieMenu__wrapper");
const slides = $$(".slide");

let mybutton = $("#myBtn");
var counter = 0;
var flag = false;
slides.forEach((slide, index) => {
  slide.style.left = `${index *120}%`;
});
const goPrev = () => {
  console.log(123);
  counter--
  slideImg(counter);
};
const goNext = () => {
  counter++;
  slideImg(counter);
};
const slideImg = (counter) => { // Truyền counter vào hàm slideImg
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 120}%)`; 
  });
};
setInterval(() =>{
  if(flag){
    if(counter == 0){
      flag = false;
    }
    else{
      counter--;
    }
  }
  else{
    if(counter == 2){
      flag = true;
    }
    else{
      counter++;
    }
  }
  slideImg(counter)
} , 1500)
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Sử dụng hiệu ứng mượt mà
  });
}

const app = {
  popularCourse: [
    {
      title: "Thiết kế giao diện website",
      img: "./assets/img/anh2.png",
      member: 315.129,
    },
    {
      title: "Chuyên viên thiết kế đồ họa & Web",
      img: "./assets/img/anh1.png",
      member: 198.312,
    },
    {
      title: "Lập trình viên .Net",
      img: "./assets/img/anh13.png",
      member: 296.125,
    },
    {
      title: "Lập trình Ứng dụng",
      img: "./assets/img/anh15.png",
      member: 304.547,
    },
  ],
  newCourse: [
    {
      title: "Trí tuệ nhân tạo và Ứng dụng",
      img: "./assets/img/anh9.png",
      member: 33.129,
    },
    {
      title: "Quản trị hệ thống mạng",
      img: "./assets/img/anh3.png",
      member: 22.312,
    },
    {
      title: "Data Analyst with Excel",
      img: "./assets/img/anh7.png",
      member: 37.125,
    },
    {
      title: "Machine Learning with Python",
      img: "./assets/img/anh12.png",
      member: 34.542,
    },
  ],
  basicCourse: [
    {
      title: "Lập trình Cơ sở dữ liệu",
      img: "./assets/img/anh10.png",
      member: 65.886,
    },
    {
      title: "Nhập môn Quản trị và An ninh mạng",
      img: "./assets/img/anh11.png",
      member: 72.312,
    },
    {
      title: "Lập trình Android",
      img: "./assets/img/anh4.png",
      member: 113.595,
    },
    {
      title: "Data Cloud Từ cơ bản tới nâng cao",
      img: "./assets/img/anh6.png",
      member: 38.329,
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
      localStorage.removeItem("username");
      localStorage.removeItem("password");
      console.log("success");
      window.location.reload();
    };
    btn_menu.onclick = () => {
      moblieMenu__wrapper.style.display = "block";
    };
    document.onclick = (e) => {
      console.log(e.target);
      if (e.target === moblieMenu__wrapper) {
        moblieMenu__wrapper.style.display = "none";
      }
    };
  },
  render() {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
      console.log("Thông tin người dùng và mật khẩu đã được lưu trữ.");
      console.log("Tên người dùng:", storedUsername);
      console.log("Mật khẩu:", storedPassword);
      loginBtn.innerHTML = "Chào: " + storedUsername;
      logoutBtn.style.display = "inline-block";
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
