const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


const course = [
    {
        title: "1. Tìm hiểu về khái niệm Back-end",
        des: "Để theo ngành IT - Phần mềm cần rèn luyện những kỹ năng nào? Bạn đã có sẵn tố chất phù hợp với ngành chưa? Cùng thăm quan các công ty IT và tìm hiểu về văn hóa, tác phong làm việc của ngành này nhé các bạn.",
        body: [
            {
                video: `<iframe width="350" height="200" src="https://www.youtube.com/embed/XKuCkc-F-nQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
                title: "Back-end là gì? Cách hoạt động ra sao",
                tag: "Miễn phí",
                des:"Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi."
            }
        ],
        
    },
    {
        title: "2. Cơ sở dữ liệu",
        des: "Để học web CSDL chúng ta luôn bắt đầu với ngôn ngữ SQL và CSS, đây là 2 ngôn ngữ có mặt trong mọi website trên internet. Trong khóa học này F8 sẽ chia sẻ từ những kiến thức cơ bản nhất. Sau khóa học này bạn sẽ tự làm được 2 giao diện websites là The Band và Shopee.",
        body: [
            {
                video: `<iframe width="350" height="200" src="https://www.youtube.com/embed/GDVNkenmIHU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
                title: "Khóa học Cơ sở dữ liệu cơ bản",
                tag: "Miễn phí",
                des:"Từ cơ bản tới chuyên sâu, thực hành 8 dự án, hàng trăm bài tập, trang hỏi đáp riêng, cấp chứng chỉ sau khóa học và mua một lần học mãi mãi."
            }
        ],
        
    },
    {
        title: "3. Lập trình Java",
        des: "Với HTML, CSS bạn mới chỉ xây dựng được các websites tĩnh, chỉ bao gồm phần giao diện và gần như chưa có xử lý tương tác gì. Để thêm nhiều chức năng phong phú và tăng tính tương tác cho website bạn cần học Javascript.",
        body: [
            {
                video: `<iframe width="350" height="200" src="https://www.youtube.com/embed/2b70hAXPSuc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
                title: "Lập Trình Java Cơ Bản",
                tag: "Miễn phí",
                des:"Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học."
            }
        ],
        
    },
   
  
]

const htmls = course.map(c => {
    return `
    <div class="learningGroup_Wrapper">
    <h2 class="learningGroup_title">${c.title}</h2>
    <p class="learningGroup_desc">${c.des}</p>
    <div class=" body">
    <div>
        <div class="courseItem_wrapper">
            ${
                c.body.map(b => {
                   return `
                   <div class="courseItem_inner">
                   <div class="courseItem_thumb">
                       ${b.video}
                   </div>
                   <div class="courseItem_info">
                       <h2 class="CourseItem_title"><a href="/courses/lessons-for-newbie">${b.title}<span class="courseItem_free-title">${b.tag}</span></a>
                       </h2>
                       <div class="courseItem_price"></div>
                       <p class="courseItem_desc">${b.des}</p><a
                           class="courseItem_detail-btn"
                           href="/courses/lessons-for-newbie">Xem khóa học</a>
                   </div>
               </div>
                   ` 
                })
            }
            
        </div>
    </div>
</div>
</div>
    `
})

$('.index-module_col_left').innerHTML += htmls.join('');