


// Detecting Button Press

for (var i=0; i<document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    // this.style.color = "blue";


    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}

// Detecting Keyboard Press

document.addEventListener("keypress", function(event) {
  console.log(event);

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound(key) {
  switch (key) {
    case "w":
    // this.style ="background-image: url('drumkitimages/tom1.png')";
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
      break;
    case "a":
    // this.style ="background-image: url('drumkitimages/tom2.png')";
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
      break;
    case "s":
    // this.style ="background-image: url('drumkitimages/tom3.png')";
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
      break;
    case "d":
    // this.style ="background-image: url('drumkitimages/tom4.png')";
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
      break;
    case "j":
    // this.style ="background-image: url('drumkitimages/snare.png')";
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
      break;
    case "k":
    // this.style ="background-image: url('drumkitimages/kick.png')";
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
      break;
    case "l":
      // this.style ="background-image: url('drumkitimages/crash.png')";
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    default: console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
        activeButton.classList.remove("pressed");
  }, 100);

}
