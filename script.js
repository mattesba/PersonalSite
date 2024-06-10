//PER CAMBIAMENTO CLASS="ACTIVE" NELLA NAVIGATION BAR AL CLICK
const list = document.querySelectorAll(".list");

function activeLink() {
  document.querySelectorAll(".icon").forEach((item) => {
    item.classList.remove("active");
  });
  const icon = this.querySelector(".icon");
  icon.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activeLink));

//PER CAMBIAMENTO CLASS="ACTIVE" NELLA NAVIGATION BAR ALLO SCROLL
const navSections = document.querySelectorAll(".navSection");
const icons = document.querySelectorAll(".icon");

window.onscroll = () => {
  navSections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop;
    let heightSection = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + heightSection) {
      icons.forEach((icon) => {
        icon.classList.remove("active");
        let links = document.querySelectorAll(
          '.list a[href*="#' + id + '"] .icon'
        );
        links.forEach((link) => {
          link.classList.add("active");
        });
      });
    }
  });
};
