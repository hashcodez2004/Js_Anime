setTimeout(stars, 100);
setTimeout(bg, 100);

function stars() {
  let i = 0;
  let j = 0;
  for (var m = 0; m < 10; m++) {
    var svg = document.getElementById("star");
    let circle = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    circle.setAttribute("cx", i);
    circle.setAttribute("cy", j);
    circle.setAttribute("r", 1);
    circle.setAttribute("fill", "white");
    circle.setAttribute("stroke", "skyblue");
    svg.appendChild(circle);
    i = Math.floor(Math.random() * window.innerWidth);
    j = Math.floor(Math.random() * window.innerHeight);
  }
}

function bg() {
  let count = 0;
  var id = setInterval(animate, 40);
  function animate() {
    const svg = document.getElementById("star");
    var rect = svg.getBoundingClientRect();
    var x = rect.top;
    x++;
    document.getElementById("star").style.top = x;
    if (count <= 8) {
      stars();
    }
    if (x == 100) {
      x--;
      document.getElementById("star").style.top = 0;
    }
    count++;
  }
}

let isNight = true;

function dayNight() {
  if (isNight) {
    document.querySelector(".moon").src = "img/sun.png";
    document.querySelector(".background").style.background =
      "linear-gradient(#fffc00, #ffffff)";
    isNight = false;
  } else {
    document.querySelector(".moon").src = "img/onlyMoon.png";
    document.querySelector(".background").style.background =
      "linear-gradient(#111425, #3751e0)";
    isNight = true;
  }
}

var image_tracker = "white";
function change() {
  var image = document.getElementById("sun");
  if (isNight == false) {
    if (image_tracker == "white") {
      image.src = "img/sun1.png";
      image_tracker = "yellow";
    } else {
      image.src = "img/sun2.png";
      image_tracker = "white";
    }
  }
}
var timer = setInterval("change();", 10);

let bird = document.querySelector(".bird");
let moveBy = 10;

window.addEventListener("load", () => {
  bird.style.position = "absolute";
  bird.style.left = 0;
  bird.style.top = 0;
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      bird.style.left = parseInt(bird.style.left) - moveBy + "px";
      break;
    case 'ArrowRight':
      bird.style.left = parseInt(bird.style.left) + moveBy + "px";
      break;
  }
});

let cloud1 = document.querySelector('.cloud1');
let posX = 0;
let coverBy = 10;
setInterval(function (){
    posX = posX + coverBy;
    cloud1.style.left = posX + "px";
    if(posX>1600)posX=0;
}, 100);

