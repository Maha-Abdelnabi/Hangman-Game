//generate the letters
const letters = "abcdefghijklmnopqrstuvwxyz";

//get array from letters
let lettersArray= Array.from(letters);

//select letters container
let lettersContainer = document.querySelector(".letters");

//generate letters
lettersArray.forEach(letter =>{

    //create span
    let span =document.createElement("span")

    //create letter text node
    let theLetter  = document.createTextNode(letter)

    //append the letter to span
    span.appendChild(theLetter);

    //add class on span
    span.className = 'letter-box';
    
    //append span to the letters container
    lettersContainer.appendChild(span);

});

//object of words + categories
const words = {
    animal: ["cat", "dog","lion", "horse", "duck", "kangroo"],
    fruit :["apple", "banana" ,"orange", "cherry", "watermelon", "peach"],
    vegetable: ['carrot', 'broccoli','spinach', 'onion', 'potato', 'tomato'],
    place:['paris',"new york",'tokyo', 'jerusalem', 'rome', 'egypt'],
    color:['red' ,'blue','green', 'pink', 'purple'],
}

//get random property
let allKeys = Object.keys(words)

//choose random index depends on keys length
let randomPropNumber = Math.floor(Math.random()* allKeys.length);

//get the name of the key index --category
let randomPropName = allKeys[randomPropNumber]

//get random value --category words
let randomPropValue = words[randomPropName]
console.log(randomPropValue)
//choose a word randomly in that category and get its position number (index) within this list using
let randomValueNumber = Math.floor(Math.random()* randomPropValue.length)
console.log(randomValueNumber)
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
lettersAndSpace.forEach(letter =>{
    //create empty span
    let emptySpan = document.createElement("span");
    //if letter is space
    if(letter === " "){
        //add class to the span
        emptySpan.className = 'with-space';
    }
    //append span to letters guess container
    lettersGuessContainer.appendChild(emptySpan);
})

//handle clicking on letters
document.addEventListener("click", (e) =>{
    if(e.target.className ==='letter-box'){
        e.target.classList.add('clicked');
    //get the clicked letter
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    //the chosen word
    let theChosenWord = Array.from(randomValueValue.toLowerCase());
    
    //match the clicked letter to the letters in the chosen word
    theChosenWord.forEach((wordLetter, index) =>{
       //if the clicked letter = to one of the chosen word letter
       if(wordLetter ==  theClickedLetter ){
        console.log(`The ${theClickedLetter} was found at index: ${index}`);
       }
    })
    }
})
