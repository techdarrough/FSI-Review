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