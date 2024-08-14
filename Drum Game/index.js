var n = document.querySelectorAll(".drum").length;

function buttonDetector(buttons) {
  switch (buttons) {

    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var kick = new Audio('sounds/kick.mp3');
      kick.play();
      break;

    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    default:

  }
}

function keyAnnimation(keyPressed){

  var activeKey = document.querySelector("."+keyPressed);
  activeKey.classList.add("pressed");
  setTimeout(function() {activeKey.classList.remove("pressed");}, 100);
}


for (var i = 0; i < n; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonPressed = this.innerHTML;
    buttonDetector(buttonPressed);
    keyAnnimation(buttonPressed);
  });

}

document.addEventListener("keydown", function(event) {
  buttonDetector(event.key);
  keyAnnimation(event.key);
});
