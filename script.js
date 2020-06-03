var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var css= document.querySelector("h3");
var body = document.getElementById("gradient");
var btn = document.querySelector("button");

function randomColors(){
  color1.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  color2.value = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  setGradient();
}

function loadPage(){
  color1.value= "#ff0000";
  color2.value= "#ffff00";
  displayCss();
}

function displayCss(){
    css.textContent = body.style.background + ";";
}


function setGradient(){
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  displayCss();
}

btn.addEventListener("click", randomColors);

body.addEventListener("load", loadPage);

color1.addEventListener("input", setGradient);

color2.addEventListener("input",   setGradient);
