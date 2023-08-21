const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const course = {
    popularCourse: [
        {
          title: "Thiết kế giao diện website",
          img: "../../assets/img/anh2.png",
          member: 315.129,
        },
        {
          title: "Chuyên viên thiết kế đồ họa & Web",
          img: "../../assets/img/anh1.png",
          member: 198.312,
        },
        {
          title: "Lập trình viên .Net",
          img: "../../assets/img/anh13.png",
          member: 296.125,
        },
        {
          title: "Lập trình Ứng dụng",
          img: "../../assets/img/anh15.png",
          member: 304.547,
        },
      ],
      newCourse: [
        {
          title: "Trí tuệ nhân tạo và Ứng dụng",
          img: "../../assets/img/anh9.png",
          member: 33.129,
        },
        {
          title: "Quản trị hệ thống mạng",
          img: "../../assets/img/anh3.png",
          member: 22.312,
        },
        {
          title: "Data Analyst with Excel",
          img: "../../assets/img/anh7.png",
          member: 37.125,
        },
        {
          title: "Machine Learning with Python",
          img: "../../assets/img/anh12.png",
          member: 34.542,
        },
      ],
      basicCourse: [
        {
          title: "Lập trình Cơ sở dữ liệu",
          img: "../../assets/img/anh10.png",
          member: 65.886,
        },
        {
          title: "Nhập môn Quản trị và An ninh mạng",
          img: "../../assets/img/anh11.png",
          member: 72.312,
        },
        {
          title: "Lập trình Android",
          img: "../../assets/img/anh4.png",
          member: 113.595,
        },
        {
          title: "Data Cloud Từ cơ bản tới nâng cao",
          img: "../../assets/img/anh6.png",
          member: 38.329,
        },
      ],
  
    }

const htmls = course.popularCourse.map(c => {
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
    `
})

$('.new_course__body').innerHTML += htmls.join('');


const htmls2 = course.newCourse.map(c => {
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
    `
})

$('.it_course__body').innerHTML += htmls2.join('');


const htmls3 = course.basicCourse.map(c => {
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
    `
})

$('.it_course__body').innerHTML += htmls3.join('');