import dogs from "./data.js";

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
  getDog() {
    const { name, avatar, age, bio } = this;
    return `
    <img class="dog-img" src="${avatar}" alt="">
    <div class="description">
      <h2 class="dog-name">${name}, ${age}</h2>
      <p class="dog-desc">${bio}</p>
    </div>`;
  }
}

function render() {
  return (document.getElementById("main").innerHTML = dog1.getDog());
}

const dog1 = new Dog(dogs[0]);
render();

/* <img class="like-badge" src="/images/badge-like.png" alt=""> */
