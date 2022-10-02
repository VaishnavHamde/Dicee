var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var dice1 = "images/dice" + randomNumber1 + ".png";
var dice2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", dice1);
document.querySelector(".img2").setAttribute("src", dice2);

if(randomNumber1 > randomNumber2)
    document.querySelector(".result").textContent = "Player 1 wins 😃";
else if(randomNumber1 < randomNumber2)
    document.querySelector(".result").textContent = "Player 2 wins 😃";
else
    document.querySelector(".result").textContent = "Draw 😑, try again!!!";