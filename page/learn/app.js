const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const course = [
    {
        title: "Thiết kế giao diện website",
        img: "/assets/img/anh2.png",
        member: 123.129
    },
    {
        title: "Quản trị hệ thống mạng",
        img: "/assets/img/anh3.png",
        member: 92.312
    },
    {
        title: "Lập trình Android",
        img: "/assets/img/anh4.png",
        member: 97.125
    },
    {
        title: "Lập trình PHP",
        img: "/assets/img/anh5.png",
        member: 34.542
    },
  
]

const htmls = course.map(c => {
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