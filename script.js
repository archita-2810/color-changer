
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.big-box div');
// console.log(buttons)

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        // console.log(e.target);
        // console.log(e.currentTarget.id);
        body.style.backgroundColor = e.target.id;
    });
});