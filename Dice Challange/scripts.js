var num1 = Math.random()*6;
num1 = Math.floor(num1)+1;
var num2 = Math.random()*6;
num2 = Math.floor(num2)+1;

document.querySelector(".img1").setAttribute("src", 'images/dice' + num1 + '.png');
document.querySelector(".img2").setAttribute("src", 'images/dice' + num2 + '.png');

if(num1>num2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}else if(num1<num2){
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}else{
  document.querySelector("h1").innerHTML="Refresh Me";
}
