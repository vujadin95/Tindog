class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
              <div id='like-nope-img'></div>
              <img class="dog-img" src="${avatar}" alt="">
              <div class="description">
                <h2 class="dog-name">${name}, ${age}</h2>
                <p class="dog-desc">${bio}</p>
              </div>
            `;
  }
}
export default Dog;
