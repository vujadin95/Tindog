class Dog {
  constructor(data) {
    Object.assign(this, data);
    this.hasBeenDisliked = false;
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

  getDog() {
    const { name, avatar, age, bio, hasBeenLiked, hasBeenDisliked } = this;
    return `
    ${hasBeenLiked ? this.getLike() : hasBeenDisliked ? this.getNope() : ""}
    <img class="dog-img" src="${avatar}" alt="">
    <div class="description">
      <h2 class="dog-name">${name}, ${age}</h2>
      <p class="dog-desc">${bio}</p>
    </div>`;
  }
}
export default Dog;
