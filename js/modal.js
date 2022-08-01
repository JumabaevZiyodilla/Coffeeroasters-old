var elModalOpenButton = document.querySelector(".form__btn");
var elModal = document.querySelector(".modal");

elModalOpenButton.addEventListener("click", function(){
    elModal.classList.add("modal__show");
})

elModalOpenButton = document.querySelector(".modal__btn");

elModalOpenButton.addEventListener("click", function(){
    elModal.classList.remove("modal__show");
})

