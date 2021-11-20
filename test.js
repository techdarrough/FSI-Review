// this code is ugly and I dont like it
// onload set votes
let totalTD = document.querySelector('#total');
let dogVotesTD = document.querySelector("#doggo-votes");
let cattoVotesTD = document.querySelector("#catto-votes");
let fishVotesTD = document.querySelector("#fish-votes");
let dogVotes = localStorage.getItem('dogVotes');
let catVotes = localStorage.getItem('catVotes');
let fishVotes = localStorage.getItem('fishVotes');


if (dogVotes === null){
    dogVotes = 0;
} else {
    dogVotesTD = parseInt(dogVotes)
}
if (catVotes === null){
    catVotes = 0;
} else {
    cattoVotes = parseInt(cattoVotesTD)
}
if (fishVotes === null){
    fishVotes = 0;
} else {
    fishvotes = parseInt(fishVotes)
}


// let catVotes = 0;
// let fishVotes = 0;
//selectors for each animinal div 
let dogDiv = document.querySelector("#doggo");
let catDiv = document.querySelector("#catto");
let fishDiv = document.querySelector("#fish");


//create and appened dog vote button 
let dogVoteBtn = document.createElement('button');
dogVoteBtn.textContent = "Vote for Doggo";
dogDiv.append(dogVoteBtn);

dogVoteBtn.addEventListener("click", function(){
     dogVotes = dogVotes + 1;
     dogVotesTD.textContent = dogVotes; 
     totalTD.textContent = dogVotes + catVotes + fishVotes
     localStorage.setItem('dogVotes',dogVotes)


   

})

// create and append catto vote button 

let catVoteBtn = document.createElement('button')
catVoteBtn.textContent = "Vote for Catto"
catDiv.append(catVoteBtn)
//count catto votes 
catVoteBtn.addEventListener("click", function(){
    catVotes = catVotes + 1;
    cattoVotesTD.textContent = catVotes;
    totalTD.textContent = dogVotes + catVotes + fishVotes;
    localStorage.setItem('catVotes', catVotes)




})

//create fish button

let fishVoteBtn = document.createElement('button')
fishVoteBtn.textContent = "Vote for Fish"
fishDiv.append(fishVoteBtn)

fishVoteBtn.addEventListener("click", function(){
    fishVotes = fishVotes + 1;
    fishVotesTD.textContent = fishVotes;
    totalTD.textContent = dogVotes + catVotes + fishVotes;
    localStorage.setItem('fishVotes', fishVotes)


  

})