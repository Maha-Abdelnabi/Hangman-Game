//generate the letters
const letters = "abcdefghijklmnopqrstuvwxyz";

//get array from letters
let lettersArray= Array.from(letters);
console.log(lettersArray);

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
    place:['paris',"newyork",'tokyo', 'jerusalem', 'rome', 'egypt'],
    color:['red' ,'blue','green', 'pink', 'purple'],
}

//get random property
let allKeys = Object.keys(words)
console.log(allKeys)
//choose random index of the keys
let randomPropNumber = Math.floor(Math.random()* allKeys.length);
console.log(randomPropNumber)
//get the name of the key index
let randomPropName = allKeys[randomPropNumber]
console.log(randomPropName)
//get random value
let randomPropValue = words[randomPropName]
console.log(randomPropValue)
//choose a word randomly in that category and get its position number (index) within this list using
let randomValueNumber = Math.floor(Math.random()* randomPropValue.length)
console.log(randomValueNumber)

let randomValueValue = randomPropValue[randomValueNumber];
console.log(randomValueValue)