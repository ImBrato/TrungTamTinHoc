
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const createBtn = $('.createButton');
const addNewCourse = $('.add_newBlog__link')
const titleInput = $('.inputCreateBlog__header')
const contextInput = $('.inputCreateBlog__body')
const submitNewBlog = $('.submit_action');
const timeNow = new Date();

const timeNowHtmls = timeNow.getHours() + ":" + timeNow.getMinutes();
console.log(timeNowHtmls);
const app = {
    blogs: [
        {
            avt: 'https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg',
            name: 'Alan king',
            title: 'Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới',
            context: 'Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng...',
            tags: [{
                title: 'Reactjs',
                time: '2 tháng trước',
                duration: '1 phút đọc',
            }],
            img: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/7256/64448752c63c4.jpg',
        },
        {
            avt: 'https://files.fullstack.edu.vn/f8-prod/user_photos/315518/643b789615dd1.jpg',
            name: 'GZw',
            title: 'Học viên Funix lạc đường tới Codeheroes',
            context: 'Mình đã tham gia khóa học lập trình 6 tháng ở funix và cũng có nhiều lý do khác dẫn đến quá hạn quá học và cũng đã hoàn thành 4...',
            tags: [{
                title: 'Reactjs',
                time: '3 tháng trước',
                duration: '1 phút đọc',
        }],
            img: '	https://files.fullstack.edu.vn/f8-prod/blog_posts/7924/64a2487459fe5.jpg'
    
        }
    ],
    handleEvent() {
        createBtn.onclick = () => {
          addNewCourse.style.display = addNewCourse.style.display === "none" ? "flex" : "none";
        },
        submitNewBlog.onclick = () => {
            console.log(titleInput.value)
            const htmls = `
                <div class="blog_leftLayout">
                <div class="postItem_wrapper">
                    <div class="postItem_header">
                        <div class="postItem_author">
                            <a href="/@ttnguyen">
                                <div class="fallbackAvatar_avatar" style="--font-size: 2.9px;"><img
                                        class="imgCircle"
                                        src="https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg"
                                        alt=" TTnguyen">
                                    </div>
                            </a>
                            <a href="/@ttnguyen" style=""><span> TTnguyen</span></a></div>
                        <div class="postItem_actions">
                            <div class="bookmark_toggleBtn PostItem_optionBtn">
                                <span class="material-symbols-outlined">
                                    bookmark
                                </span>
                            </div>
                            <div class="bostItem_optionBtn" aria-expanded="false">
                                <span class="material-symbols-outlined">
                                    more_horiz
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="postItem_body">
                        <div class="postItem_info">
                            <a href="/blog/su-khac-biet-giua-var-let-va-const-trong-javascript.html">
                                <h2 class="postItem_title">${titleInput.value}</h2>
                            </a>
                            <p class="postItem_desc">${contextInput.value}</p>
                            <div class="postItem_info2">
                               <span> Đã đăng ${timeNowHtmls}</span>
                            </div>
                           
                        </div>
                        <div class="postItem_thumb"><a
                            href="/blog/tat-tan-tat-ve-cai-thien-performance-cua-1-trang-web.html"><img
                                src="https://files.fullstack.edu.vn/f8-prod/blog_posts/7256/64448752c63c4.jpg"
                                alt="Tất tần tật về cải thiện Performance của 1 trang web🚀"></a>
                    </div>
                    </div>
                </div>
            </div>
                `
            $('.index_module-col__left').innerHTML += htmls
        }
      },
    render() {
        const htmls = this.blogs.map(b => {
            return `
            <div class="blog_leftLayout">
            <div class="postItem_wrapper">
                <div class="postItem_header">
                    <div class="postItem_author">
                        <a href="/@ttnguyen">
                            <div class="fallbackAvatar_avatar" style="--font-size: 2.9px;"><img
                                    class="imgCircle"
                                    src="${b.avt}"
                                    alt=" TTnguyen">
                                </div>
                        </a>
                        <a href="/@ttnguyen" style=""><span> TTnguyen</span></a></div>
                    <div class="postItem_actions">
                        <div class="bookmark_toggleBtn PostItem_optionBtn">
                            <span class="material-symbols-outlined">
                                bookmark
                            </span>
                        </div>
                        <div class="bostItem_optionBtn" aria-expanded="false">
                            <span class="material-symbols-outlined">
                                more_horiz
                            </span>
                        </div>
                    </div>
                </div>
                <div class="postItem_body">
                    <div class="postItem_info">
                        <a href="/blog/su-khac-biet-giua-var-let-va-const-trong-javascript.html">
                            <h2 class="postItem_title">${b.title}</h2>
                        </a>
                        <p class="postItem_desc">${b.context}</p>
                        <div class="postItem_info2">
                            ${
                                b.tags.map(tag => {
                                   return  ` <a class="postItem_tags"
                                    href="/blog/tag/javascript?page=1">${tag.title}</a>
                                    </a>
                                    <span style="font-size:
                                    14px;
                                    line-height:
                                    16.1px;">${tag.time}</span>
                                    <span class="postItem_dot">·</span>${tag.duration}</span>`
                                })
                            }
                        </div>
                       
                    </div>
                    <div class="postItem_thumb"><a
                        href="/blog/tat-tan-tat-ve-cai-thien-performance-cua-1-trang-web.html"><img
                            src="${b.img}"
                            alt="Tất tần tật về cải thiện Performance của 1 trang web🚀"></a>
                </div>
                </div>
            </div>
        </div>
            `
        })
        $('.index_module-col__left').innerHTML += htmls.join('');
    },
    start() {
        app.handleEvent();
        app.render();
    }
}
app.start();
