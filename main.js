let burger = document.getElementById('btn-burger-img')

document.getElementById('btn-burger').addEventListener("click", function(){
    document.getElementById("burger").classList.toggle('open')
    
    if(document.getElementById("burger").classList[1] === 'open'){
        burger.src = './images/close-burger-menu.svg'
    }else{
        burger.src = './images/burger-menu.svg'
    }

})


new Swiper(".swiper", {
    navigation: {
        nextEl: ".slider-button-next",
        prevEl: ".slider-button-prev"
    },

    slidesPerView: 1.4,

    spaceBetween: 30,

    breakpoints: {
        1450: {
            slidesPerView: 3.4,
        },

        900:{
            slidesPerView: 2.4,
        },

        670:{
            slidesPerView: 1.8,
        },

        520:{
            slidesPerView: 1.4,
        },
        
        425: {
            slidesPerView: 1.8,
        },

        375:{
            slidesPerView: 1.6,
        }


    }

})