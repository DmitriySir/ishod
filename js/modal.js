let callSelec = document.querySelector('.call');
let mainWrapperSelec = document.querySelector('.main__wrapper');
let feedbackBtn = document.querySelector('.feedback');
let sectionWrapper = document.querySelector('.section__wrapper');
let mainWrapper = document.querySelector('.main__wrapper');
let modalCore = document.querySelector('.modal-core-fon');
let callBtn = document.querySelector('.call');


document.querySelector(".modal-core-fon").addEventListener('click', function(){
    callSelec.classList.remove("call-active");
    mainWrapperSelec.classList.remove("main__wrapper-active");
    sectionWrapper.classList.remove("section__wrapper-active");
    sectionWrapper.classList.remove("wrapper-active");
    sectionWrapper.classList.remove("section__wrapper-hidden");
    modalCore.classList.remove("modal-core-fon-open");
})

document.querySelector(".modal-core-fon").addEventListener('click', function(){
    feedbackBtn.classList.remove("feedback-active");
    mainWrapperSelec.classList.remove("main__wrapper-active");
    sectionWrapper.classList.remove("section__wrapper-active");
    sectionWrapper.classList.remove("wrapper-active");
    sectionWrapper.classList.remove("section__wrapper-hidden");
    modalCore.classList.remove("modal-core-fon-open");
})