function toggleConfirmationPayment() {
  let sectionConfirmation = document.querySelector(".section__confirmation");
  sectionConfirmation.classList.toggle("active");
  let sectionPayment = document.querySelector(".section__payment");
  sectionPayment.classList.toggle("active");
}

let btnPayment = document.querySelector("#btn-payment");
btnPayment.addEventListener("click", toggleConfirmationPayment);



function toggleConfirmation() {
  let sectionConfirmation = document.querySelector(".section__confirmation");
  sectionConfirmation.classList.toggle("active");
}

let btnConfirmation = document.querySelector("#btn-confirmation");
btnConfirmation.addEventListener("click", toggleConfirmation);


