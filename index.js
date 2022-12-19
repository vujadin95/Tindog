import dogs from "./data.js";
import Dog from "./Dog.js";

function handleHeartBtn() {
  if (!dog.hasBeenSwiped) {
    getLikeImg();
    dog.hasBeenSwiped = true;
    dog.hasBeenLiked = true;
    setTimeout(() => {
      dog = new Dog(getNewDog());
      render();
    }, 1500);
  }
}
document.getElementById("like").addEventListener("click", handleHeartBtn);

function handleCrossBtn() {
  if (!dog.hasBeenSwiped) {
    getNopeImg();
    dog.hasBeenSwiped = true;
    setTimeout(() => {
      dog = new Dog(getNewDog());
      render();
    }, 1500);
  }
}
document.getElementById("cross").addEventListener("click", handleCrossBtn);

function endMessage() {
  return (document.body.innerHTML = `
    <div class="end-message">
      <p>New Tindog profiles are coming soon.<br>Stay tuned!</br></p>
      <p class="emoji">🤗</p>
    </div>
  `);
}

function getLikeImg() {
  document.getElementById("like-nope-img").innerHTML = `
  <img class="like-badge" src="/images/badge-like.png" alt="">
  `;
}

function getNopeImg() {
  document.getElementById("like-nope-img").innerHTML = `
  <img class="like-badge" src="/images/badge-nope.png" alt="">
  `;
}

function getNewDog() {
  let nextDogFromArray = dogs.shift();
  return nextDogFromArray ? nextDogFromArray : {};
}

function render() {
  if (!dog.name) {
    endMessage();
  } else {
    document.getElementById("main").innerHTML = dog.getDogHtml();
  }
}

let dog = new Dog(getNewDog());
render();
