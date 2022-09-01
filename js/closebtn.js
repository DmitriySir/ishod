let sectionWrapper = document.querySelector('.section__wrapper');
let mainWrapper = document.querySelector('.main__wrapper');
let modalCore = document.querySelector('.modal-core-fon');
let callBtn = document.querySelector('.call');
let feedbackBtn = document.querySelector('.feedback');


document.querySelector(".nav__button-burger").addEventListener('click', function(){
      sectionWrapper.classList.add("section__wrapper-active");
      sectionWrapper.classList.add("wrapper-active");
      mainWrapper.classList.add("main__wrapper-active");
      mainWrapper.classList.remove("section__wrapper-active");
      mainWrapper.classList.add("main__wrapper-active");
      modalCore.classList.add("modal-core-fon-open");
})
   
document.querySelector(".header__close").addEventListener('click', function(){
      sectionWrapper.classList.remove("section__wrapper-active");
      sectionWrapper.classList.remove("wrapper-active");
      mainWrapper.classList.remove("main__wrapper-active");
      modalCore.classList.remove("modal-core-fon-open");
      
})
   
document.querySelector(".footer__icon-call").addEventListener('click', function(){
      callBtn.classList.add("call-active");
      sectionWrapper.classList.remove("section__wrapper-active");
      mainWrapper.classList.add("main__wrapper-active");
      sectionWrapper.classList.add("section__wrapper-hidden");
      modalCore.classList.add("modal-core-fon-open");
})
   
document.querySelector(".nav__button-call").addEventListener('click', function(){
      callBtn.classList.add("call-active");
      sectionWrapper.classList.remove("section__wrapper-active");
      mainWrapper.classList.add("main__wrapper-active");
      swp.classList.remove("section__wrapper-active");
      mainWrapper.classList.add("main__wrapper-active");
      modalCore.classList.add("modal-core-fon-open");
})

document.querySelector(".call__close-button").addEventListener('click', function(){
      callBtn.classList.remove("call-active");
      mainWrapper.classList.remove("main__wrapper-active");
      sectionWrapper.classList.remove("section__wrapper-active");
      sectionWrapper.classList.remove("wrapper-active");
      sectionWrapper.classList.remove("section__wrapper-hidden");
      modalCore.classList.remove("modal-core-fon-open");
})
   
document.querySelector(".footer__icon-chat").addEventListener('click', function(){
      feedbackBtn.classList.add("feedback-active");
      sectionWrapper.classList.remove("section__wrapper-active");
      mainWrapper.classList.add("main__wrapper-active");
      sectionWrapper.classList.add("section__wrapper-hidden");
      modalCore.classList.add("modal-core-fon-open");
})

document.querySelector(".nav__button-chat").addEventListener('click', function(){
      feedbackBtn.classList.add("feedback-active");
      sectionWrapper.classList.remove("section__wrapper-active");
      mainWrapper.classList.add("main__wrapper-active");
      swp.classList.remove("section__wrapper-active");/**/
      mainWrapper.classList.add("main__wrapper-active");
      modalCore.classList.add("modal-core-fon-open");
})
  
document.querySelector(".call__close-button2").addEventListener('click', function(){
      feedbackBtn.classList.remove("feedback-active");
      mainWrapper.classList.remove("main__wrapper-active");
      sectionWrapper.classList.remove("section__wrapper-active");
      sectionWrapper.classList.remove("wrapper-active");
      sectionWrapper.classList.remove("section__wrapper-hidden");
      modalCore.classList.remove("modal-core-fon-open");
})
   


