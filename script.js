
const hero = document.getElementById("hero");
const navItems = document.querySelectorAll("#slider-nav span");

const slides = [
  "images/bg1.jpg",
  "images/bg2.jpg",
  "images/bg3.jpg"
];

navItems.forEach((item, i) => {
  item.addEventListener("click", () => {
    hero.style.background = url('${slides[i]}') no-repeat center/cover;
    document.querySelector(".slider-nav span.active").classList.remove("active");
    item.classList.add("active");
  });
});