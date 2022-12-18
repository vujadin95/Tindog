import dogs from "./data.js";

let hasBeenDisliked = false;

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  getLike() {
    return `
    <img class="like-badge" src="/images/badge-like.png" alt="">
    `;
  }
  getNope() {
    return `
    <img class="like-badge" src="/images/badge-nope.png" alt="">
    `;
  }

  getEndMesagge() {}
  getDog() {
    const { name, avatar, age, bio, hasBeenLiked, hasBeenSwiped } = this;
    return `
    ${hasBeenLiked ? this.getLike() : hasBeenDisliked ? this.getNope() : ""}
    <img class="dog-img" src="${avatar}" alt="">
    <div class="description">
      <h2 class="dog-name">${name}, ${age}</h2>
      <p class="dog-desc">${bio}</p>
    </div>`;
  }
}

document.getElementById("like").addEventListener("click", function () {
  dog.hasBeenLiked = true;
  dog.hasBeenSwiped = true;
  if (dog.hasBeenSwiped) {
    setTimeout(() => {
      isClicked = true;
      dog = new Dog(getNewDog());
      render();
      isClicked = false;
    }, 2000);
  }
  render();
});

document.getElementById("cross").addEventListener("click", function () {
  hasBeenDisliked = true;
  dog.hasBeenLiked = false;
  dog.hasBeenSwiped = true;
  if (dog.hasBeenSwiped) {
    setTimeout(() => {
      dog = new Dog(getNewDog());
      dog.hasBeenDisliked = false;
      hasBeenDisliked = false;
      render();
    }, 2000);
  }
  render();
});

function getNewDog() {
  return dogs.length > 0 ? dogs.shift() : {};
}

function render() {
  return (document.getElementById("main").innerHTML = dog.getDog());
}

let dog = new Dog(getNewDog());
render();
