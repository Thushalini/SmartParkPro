// Function to handle navigation to the login page
function goToLoginPage() {
  // Replace 'login.html' with the actual URL of your login page
  window.location.href = 'admin.php';
}

// Function to handle navigation to the signup page
function goToSignupPage() {
  // Replace 'signup.html' with the actual URL of your signup page
  window.location.href = 'signup.php';
}

// Adding event listeners to the login and signup buttons
document.getElementById('loginBtn').addEventListener('click', goToLoginPage);
document.getElementById('signupBtn').addEventListener('click', goToSignupPage);


let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop:true,
    spaceBetween:20,
    // autoHeight:true,
    grabCursor: 1,
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
});

// how load more button expands and work
let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

loadMoreBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.packages .box-container .box')];
    for(var i = currentItem; i < currentItem + 3; i++){
        boxes[i].style.display = 'inline-block';
    };
    currentItem += 3;
    if(currentItem >= boxes.length){
        loadMoreBtn.style.display= 'none';
    }
}