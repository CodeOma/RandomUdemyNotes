var randomNumber1 = Math.round(Math.random()*5 + 1);
var randomNumber2 = Math.round(Math.random()*5 + 1);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}else if(randomNumber1< randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
} else{
    document.querySelector("h1").innerHTML = "Draw!";
}
var ran1 = "images/dice"+randomNumber1+".png";
var ran2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src", ran1);
document.querySelectorAll("img")[1].setAttribute("src", ran2);