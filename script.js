// vote count table elements

let voteTableCell0 = document.querySelector('#doggo')
let voteTableCell1 = document.querySelector('#catto')
let voteTableCell2 = document.querySelector('#fish')


//count vars here


// create button add text and style to button
let petContainers = document.querySelectorAll('.animal');

 for(let i =0; i < petContainers.length; i++){
// console.log(i)
    let button = document.createElement('button')
    let className = 'petVoteButton-' + String(i)
    button.setAttribute('class', className);
    button.textContent = 'Vote! for this pet';
    button.style.fontSize = '16px';
    
    petContainers[i].append(button);
 } 

 
