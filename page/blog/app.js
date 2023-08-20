const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const createBtn = $(".createButton");
const addNewCourse = $(".add_newBlog__link");
const titleInput = $(".inputCreateBlog__header");
const contextInput = $(".inputCreateBlog__body");
const submitNewBlog = $(".submit_action");
const timeNow = new Date();
const timeNowHtmls = timeNow.getHours() + ":" + timeNow.getMinutes();
const loginBtn = $(".header_action__loginBtn");
const logoutBtn = $(".header_action__logoutBtn");
const postItem_optionBtn = $(".postItem_optionBtn");
const option_post = $(".option_post");
const module__left = $(".index_module-col__left");

const parent_item = $("index_module-col__left");

// Lấy tất cả các thẻ <a> trong phân trang
const paginationLinks = document.querySelectorAll(".pagination a");

const app = {
  blogs: [
    {
      avt: "https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg",
      name: "Alan king",
      title: "Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới 1",
      context:
        "Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng...",
      tags: [
        {
          title: "Reactjs",
          time: "2 tháng trước",
          duration: "1 phút đọc",
        },
      ],
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/7256/64448752c63c4.jpg",
    },
    {
      avt: "https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg",
      name: "Alan king",
      title: "Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới 2",
      context:
        "Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng...",
      tags: [
        {
          title: "Reactjs",
          time: "2 tháng trước",
          duration: "1 phút đọc",
        },
      ],
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/7256/64448752c63c4.jpg",
    },
    {
      avt: "https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg",
      name: "Alan king",
      title: "Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới 3 ",
      context:
        "Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng...",
      tags: [
        {
          title: "Reactjs",
          time: "2 tháng trước",
          duration: "1 phút đọc",
        },
      ],
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/7256/64448752c63c4.jpg",
    },
    {
      avt: "https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg",
      name: "Alan king",
      title: "Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới 4 " ,
      context:
        "Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng...",
      tags: [
        {
          title: "Reactjs",
          time: "2 tháng trước",
          duration: "1 phút đọc",
        },
      ],
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/7256/64448752c63c4.jpg",
    },
    {
      avt: "https://files.fullstack.edu.vn/f8-prod/user_photos/315518/643b789615dd1.jpg",
      name: "GZw",
      title: "Học viên Funix lạc đường tới Codeheroes 123 ",
      context:
        "Mình đã tham gia khóa học lập trình 6 tháng ở funix và cũng có nhiều lý do khác dẫn đến quá hạn quá học và cũng đã hoàn thành 4...",
      tags: [
        {
          title: "Reactjs",
          time: "3 tháng trước",
          duration: "1 phút đọc",
        },
      ],
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/7924/64a2487459fe5.jpg",
    },
    {
      avt: "https://files.fullstack.edu.vn/f8-prod/user_photos/315518/643b789615dd1.jpg",
      name: "GZw",
      title: "Học viên Funix lạc đường tới Codeheroes h9",
      context:
        "Mình đã tham gia khóa học lập trình 6 tháng ở funix và cũng có nhiều lý do khác dẫn đến quá hạn quá học và cũng đã hoàn thành 4...",
      tags: [
        {
          title: "Reactjs",
          time: "3 tháng trước",
          duration: "1 phút đọc",
        },
      ],
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/7924/64a2487459fe5.jpg",
    },
    {
      avt: "https://files.fullstack.edu.vn/f8-prod/user_photos/315518/643b789615dd1.jpg",
      name: "GZw",
      title: "Học viên Funix lạc đường tới Codeheroes 66",
      context:
        "Mình đã tham gia khóa học lập trình 6 tháng ở funix và cũng có nhiều lý do khác dẫn đến quá hạn quá học và cũng đã hoàn thành 4...",
      tags: [
        {
          title: "Reactjs",
          time: "3 tháng trước",
          duration: "1 phút đọc",
        },
      ],
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/7924/64a2487459fe5.jpg",
    },
    {
      avt: "https://files.fullstack.edu.vn/f8-prod/user_photos/315518/643b789615dd1.jpg",
      name: "GZw",
      title: "Học viên Funix lạc đường tới Codeheroes 8",
      context:
        "Mình đã tham gia khóa học lập trình 6 tháng ở funix và cũng có nhiều lý do khác dẫn đến quá hạn quá học và cũng đã hoàn thành 4...",
      tags: [
        {
          title: "Reactjs",
          time: "3 tháng trước",
          duration: "1 phút đọc",
        },
      ],
      img: "https://files.fullstack.edu.vn/f8-prod/blog_posts/7924/64a2487459fe5.jpg",
    },
  ],
  handleEvent() {
    (createBtn.onclick = () => {
      addNewCourse.style.display =
        addNewCourse.style.display === "none" ? "flex" : "none";
    }),
      (module__left.onclick = (e) => {
        console.log(e.target.className);
        if (e.target.closest(".material-symbols-outlined")) {
          optionPost.classList.add("active");
        }
      }),
      (logoutBtn.onclick = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("avt");
        console.log("success");
        window.location.reload();
      }),
      (submitNewBlog.onclick = () => {
        console.log(titleInput.value);
        const htmls = `
                <div class="blog_leftLayout">
                <div class="postItem_wrapper">
                    <div class="postItem_header">
                        <div class="postItem_author">
                            <a href="/@ttnguyen">
                                <div class="fallbackAvatar_avatar" style="--font-size: 2.9px;"><img
                                        class="imgCircle"
                                        src="${
                                          localStorage.getItem("username") !=
                                          null
                                            ? localStorage.getItem("avt")
                                            : "https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
                                        }"
                                        alt=" TTnguyen">
                                    </div>
                            </a>
                            <a href="/@ttnguyen" style=""><span>  ${
                              localStorage.getItem("username") != null
                                ? localStorage.getItem("username")
                                : "user"
                            }</span></a></div>
                        <div class="postItem_actions">
                            <div class="bookmark_toggleBtn PostItem_optionBtn">
                                <span class="material-symbols-outlined">
                                    bookmark
                                </span>
                            </div>
                            <div class="bostItem_optionBtn" aria-expanded="false">
                                <span class="material-symbols-outlined" >
                                    more_horiz
                                </span>
                                <div class="option_post" ">
                                                <div class="option_post_item delete_post">
                                                    <span class="material-symbols-outlined">
                                                        close
                                                    </span>
                                                    Xóa bài viết
                                                </div>
                                                <div class="option_post_item share_post">
                                                    <span class="material-symbols-outlined">
                                                        share
                                                        </span>
                                                        Chia sẻ bài viết
                                                </div>
                                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="postItem_body">
                        <div class="postItem_info">
                            <a href="/blog/su-khac-biet-giua-var-let-va-const-trong-javascript.html">
                                <h2 class="postItem_title">${
                                  titleInput.value
                                }</h2>
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
                `;
        $(".blog__left").innerHTML += htmls;
        localStorage.setItem("newPosts", htmls);
        var x = document.getElementById("snackbar");
        x.className = "show";

        // After 3 seconds, remove the show class from DIV
        setTimeout(function () {
          x.className = x.className.replace("show", "");
        }, 3000);
      });
  },
  render() {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (storedUsername && storedPassword) {
      console.log("Thông tin người dùng và mật khẩu đã được lưu trữ.");
      console.log("Tên người dùng:", storedUsername);
      console.log("Mật khẩu:", storedPassword);
      loginBtn.innerHTML = "Chào: " + storedUsername;
    } else {
      console.log("Thông tin người dùng và mật khẩu chưa được lưu trữ.");
    }
    const htmls = this.blogs.splice(0, 2).map((b) => {
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
                            <div class="option_post">
                                                <div class="option_post_item delete_post">
                                                    <span class="material-symbols-outlined">
                                                        close
                                                    </span>
                                                    Xóa bài viết
                                                </div>
                                                <div class="option_post_item share_post">
                                                    <span class="material-symbols-outlined">
                                                        share
                                                    </span>
                                                    Chia sẻ bài viết
                                                </div>
                                            </div>
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
                            ${b.tags.map((tag) => {
                              return ` <a class="postItem_tags"
                                    href="/blog/tag/javascript?page=1">${tag.title}</a>
                                    </a>
                                    <span style="font-size:
                                    14px;
                                    line-height:
                                    16.1px;">${tag.time}</span>
                                    <span class="postItem_dot">·</span>${tag.duration}</span>`;
                            })}
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
            `;
    });
    $(".blog__left").innerHTML += htmls.join("");
    localStorage.length > 0
      ? ($(".blog__left").innerHTML += localStorage.getItem("newPosts"))
      : "";

    paginationLinks.forEach((link, index) => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
        paginationLinks.forEach((link) => {
          link.classList.remove("active");
        });
        
        this.classList.add("active");
        showPosts(index)
      });
    });
    function showPosts(index) {
      const postsPerPage = 3; // Số bài viết hiển thị trên mỗi trang
      const startIndex = index * postsPerPage;
      const endIndex = startIndex + postsPerPage;
      
      
      const postsToShow = app.blogs.slice(index-1, index+2).map((b) => {
        console.log(123)
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
                        <div class="option_post">
                                            <div class="option_post_item delete_post">
                                                <span class="material-symbols-outlined">
                                                    close
                                                </span>
                                                Xóa bài viết
                                            </div>
                                            <div class="option_post_item share_post">
                                                <span class="material-symbols-outlined">
                                                    share
                                                </span>
                                                Chia sẻ bài viết
                                            </div>
                                        </div>
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
                        ${b.tags.map((tag) => {
                          return ` <a class="postItem_tags"
                                href="/blog/tag/javascript?page=1">${tag.title}</a>
                                </a>
                                <span style="font-size:
                                14px;
                                line-height:
                                16.1px;">${tag.time}</span>
                                <span class="postItem_dot">·</span>${tag.duration}</span>`;
                        })}
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
        `;
      });
    
      $(".blog__left").innerHTML = postsToShow.join("");
    }  
  },
  start() {
    app.handleEvent();
    app.render();
  },
};
app.start();
