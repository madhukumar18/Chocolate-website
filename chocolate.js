const menuOpenButton = document.querySelector("#openbutton")
const menuCloseButton = document.querySelector("#closebutton")

menuOpenButton.addEventListener("click" ,()=>{
    document.body.classList.toggle("show-mobile-menu");

})


menuCloseButton.addEventListener("click",  ()=> menuOpenButton.click())


// swiper

const swiper = new Swiper('.sliderwrapper', {
  loop: true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints:{
    0:{
        slidesPeView:1
    },

    768:{
        slidesPeView:2
    },

    1024:{
        slidesPeView:3
    },
  }

});