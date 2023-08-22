const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const btn_menu = $(".btn__menu");
const moblieMenu__wrapper = $(".moblieMenu__wrapper");

btn_menu.addEventListener("click", () =>{
    console.log("123")
    moblieMenu__wrapper.style.display = "block";
}
)
document.addEventListener("click", () =>{
    if (e.target === moblieMenu__wrapper) {
        moblieMenu__wrapper.style.display = "none";
      }
})
