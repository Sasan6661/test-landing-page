const navbar = document.querySelector("#navbar");
const topNav = document.getElementById("topNav");
const navHome = document.querySelector("#navHome");
const navAbout = document.querySelector("#navAbout");
const navService = document.querySelector("#navService");
const navPortfolio = document.querySelector("#navPortfolio");
const navContact = document.querySelector("#navContact");

addEventListener("scroll", () => {
 if (scrollY > 10) {
  navbar.style = "background: var(--color-black)";
 }
 else {
  navbar.style = "background: ";
 }
});

// toogle
var test2 = () => {
 if (topNav.className === "sectionContainer navContainer") {
  topNav.className += " responsive";
  console.log("bisa-1");
 } else {
  topNav.className = "sectionContainer navContainer";
  console.log("bisa-2");
 }
}

var test3 = () => {
 if (topNav.className) {
  topNav.className = "sectionContainer navContainer";
  console.log("bisa-4");
 }
}

  window.onclick = (e) => {
   var menu = document.querySelector(".ti-menu");
  if (e.target != menu ) {
   topNav.className = "sectionContainer navContainer";
   console.log("bisa-33");
   }
}



function clearColor() {
 navHome.style = "color:none";
 navAbout.style = "color:none";
 navService.style = "color:none";
 navPortfolio.style = "color:none";
 navContact.style = "color:none";
}

addEventListener("scroll", () => {
 
 var hHome = document.querySelector("#sectionHome").clientHeight
 var hAbout = document.querySelector("#sectionAbout").clientHeight
 var hService = document.querySelector("#sectionService").clientHeight
 var hPortfolio = document.querySelector("#sectionPortfolio").clientHeight
 var hContact = document.querySelector("#sectionContact").clientHeight



 if (scrollY < hHome) {
  clearColor();
  navHome.style = "color:var(--primary-color-300)";
 }
 if (scrollY > hHome - 2) {
  clearColor();
  navAbout.style = "color:var(--primary-color-300)";
 }
 if (scrollY > hHome + hAbout - 2) {
  clearColor();
  navService.style = "color:var(--primary-color-300)";
 }
 if (scrollY > hHome + hAbout + hService - 2) {
  clearColor();
  navPortfolio.style = "color:var(--primary-color-300)";
 }
 if (scrollY > hHome + hAbout + hService + hPortfolio - 42) {
  clearColor();
  navContact.style = "color:var(--primary-color-300)";
 }

 console.log(`scrollY : ${scrollY}`);
 console.log(hHome - 1);
 console.log(hHome + hAbout - 1);
 console.log(hHome + hAbout + hService - 2);
 console.log(hHome + hAbout + hService + hPortfolio - 1);
})


// -----------
const portoItem = document.querySelector(".portoItem");
function filterItem1() {
 for (i = 0; i < portoItem.children.length; i++){
  console.log(portoItem.children[i].classList);
 portoItem.children[i].style = "display:inherit";

  if (!portoItem.children[i].className.includes("all")) {
   portoItem.children[i].style = "display:none";
  }
 }
}
function filterItem2() {
 for (i = 0; i < portoItem.children.length; i++){
  console.log(portoItem.children[i].classList);
  portoItem.children[i].style = "display:inherit";

  if (!portoItem.children[i].className.includes("web")) {
   portoItem.children[i].style = "display:none";
  }
 }
}
function filterItem3() {
 for (i = 0; i < portoItem.children.length; i++){
  console.log(portoItem.children[i].classList);
  portoItem.children[i].style = "display:inherit";

  if (!portoItem.children[i].className.includes("desktop")) {
   portoItem.children[i].style = "display:none";
  }
 }
}
function filterItem4() {
 for (i = 0; i < portoItem.children.length; i++){
  console.log(portoItem.children[i].classList);
  portoItem.children[i].style = "display:inherit";
  
  if (!portoItem.children[i].className.includes("mobile")) {
   portoItem.children[i].style = "display:none";
  }
 }
}
// filterItem4();


// untuk test drive log hehe...
function test() {
 console.log("bisa");
}

