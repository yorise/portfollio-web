//navbar section

const navbar = document.getElementsByClassName("nav-list")[0];
const section = document.querySelectorAll("section");
const navlist = navbar.querySelectorAll("li a");

// active class wil moved when the panel scroll
function changeActiveLink() {
  section.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 50;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlist.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(id)) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", changeActiveLink);

//navbar section
