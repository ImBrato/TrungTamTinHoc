const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const createBtn = $('.createButton');
const addNewCourse = $('.add_newBlog__link')



const app = {
    course: [
        {
            title: "Khoa hoc 2",
            img: "/assets/img/anh2.png",
            member: 120.981
        },
        {
            title: "Khoa hoc 3",
            img: "/assets/img/anh3.png",
            member: 98.123
        },
        {
            title: "Khoa hoc 4",
            img: "/assets/img/anh4.png",
            member: 23.123
        },
        {
            title: "Khoa hoc 7",
            img: "/assets/img/anh5.png"
        },
        {
            title: "Khoa hoc 8",
            img: "/assets/img/anh5.png"
        },
    ],
    handleEvent() {
        createBtn.onclick = () => {
          addNewCourse.style.display = addNewCourse.style.display === "none" ? "flex" : "none";
        }
       
        
      },
    render() {
       
        const htmls = this.course.map(c => {
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
        $('.scrollList_body').innerHtml += htmls.join('');
        
    },
    start() {
        app.handleEvent();
        app.render();
        
    }


}
app.start();


