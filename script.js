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

