window.addEventListener('load', () =>{
    const preload = document.querySelector('.preloader');
    preload.style.display= "none";
}  
)


var prevScrollpos = window.pageYOffset;
console.log(prevScrollpos)
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var navbar = document.querySelector(".navbar");
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

const link_button = document.querySelector(".intro-btn");
link_button.addEventListener('click', changeGrid);

function changeGrid(event){
  event.preventDefault();
  document.querySelector(".content-home-2").style.display = "none";
  document.querySelector(".content-home-3").style.display = 'none';
  document.querySelector(".content-home-1").style.display = 'grid';
}

const link_button2 = document.querySelector(".work-btn");
link_button2.addEventListener('click', changeGrid2);

function changeGrid2(event){
  event.preventDefault();
    document.querySelector(".content-home-1").style.display = 'none';
    document.querySelector(".content-home-3").style.display = 'none';
    document.querySelector(".content-home-2").style.display = "grid";
}

const link_button3 = document.querySelector(".story-btn");
link_button3.addEventListener('click', () => {
    document.querySelector(".content-home-1").style.display = 'none';
    document.querySelector(".content-home-2").style.display = "none";
    document.querySelector(".content-home-3").style.display = "grid";
});