// Navbar
const x = document.getElementById("nav-buttons");
const y = document.getElementById("navToggle");
const z = document.getElementById("nav-sidebar");
const mm = window.matchMedia("(min-width: 48em)");
function navToggle() {
  x.style.display = "block";
  y.style.display = "none";
}
window.onresize = function (event) {
  if (mm.matches) {
    navToggle();
  }
};
document.addEventListener("click", function (event) {
  if (!z.contains(event.target) && !y.contains(event.target) && !mm.matches) {
    x.style.display = "none";
    y.style.display = "block";
  }
});

// Navbar Active
const navItems = document.getElementsByClassName("pure-button")

if (window.location.pathname === "" || window.location.pathname === "/"){
  navItems[0].classList.add('active');
} else {
  for(let i=0; i < navItems.length; i++){
    if(navItems[i].getAttribute("href") === "." + window.location.pathname.toLowerCase()) {
      navItems[i].classList.add('active');
      break;
    }
  }
}