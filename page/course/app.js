const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const details_wrappers = $$('.details_wrapper');
const sub_wrappers = $$('.sub_wrapper');

details_wrappers.forEach((details, index) => {
    const sub_wrapper = sub_wrappers[index];
    
    details.addEventListener('click', () => {
        if (sub_wrapper.style.display === 'none' || sub_wrapper.style.display === '') {
            sub_wrapper.style.display = 'block';
        } else {
            sub_wrapper.style.display = 'none';
        }
    });
});
function showSubWrapper(){}