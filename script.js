// vote count table elements

let voteTableCell0 = document.querySelector('#doggo-votes');
let voteTableCell1 = document.querySelector('#catto-votes');
let voteTableCell2 = document.querySelector('#fish-votes');
let doggoWins = document.querySelector('#doggo')
let cattoWins = document.querySelector('#catto')
let fishWins = document.querySelector('#fish')


//Set local storage to handle null and pull previous value
if(localStorage.getItem('petVote0') === null){
    var petVote0 = 0;
} else {
    var petVote0 = parseInt(localStorage.getItem('petVote0'));
    voteTableCell0.textContent = petVote0;
}

if(localStorage.getItem('petVote1') === null){
    var petVote1 = 0;
} else {
    var petVote1 = parseInt(localStorage.getItem('petVote1'));
    voteTableCell1.textContent = petVote1;
}

if(localStorage.getItem('petVote2') === null){
    var petVote2 = 0;
} else {
    var petVote2 = parseInt(localStorage.getItem('petVote2'));
    voteTableCell2.textContent = petVote2;
}

// create button add text and style to button
// selector to compare lenght against
let petContainers = document.querySelectorAll('.animal');

 for(let i =0; i < petContainers.length; i++){
// console.log(i)
    let button = document.createElement('button')
    let className = 'petVoteButton-' + String(i)
    button.setAttribute('class', className);
    button.textContent = 'Vote! for this pet';
    button.style.fontSize = '16px';
    button.style.margin = '5px'
   // button.style.center
    petContainers[i].append(button);
 } 
// Set selector for counts and count click events on buttons
//buton_0
let button_0 = document.querySelector('.petVoteButton-0');

button_0.addEventListener("click", function(){
  //  console.log(e.target)
  petVote0 = petVote0 + 1
  voteTableCell0.textContent = petVote0;
  //set local
  localStorage.setItem('petVote0', petVote0);

  
})
//button_1
let button_1 = document.querySelector('.petVoteButton-1');

button_1.addEventListener("click", function(){
    //  console.log(e.target)
    petVote1 = petVote1 + 1
    voteTableCell1.textContent = petVote1;
    //set local
    localStorage.setItem('petVote1', petVote1);
  
    
  })
// button_2
let button_2 = document.querySelector('.petVoteButton-2');

button_2.addEventListener("click", function(){
    //  console.log(e.target)
    petVote2 = petVote2 + 1
    voteTableCell2.textContent = petVote2;
    //set local
    localStorage.setItem('petVote2', petVote2);
  
    
  })

// set location var for button
let favoritePet = document.querySelector('#voting-container')
//for(i =0; i < favoritePet.lenght; i++){

    let fbutton = document.createElement('button')
    let fclassName = 'favoritePet' 
    fbutton.setAttribute('class', fclassName)
    fbutton.textContent = 'Highlight Favorite Pet'
    fbutton.style.fontSize = '20px'
    fbutton.style.margin = '10px'
    fbutton.style.alignSelf = screenLeft
    favoritePet.append(fbutton)


//set var for new button selecting by newly created class 
let hlFavPet = document.querySelector('.favoritePet')

hlFavPet.addEventListener('click', function(){
//remove background color
    if(doggoWins.style.background = 'yellow') {
        doggoWins.style.background = 'white'
        console.log('dog background removed')

    } else  if (cattoWins.style.background = 'yellow') {
        cattoWins.style.background = 'white'
        console.log('cat background removed')

    } else if (fishWins.style.background = 'yellow') {
        fishWins.style.background = 'white'
        console.log('fish background removed')
    }
    
    if(petVote0 > petVote1 && petVote0 > petVote2){
        // console.log('doggo wins')
        doggoWins.style.background = 'yellow'

    } else if (petVote1 > petVote0 && petVote1 > petVote2){
        cattoWins.style.background = 'yellow'

    } else if (petVote2 > petVote0 && petVote2 > petVote1){
        fishWins.style.background = 'yellow'

    }
})
