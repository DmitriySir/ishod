let swiperWrapper = document.querySelector('.swiper-wrapper');
let showMoreBtnArrow = document.querySelector('.showMore__button-arrow');
let showMoreBtnText = document.querySelector('.showMore__button-text');
let showMoreBtnHidden = document.querySelector('.showMore__button-hidden');
let swiperWrapperSecond = document.querySelector('.swiper-wrapper__second');
let showMoreBtnArrow2 = document.querySelector('.showMore__button-arrow2');
let showMoreBtntext2 = document.querySelector('.showMore__button-text2');
let showMoreBtnHidden2 = document.querySelector('.showMore__button-hidden2');
let maintext = document.querySelector('.main__text');
let logoImg = document.querySelector('.logo__img');
let readMoreArrow = document.querySelector('.readMore__arrow');
let readMoretext = document.querySelector('.readMore__text');
let rmtb = document.querySelector(".readMore__text");/*rmtb - read more text button*/


document.querySelector(".showMore__button").addEventListener('click', function(){
    swiperWrapper.classList.toggle("swiper-wrapper__active");
    showMoreBtnArrow.classList.toggle("showMore__button-arrow__active");
    showMoreBtnText.classList.toggle("showMore__button-text-active");
    showMoreBtnHidden.classList.toggle("showMore__button-hidden-active");
})
  
document.querySelector(".showMore__button2").addEventListener('click', function(){
    swiperWrapperSecond.classList.toggle("swiper-wrapper__active2");
    showMoreBtnArrow2.classList.toggle("showMore__button-arrow__active2");
    showMoreBtntext2.classList.toggle("showMore__button-text-active2");
    showMoreBtnHidden2.classList.toggle("showMore__button-hidden-active2");
})

document.querySelector(".readMore").addEventListener('click', function(){
    maintext.classList.toggle("main__text-active");
    logoImg.classList.toggle("logo__img-active");
    readMoreArrow.classList.toggle("readMore__arrow-active");
    /*readMoretext.classList.toggle("readMore__text-active");*/
    
})



document.querySelector(".readMore").addEventListener('click', function(){
if (rmtb.textContent === "Читать далее"){
    rmtb.textContent = "Скрыть";
} else {
    rmtb.textContent = "Читать далее";
};
})
