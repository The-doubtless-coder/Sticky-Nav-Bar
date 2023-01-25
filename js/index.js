const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

console.log(bottomContainerEl.offsetTop);

console.log(navbarEl.offsetTop);
console.log(navbarEl.offsetHeight);

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    console.log("tomatoes");
    navbarEl.classList.add("console");
  } else navbarEl.classList.remove("console");
});
