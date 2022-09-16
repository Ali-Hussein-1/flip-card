// Initializing selection
let counter = 0;
let scoring =0; 
let firstSelection = "";
let secondSelection = "";
let score = document.getElementById("score");
const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
  // addding an event upon clicking 
  card.addEventListener("click", () => {
    // changing card styling upon clicking
    card.classList.add("clicked");
    // checking the number of selected cards
    if (counter === 0) {
      firstSelection = card.getAttribute("lang");
      counter++;
    } 
    else {
      secondSelection = card.getAttribute("lang");
      counter = 0;
      // checking if the chosen images are the same 
      if (firstSelection === secondSelection) {
        const correctCards = document.querySelectorAll(
          ".card[lang='" + firstSelection + "']"
        );
          // changing the styling of matching cards
        correctCards[0].classList.add("checked");
        correctCards[0].classList.remove("clicked");
        correctCards[1].classList.add("checked");
        correctCards[1].classList.remove("clicked");
        // scoring in crementation in case of match
        scoring += 1;
        score.innerHTML="Your score is : "+scoring;
      } 
      else {
        const incorrectCards = document.querySelectorAll(".card.clicked");
        // changing the styling of non-matching cards
        incorrectCards[0].classList.add("shake");
        incorrectCards[1].classList.add("shake");
        // scoring decrementation in case of unmatch
        scoring -= 1;
        score.innerHTML="Your score is : "+scoring;
        // A reset function for non-matching cards
        function reset() {
          incorrectCards[0].classList.remove("shake");
          incorrectCards[0].classList.remove("clicked");
          incorrectCards[1].classList.remove("shake");
          incorrectCards[1].classList.remove("clicked");
        }
        // setting a reset timer
        setTimeout(reset,1000);
      }
    }
  });
});
