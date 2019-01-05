// Your code goes here

// ========== Context Menu ==========

window.addEventListener("contextmenu", e => {
  alert("You Right Clicked");
});

// ========== Mouseover ==========
// When user scrolls over main img, it will scale down and back up
// and change the heading to new textContent and new color
let firstHeading = document.querySelector(".intro h2");

let imgMain = document.querySelector(".container .intro img");
imgMain.addEventListener("mouseover", () => {
  if (imgMain.style.transform === "initial") {
    imgMain.style.transform = "scale(0.5)";
    firstHeading.textContent = "You're on the Wrong Bus NOW!";
    firstHeading.style.color = "orangered";
  } else {
    imgMain.style.transform = "initial";
    firstHeading.textContent = "Welcome To Fun Bus!";
    firstHeading.style.color = "initial";
  }
});

// ========== keydown ==========

window.addEventListener("keydown", function(event) {
  let keyName = event.key;
  if (keyName !== "Control" && keyName !== "Meta" && keyName !== " ") {
    alert(`You Pressed this key: ${keyName}`);
  }
});

// ========== Mouseover & Mouseout ==========
// When clicking Navbar Logo, Toggle the color of it

let logo = document.querySelector(".main-navigation .container .logo-heading");

logo.addEventListener("mouseover", function(e) {
  e.stopPropagation();
  TweenMax.to(logo, 2, { opacity: 0.5 });
  TweenMax.to(logo, 2, { x: 300 });
  if (e.target.style.color === "initial") {
    e.target.style.color = "limegreen";
  } else {
    e.target.style.color = "initial";
  }
});

logo.addEventListener("mouseout", function(e) {
  e.stopPropagation();
  TweenMax.to(logo, 2, { opacity: 1 });
  TweenMax.to(logo, 2, { x: 0 });
});

// ========== Scroll ==========

let navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    navbar.style.background = "salmon";
    navbar.style.boxShadow = "0px 3px 5px 1px #E5E5E5";
    navbar.style.opacity = "0.95";
  } else {
    navbar.style.background = "initial";
    navbar.style.boxShadow = "none";
    navbar.style.opacity = "initial";
  }
});

// ========== Click & Double Click ==========

let btns = document.querySelectorAll(".content-pick .btn");

btns.forEach((el, i) => {
  btns[i].addEventListener("click", e => {
    e.target.textContent = `You're not Signed Up!`;
    TweenMax.to(btns[i], 2, { rotation: 360 });
  });
});

btns.forEach((el, i) => {
  btns[i].addEventListener("dblclick", e => {
    e.target.textContent = `You're Signed Up!`;
    TweenMax.to(btns[i], 2, { rotationY: 360 });
  });
});

// ========== Transition End ==========

// btns.addEventListener("transitionend", e => {
//   btns.style.color = "orangered";
// });

btns.forEach((el, i) => {
  btns[i].addEventListener("transitionend", e => {
    if (e.target.style.color === "initial") {
      e.target.style.color = "orangered";
    } else {
      e.target.style.color = "initial";
    }
  });
});

const destination = document.querySelectorAll(".destination");

const dir0 = document.createElement("p");
dir0.textContent = "";
dir0.style.fontSize = "1.2em";

const dir1 = document.createElement("p");
dir1.textContent = "Click to Unsubscribe";
dir1.style.textAlign = "center";
dir1.style.fontSize = "1.2em";

const dir2 = document.createElement("p");
dir2.textContent = "Double Click to Subscribe";
dir2.style.textAlign = "center";
dir2.style.fontSize = "1.2em";

destination[1].append(dir0);
destination[1].append(dir1);
destination[1].append(dir2);
