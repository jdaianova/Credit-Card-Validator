import ValidatorCardNumber from "./ValidatorCardNumber";
import DeterminationOfPaySystem from "./DeterminationOfPaySystem";

const cardNumber = document.querySelector("input");
const btn = document.querySelector("button");
const elementOfResultValidation = document.querySelector(".message-input");
const allCardsPics = document.querySelectorAll(".card-pic");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  AllCardsInactive();

  if (cardNumber.value.length === 16) {
    if (ValidatorCardNumber(cardNumber.value)) {
      elementOfResultValidation.textContent = "Your card is valid.";
      let paySystem = DeterminationOfPaySystem(cardNumber.value);
      SelectActivCard(paySystem);
    } else {
      elementOfResultValidation.textContent = "Your card is not valid.";
    }
  } else {
    elementOfResultValidation.textContent =
      "Card number must contain 16 digits.";
  }
});

function AllCardsInactive() {
  allCardsPics.forEach((pic) => {
    pic.classList.add("card-inactiv");
  });
}

function SelectActivCard(id) {
  allCardsPics.forEach((pic) => {
    if (pic.id === id) {
      pic.classList.remove("card-inactiv");
    }
  });
}
