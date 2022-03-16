let btnConfirmation = document.querySelector("#btn-confirmation");


function toggleConfirmation() {
  let sectionConfirmation = document.querySelector(".section__confirmation");
  sectionConfirmation.classList.toggle("active");
  let sectionPayment = document.querySelector(".section__payment");
  sectionPayment.classList.toggle("active");
}


btnConfirmation.addEventListener("click", toggleConfirmation);





