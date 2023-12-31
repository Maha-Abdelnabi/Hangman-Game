//generate the letters
const letters = "abcdefghijklmnopqrstuvwxyz";

//get array from letters
let lettersArray = Array.from(letters);

//select letters container
let lettersContainer = document.querySelector(".letters");

//generate letters
lettersArray.forEach((letter) => {
  //create span
  let span = document.createElement("span");

  //create letter text node
  let theLetter = document.createTextNode(letter);

  //append the letter to span
  span.appendChild(theLetter);

  //add class on span
  span.className = "letter-box";

  //append span to the letters container
  lettersContainer.appendChild(span);
});

//object of words + categories
const words = {
  animal: ["cat", "dog", "lion", "horse", "duck", "kangroo"],
  fruit: ["apple", "banana", "orange", "cherry", "watermelon", "peach"],
  vegetable: ["carrot", "broccoli", "spinach", "onion", "potato", "tomato"],
  place: ["paris", "new york", "tokyo", "jerusalem", "rome", "egypt"],
  color: ["red", "blue", "green", "pink", "purple"],
};

//get random property
let allKeys = Object.keys(words);

//choose random index depends on keys length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

//get the name of the key index --category
let randomPropName = allKeys[randomPropNumber];

//get random value --category words
let randomPropValue = words[randomPropName];
console.log(randomPropValue);
//choose a word randomly in that category and get its position number (index) within this list using
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);
console.log(randomValueNumber);
//the chosen word
let randomValueValue = randomPropValue[randomValueNumber];
console.log(randomValueValue);

//set category info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

//generate guess elements
//select letters guess element
let lettersGuessContainer = document.querySelector(".letters-guess");

//convert chosen word to array
let lettersAndSpace = Array.from(randomValueValue);

//create spans depend on word
lettersAndSpace.forEach((letter) => {
  //create empty span
  let emptySpan = document.createElement("span");
  //if letter is space
  if (letter === " ") {
    //add class to the span
    emptySpan.className = "with-space";
  }
  //append span to letters guess container
  lettersGuessContainer.appendChild(emptySpan);
});

//select guess spans
let guessSpan = document.querySelectorAll(".letters-guess span");

//set wrong attempts
let wrongAttempts = 0;

//select the draw element
let theDraw = document.querySelector(".hangman-draw");

//handle clicking on letters
document.addEventListener("click", (e) => {
  //set the chosen the if true or not
  let theStatus = false;
  if (e.target.className === "letter-box") {
    e.target.classList.add("clicked");
    //get the clicked letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    //the chosen word
    let theChosenWord = Array.from(randomValueValue.toLowerCase());

    //match the clicked letter to the letters in the chosen word
    theChosenWord.forEach((wordLetter, wordIndex) => {
      //if the clicked letter = to one of the chosen word letter
      if (wordLetter == theClickedLetter) {
        //set status to true
        theStatus = true;

        //loop on all guess spans
        guessSpan.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.innerHTML = theClickedLetter;
          }
        });
      }
    });
    //if letter is wrong
    if (theStatus !== true) {
      //increase the wrong attempts
      wrongAttempts++;

      //add wrong class to draw element
      theDraw.classList.add("wrong-" + wrongAttempts);

      //finish the game

      if (wrongAttempts === 8) {
        endGame();
        lettersContainer.classList.add("finished");
      }
    }
  }
});

//end game function
// function endGame() {
//   //create pop-up div
//   let div = document.createElement("div");

//   //create text
//   let divText = document.createTextNode(
//     `Game Over, The word is ${randomValueValue}`
//   );

//   //append text to div
//   div.appendChild(divText);

//   //add class on div
//   div.className = "popup";

//   //apend to the body
//   document.body.appendChild(div);
// }


let correctGuesses = 0;

// Inside the click event handler
if (wordLetter == theClickedLetter) {
    // ...
    correctGuesses++;

    // Check if the player has guessed all the letters
    if (correctGuesses === randomValueValue.length) {
        endGame(true); // Call endGame with a win condition
        lettersContainer.classList.add("finished");
    }
}

function endGame(isWin) {
  // Create a pop-up div
  let div = document.createElement("div");

  if (isWin) {
    // Create a winning message
    let divText = document.createTextNode(
      `Congratulations, You won! The word is ${randomValueValue}`
    );
    div.appendChild(divText);
    div.className = "popup-win";
  } else {
    // Create a losing message
    let divText = document.createTextNode(
      `Game Over, The word is ${randomValueValue}`
    );
    div.appendChild(divText);
    div.className = "popup-lose";
  }

  // Append to the body
  document.body.appendChild(div);
}
