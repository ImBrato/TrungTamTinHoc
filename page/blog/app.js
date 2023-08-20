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
const moblieMenu__wrapper = $(".moblieMenu__wrapper")
const btn_menu = $(".btn__menu");
const parent_item = $("index_module-col__left");
const paginationLinks = $$(".pagination a");

const app = {
  blogs: [
    {
      avt: "https://files.fullstack.edu.vn/f8-prod/user_photos/323800/6464902b20c91.jpg",
      name: "Alan king",
      title: "Cảm thấy khó khăn khi chuyển sang học một ngôn ngữ mới",
      context:
        "Tôi làm chuyên môn về phân tích dữ liệu, chủ yếu là dùng phần mềm chuyên môn sâu và dùng rất nhiều SQL db, python. Hai món đó cũng...",
      tags: [
        {
          title: "Reactjs",
          time: "2 tháng trước",
          duration: "1 phút đọc",
        },
      ],
      img: "/assets/img/1.png"
    },
    {
      avt: "https://files.fullstack.edu.vn/f8-prod/user_avatars/345914/64cca745cf311.jpg",
      name: "Dev Ngáo",
      title: "Cách chỉnh theme Oh-my-posh cho Powershell",
      context:
        "Hello ae mọi người nhé, mọi người (đặc biệt là lập trình viên Software) chắc hẳn đã nghe tới Powershell, nhưng bù lại cái màn hình...",
      tags: [
        {
          title: "Terminal",
          time: "11 ngày trước",
          duration: "2 phút đọc",
        },
      ],
      img: "https://learn.microsoft.com/en-us/windows/terminal/images/custom-prompt.png",
    },
    {
      avt: "https://fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg",
      name: "Dev Quèn",
      title: 'Một số "cẩm nang" hay khi làm việc với HTML/CSS😂',
      context:
        "Bài viết này đơn giản là nơi để mình lưu lại những kinh nghiệm mình đã làm việc với HTML/CSS cũng như chia sẻ phần nào cho bạn...",
      tags: [
        {
          title: "Reactjs",
          time: "4 tháng trước",
          duration: "1 phút đọc",
        },
      ],
      img: "/assets/img/2.png",
    },
    {
      avt: "https://files.fullstack.edu.vn/f8-prod/user_avatars/164944/6442473f625f6.jpg",
      name: "GZw",
      title: "Đánh giá CODEHEROES với một số trường",
      context:
        "Hí anh em! Vào vấn đề luôn, trong thời gian mình có quá nhiều thời gian rỗi nên mình đã bỏ 1 ít thời gian và tiền đi kiểm chứng và...",
      tags: [
        {
          title: "IT",
          time: "4 tháng trước",
          duration: "2 phút đọc",
        },
      ],
      img: "/assets/img/8.png",
    },
    {
      avt: "https://files.fullstack.edu.vn/f8-prod/user_photos/184722/62383632b8e58.jpg",
      name: "Minh Trịnh",
      title: "Learn JavaScript while Playing Games — Gamify Your Learning",
      context:
        "Trong bài viết này, tôi muốn giới thiệu các trang web khác nhau mà bạn có thể sử dụng để học JavaScript khi chơi trò chơi. Phương...",
      tags: [
        {
          title: "Python",
          time: "5 tháng trước",
          duration: "8 phút đọc",
        },
      ],
      img: "/assets/img/3.png",
    },
    {
      avt: "https://files.fullstack.edu.vn/f8-prod/user_avatars/256991/63b63dc6657a1.jpg",
      name: "Vịt",
      title: "Ngành gì đang hot hiện nay? Top ngành nghề dự báo trở thành xu thế ",
      context:
        "Nếu bạn đang phân vân trong việc chọn ngành, chuyển ngành thì có thể tham khảo bài viết này để biết ngành gì đang hot hiện nay và...",
      tags: [
        {
          title: "IT",
          time: "6 tháng trước",
          duration: "12 phút đọc",
        },
      ],
      img: "/assets/img/4.png",
    },
    {
      avt: "https://files.fullstack.edu.vn/f8-prod/user_avatars/256991/63b63dc6657a1.jpg",
      name: "Vịt",
      title: "Lương lập trình website cao hay thấp? Cơ hội nghề nghiệp ra sao?",
      context:
        "Trong những năm gần đây, nghề IT đã trở thành một nghề siêu hot với mức thu nhập được cho là “cực khủng”. Vậy với ngách lập...",
      tags: [
        {
          title: "Lập trình viên",
          time: "6 tháng trước",
          duration: "6 phút đọc",
        },
      ],
      img: "/assets/img/5.png",
    },
    {
      avt: "https://files.fullstack.edu.vn/f8-prod/user_avatars/6061/63f0e31d4b28d.jpg",
      name: "Nguyên Đinh",
      title: "Deploy Spring Boot cùng SQL Server lên Azure",
      context:
        "Microsoft Azure là nền tảng tính toán đám mây được xây dựng bởi Microsoft dành cho xây dựng, kiểm thử, triển khai và quản lý các...",
      tags: [
        {
          title: "Java",
          time: "5 tháng trước",
          duration: "4 phút đọc",
        },
      ],
      img: "/assets/img/7.png",
    },
    {
      avt: "https://files.fullstack.edu.vn/f8-prod/user_avatars/256991/63b63dc6657a1.jpg",
      name: "Vịt",
      title: "Fullstack là gì? Cần kỹ năng gì để trở thành fullstack developer?",
      context:
        "Chắc hẳn hầu hết các bạn trong giới lập trình đều đã ít nhất một lần nghe đến từ “fullstack”. Tuy nhiên vẫn còn nhiều người hiểu...",
      tags: [
        {
          title: "IT",
          time: "6 tháng trước",
          duration: "8 phút đọc",
        },
      ],
      img: "/assets/img/6.png",
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
      btn_menu.onclick = () => {
        moblieMenu__wrapper.style.display = "block";
      }
      document.onclick = (e) => {
        
        console.log(e.target)
        if (e.target === moblieMenu__wrapper) {
          moblieMenu__wrapper.style.display = "none";
        }
      };
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
                                : ""
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
      console.log("Thông tin ng")
      logoutBtn.style.display = "inline-block";
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
    localStorage.getItem("newPosts") !=null
      ? ($(".blog__left").innerHTML += localStorage.getItem("newPosts")): "";

    paginationLinks.forEach((link, index) => {
      link.addEventListener("click", function (event) {
        event.preventDefault(); 
        paginationLinks.forEach((link) => {
          link.classList.remove("active");
        });
        
        this.classList.add("active");
        showPosts(index)
      });
    });
    function showPosts(index) {
      const postsPerPage = 3; 
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
