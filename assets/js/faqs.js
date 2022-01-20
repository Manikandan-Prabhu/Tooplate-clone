const btn1 = document.querySelector(".ques-1");
const btn2 = document.querySelector(".ques-2");
const btn3 = document.querySelector(".ques-3");
const btn4 = document.querySelector(".ques-4");
const btn5 = document.querySelector(".ques-5");

btn1.addEventListener('click',view1);
btn2.addEventListener('click',view2);
btn3.addEventListener('click',view3);
btn4.addEventListener('click',view4);
btn5.addEventListener('click',view5);

const ans1 = document.querySelector(".ans-1");
const ans2 = document.querySelector(".ans-2");
const ans3 = document.querySelector(".ans-3");
const ans4 = document.querySelector(".ans-4");
const ans5 = document.querySelector(".ans-5");

function view1(event) {
    ans1.classList.toggle("hide-answers");
    btn1.classList.toggle("highlight");
    ans2.classList.add("hide-answers");
    ans3.classList.add("hide-answers");
}
function view2(event) {
    ans1.classList.add("hide-answers");
    ans2.classList.toggle("hide-answers");
    ans3.classList.add("hide-answers");
}
function view3(event) {
    ans1.classList.add("hide-answers");
    ans2.classList.add("hide-answers");
    ans3.classList.toggle("hide-answers");
}

function view4(event) {
    ans4.classList.toggle("hide-answers");
    ans5.classList.add("hide-answers");
}
function view5(event) {
    ans4.classList.add("hide-answers");
    ans5.classList.toggle("hide-answers");
}