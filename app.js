// 1. Watersheds
const modalWatersheds = document.querySelector('.modal-watersheds');
// 2. Water at certain hours
const modalCertainHours = document.querySelector('.modal-certainHours');
// 3. Check for plumbing leaks
const modalLeaks = document.querySelector('.modal-leaks');
// 4. Dedicated bottle
const modalDedicatedBottle = document.querySelector('.modal-dedicatedBottle');
// 5. Shorter showers 
const modalShortShowers = document.querySelector('.modal-shortShowers');
// 6. Put a nozzle on garden hoses 
const modalNozzle = document.querySelector('.modal-nozzle');
// 7. Don't let the faucet run too long
const modalFaucetOff = document.querySelector('.modal-faucetOff');
// 8. Never use the toilet to throw away trash
const modalToilet = document.querySelector('.modal-toilet');

const game = document.getElementById('game');

let firstPick;
let isPaused = true;
let matches;

const waterConservationTips = [
  {// 1. 
    image: "watershed.jpg",
    name: 'watershed'
  },
  {// 2. 
    image: "grassNight.jpg",
    name: 'Water certain hours'
  },
  {// 3. 
    image: "faucet.jpg",
    name: 'Check for plumbing leaks'
  },
  {// 4. 
    image: "bottle.jpg",
    name: 'dedicated bottle'
  },
  {// 5. 
    image: "shower.jpg",
    name: 'Take short showers'
  },
  {// 6. 
    image: "hose.jpg",
    name: 'Put a nozzle on your garden hose'
  },
  {// 7. 
    image: "toothBrush.jpg",
    name: 'Dont let the Faucet run'
  },
  {// 8. 
    image: "toilet.jpg",
    name: 'Never use the toilet as a waste basket'
  },
]

const resetGame = async() => {
  game.innerHTML = '';
  isPaused = true;
  firstPick = null;
  matches = 0;
  setTimeout(async () => {
      displayTips([...waterConservationTips, ...waterConservationTips]);
      isPaused = false;
  },200)
}

//randomizes tips in array and turns them into div elements
const displayTips = (tip) => {
  tip.sort(_ => Math.random() - 0.5);
  const tipHTML = tip.map(tip => {
    return `
      <div class="card" onclick="clickCard(event)" data-tipname="${tip.name}">
        <div class="front ">
        </div>
        <div class="back rotated">
        <img class="tipImage" src="${tip.image}" alt="${tip.name}"  />
        <!-- <h2>${tip.name}</h2>  -->
        </div>
        </div>
    `}).join('');
  game.innerHTML = tipHTML;
}

const clickCard = (e) => {
  const tipCard = e.currentTarget;
  const [front, back] = getFrontAndBackFromCard(tipCard)
  if(front.classList.contains("rotated") || isPaused) {
      return;
  }
  isPaused = true;
  rotateElements([front, back]);
  if(!firstPick){
      firstPick = tipCard;
      isPaused = false;
  }
  else {
    const secondTipName = tipCard.dataset.tipname;
    const firstTipName = firstPick.dataset.tipname;
    if(firstTipName !== secondTipName) {
      const [firstFront, firstBack] = getFrontAndBackFromCard(firstPick);
      setTimeout(() => {
        rotateElements([front, back, firstFront, firstBack]);
        firstPick = null;
        isPaused = false;
          }, 500)    
      }else {
        switch(firstPick.dataset.tipname){
          case 'watershed':
            modalWatersheds.showModal();
            break;
          case 'Water certain hours':
            modalCertainHours.showModal();
            break;
          case 'Check for plumbing leaks':
            modalLeaks.showModal();
            break;
          case 'dedicated bottle':
            modalDedicatedBottle.showModal();
            break;
          case 'Take short showers':
            modalShortShowers.showModal();
            break;
          case 'Put a nozzle on your garden hose':
            modalNozzle.showModal();
            break;
          case 'Dont let the Faucet run':
            modalFaucetOff.showModal();
            break;
          case 'Never use the toilet as a waste basket':
            modalToilet.showModal();
            break;
        }
        matches++;
        if(matches === 8) {
        console.log("WINNER");
      }
      firstPick = null;
      isPaused = false;
    }
  }
    
}

const getFrontAndBackFromCard = (card) => {
  const front = card.querySelector(".front");
  const back = card.querySelector(".back");
  return [front, back]
}

const rotateElements = (elements) => {
  if(typeof elements !== 'object' || !elements.length) return;
  elements.forEach(element => element.classList.toggle('rotated'));
}

resetGame();

// all classes
const modal = document.querySelectorAll('.modal');
const closeModal = document.querySelectorAll('.close-button');
closeModal[0].addEventListener('click', function() {
  modal[0].close();
})

closeModal[1].addEventListener('click', function() {
  modal[1].close();
})

closeModal[2].addEventListener('click', function() {
  modal[2].close();
})

closeModal[3].addEventListener('click', function() {
  modal[3].close();
})

closeModal[4].addEventListener('click', function() {
  modal[4].close();
})

closeModal[5].addEventListener('click', function() {
  modal[5].close();
})

closeModal[6].addEventListener('click', function() {
  modal[6].close();
})

closeModal[7].addEventListener('click', function() {
  modal[7].close();
})
