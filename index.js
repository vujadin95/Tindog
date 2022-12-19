import dogs from "./data.js";
import Dog from "./Dog.js";

// taking controle over LIKE button
function handleLike() {
  if (!dog.hasBeenSwiped) {
    dog.hasBeenLiked = true;
    dog.hasBeenSwiped = true;
    if (dog.hasBeenSwiped) {
      setTimeout(() => {
        dog = new Dog(getNewDog());
        render();
        dog.hasBeenSwiped = false;
        if (!dog.name) {
          endApp();
        }
      }, 1000);
    }
    render();
  }
}
document.getElementById("like").addEventListener("click", handleLike);

// taking controle over CROSS button
function handleCross() {
  if (!dog.hasBeenSwiped) {
    dog.hasBeenDisliked = true;
    dog.hasBeenLiked = false;
    dog.hasBeenSwiped = true;
    if (dog.hasBeenSwiped) {
      setTimeout(() => {
        dog = new Dog(getNewDog());
        dog.hasBeenDisliked = false;
        dog.hasBeenSwiped = false;
        render();
        if (!dog.name) {
          endApp();
        }
      }, 1000);
    }
    render();
  }
}

document.getElementById("cross").addEventListener("click", handleCross);

// defining new instance of dog
function getNewDog() {
  return dogs.length > 0 ? dogs.shift() : {};
}

// display message after last dog in dogs array
function endApp() {
  return (document.body.innerHTML = `
    <div class="end-message">
      <p>New Tindog profiles are coming. Stay tuned!</p>
      <p class="emoji">😍</p>
    </div>
  `);
}

// rendering content to main section
function render() {
  document.getElementById("main").innerHTML = dog.getDog();
}

// declaring new dog
let dog = new Dog(getNewDog());
render();
