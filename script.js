//onload set votes
let dogVotesTd = document.querySelector("#doggo-votes");
let dogVotes = localStorage.getItem('dog-votes')
if (dogVotes) {
    dogVotesTd.textContent = dogVotes;
}

let catVotesTd = document.querySelector("#catto-votes");
let catVotes = localStorage.getItem('cat-votes')
if (catVotes) {
    catVotesTd.textContent = catVotes;
}

let fishVotesTd = document.querySelector("#fish-votes");
let fishVotes = localStorage.getItem('fish-votes')
if (fishVotes) {
    fishVotesTd.textContent = fishVotes;
}

//get all animal sections
let animals = document.querySelectorAll(".animal")

//create dog vote button
let dogVoteBtn = document.createElement("button")
dogVoteBtn.textContent = "Vote for Doggo"
dogVoteBtn.addEventListener('click', function(e) {
    let dogVotesCount = parseInt(dogVotesTd.textContent);
    dogVotesCount = dogVotesCount + 1;
    dogVotesTd.textContent = dogVotesCount;
    localStorage.setItem('dog-votes', dogVotesCount);
});
animals[0].append(dogVoteBtn)

//create cat vote button
let catVoteBtn = document.createElement("button")
catVoteBtn.textContent = "Vote for Catto"
catVoteBtn.addEventListener('click', function(e) {
    let catVotesCount = parseInt(catVotesTd.textContent);
    catVotesCount = catVotesCount + 1;
    catVotesTd.textContent = catVotesCount;
    localStorage.setItem('cat-votes',catVotesCount)
});
animals[1].append(catVoteBtn)

//create fish vote button
let fishVoteBtn = document.createElement("button")
fishVoteBtn.textContent = "Vote for Fish Gold"
fishVoteBtn.addEventListener('click', function(e) {

    let fishVotesCount = parseInt(fishVotesTd.textContent);
    fishVotesCount = fishVotesCount + 1;
    fishVotesTd.textContent = fishVotesCount;
    localStorage.setItem('fish-votes',fishVotesCount)
});
animals[2].append(fishVoteBtn)

//calculate favorite votes when clicked
let votingContainer = document.querySelector("#voting-container");
let favoriteButton = document.createElement("button");
favoriteButton.textContent = "Get Favorite Pet"
favoriteButton.addEventListener('click', function() {
    //which votes has most?
    let dVotes = parseInt(dogVotesTd.textContent)
    let cVotes = parseInt(catVotesTd.textContent)
    let fVotes = parseInt(fishVotesTd.textContent)
    let votes = [
        {id: 'doggo', votes: dVotes}, 
        {id: 'catto', votes: cVotes}, 
        {id: 'fish', votes: fVotes}
    ]
    //compare them, start at dog votes
    let highestVotes = votes[0]
    for (let index = 0; index < votes.length; index++) {
        if(votes[index].votes > highestVotes.votes){
            highestVotes = votes[index]
        }
        
    }

    //reset all animals so we don't have two favorites
    for (let index = 0; index < animals.length; index++) {
        console.log(animals[index])
        animals[index].style.backgroundColor = "white"
        
    }

    //add favorite class to pet's section
    let favoriteAnimal = document.querySelector("#"+highestVotes.id)
    favoriteAnimal.style.backgroundColor = "yellow"
})
votingContainer.append(favoriteButton)