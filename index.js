//my way of solving challenge
//for first player dice1
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

if (randomNumber1 == 1) {
  document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
} else if (randomNumber1 == 2) {
  document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
} else if (randomNumber1 == 3) {
  document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
} else if (randomNumber1 == 4) {
  document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
} else if (randomNumber1 == 5) {
  document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
} else if (randomNumber1 == 6) {
  document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
}

//other way of solving challenge (by Angela yu)
//for 2nd player dice2
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png"; // to show the name like --> dice1.png to dice6.png
var randomImageSource = "images/" + randomDiceImage;  // to show the name like --> images/dice1.png to images/dice6.png
var image2 = document.querySelectorAll("img")[1];  //select 1 unique element in array
image2.setAttribute("src",randomImageSource);  //parameters for setting new attributes are old source and new info link


//for changing winning text
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player1 wins";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player2 wins🚩";
} else {
  document.querySelector("h1").innerHTML = "!!Draw!!";
}
