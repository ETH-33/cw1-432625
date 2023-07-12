let searchform = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-box');
  let menuBtn = document.querySelector('#menu-btn');
  let navbar = document.querySelector('.navbar');

  searchBtn.onclick = () => {
    searchform.classList.toggle('active');
};

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
  };
window.onscroll = () =>{
    searchform.classList.remove('active');
    navbar.classList.remove('active');
};