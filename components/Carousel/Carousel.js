/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');

function carouselCreator(){

const carousel= document.createElement('div');
carousel.classList.add('carousel');

const leftButton = document.createElement('div');
leftButton.classList.add('left-button');

const images = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg","./assets/carousel/turntable.jpeg"];
const image1 = document.createElement('img');
image1.setAttribute('src', images[0]);
image1.style.display = 'block';

const image2 = document.createElement('img');
image2.setAttribute('src', images[1]);

const image3 = document.createElement('img');
image3.setAttribute('src', images[2]);

const image4 = document.createElement('img');
image4.setAttribute('src', images[3]);

const rightButton = document.createElement('div');
rightButton.classList.add('right-button');

carousel.append(leftButton, image1, image2, image3, image4, rightButton);

return carouselContainer.appendChild(carousel);

}


carouselCreator();