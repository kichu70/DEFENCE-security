// console.log("working")

// const card1 = document.getElementById("cardsOne");
// const card2 = document.getElementById("cardsTwo");
// const card3 = document.getElementById("cardsThree");


// const cards = [card1, card2, card3];

// function showCard(cardToShow) {

//   cards.forEach(card => card.style.display = "none");
//   cardToShow.style.display = "grid";
// }

// function FormOne() {
//   showCard(card1);
// }
// function FormTwo() {
//   showCard(card2);
// }
// function FormThree() {
//   showCard(card3);
// }

// console.log("ok");

// Select your carousel
var myCarousel = document.querySelector('#carouselExampleCaptions');
var carousel = new bootstrap.Carousel(myCarousel);

function goToSlide(index) {
    carousel.to(index); // moves to the slide with the given index
}
