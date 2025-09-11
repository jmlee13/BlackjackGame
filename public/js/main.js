const dealerCard = {};
const playerHand = [];
const dealerHand = [];
let dealerCount = 0;
let playerCount = 0;
hideButtons()

function dealerDrawsCard(callback) {
    console.log('dealer card drawn');
    fetch(`/dealerDraw`)
        .then(res => res.json())
        .then(data => {
            console.log(data.dealerDrawnCard);
            dealerCount += aceCalc(data.dealerDrawnCard, dealerCount);
            const img = document.createElement('img');
            img.src = data.dealerDrawnCard.frontImage;
            img.className = 'dealerCards';
            dealerHand.push(data.dealerDrawnCard);
            console.log(dealerHand);
            dealerCount = handCalc(dealerHand);
            console.log(dealerCount);
            const dealerDrawnCardDiv = document.createElement('div');
            dealerDrawnCardDiv.className = 'dealerCards w-48 h-auto flex items-center justify-center';
            document.querySelector('.dealer').appendChild(dealerDrawnCardDiv).appendChild(img);
            document.getElementById('dealerCount').innerText = `Dealer has: ${dealerCount}`;
            if (callback) callback()
        })
}

function showGameButtons() {
    document.getElementById('hit').style.visibility = "visible"
    document.getElementById('stand').style.visibility = "visible"
    document.getElementById('hit').addEventListener('click', hit)
    document.getElementById('stand').addEventListener('click', stand)
}

function dealerTurn() {
    console.log('dealer turn started');
    document.getElementById('dealercard2').src = dealerCard['card2'];
    document.getElementById('dealerCount').innerText = `Dealer has: ${dealerCount}`;
    if (dealerCount < 17) {
        setTimeout(() => {
            dealerDrawsCard(dealerTurn); // call again after drawing
        }, 1000);
    } else {
        // Dealer is done, check winner here if needed
        if (dealerCount > 21 || (dealerCount >= 17 && dealerCount < 21 && dealerCount < playerCount)) {
            document.getElementById('playerCount').innerText = `You win!`
        }
        else if (dealerCount >= 17 && dealerCount <= 21 && dealerCount > playerCount) {
            playerLose()
        }
        else if (dealerCount == playerCount){
            document.getElementById('playerCount').innerText = `You pushed.`
        }
    }
}

function playerCountCheck() {
    if (playerCount < 21) {
        document.getElementById('playerCount').innerText = `You have: ${playerCount}`;
    }
    else if (playerCount > 21) {
        document.getElementById('playerCount').innerText = `You busted with ${playerCount}`;
        hideButtons();
    }
    else if (playerCount = 21){
        document.getElementById('playerCount').innerText = `You have: ${playerCount}`;
        hideButtons();
        dealerTurn();
    }
}

function handCalc(cards){
    let total = 0;
    let aceCount = 0;
    for (const card of cards) {
        if (card.name && card.name.toLowerCase() === 'ace'){
            aceCount++;
        }
        else if (typeof card.value === 'number'){
            total += card.value;
        }
        else if (!isNaN(Number(card.value))){
            total += Number(card.value);
        }
    }
    for (let i=0; i < aceCount; i++){
        if (total + 11 <= 21 - (aceCount - 1 - i)){
            total += 11;
        }
        else {
            total += 1;
        }
    }
    return total;
}

function playerLose(){
    document.getElementById('playerCount').innerText = `You lose!`;
}    

function hideButtons(){
    document.getElementById('hit').style.visibility = 'hidden';
    document.getElementById('stand').style.visibility = 'hidden';
}

function aceCalc(card, currentCount){
    if (card.name === 'ace'){
        return currentCount <= 10 ? 11 : 1;
    }
    if (typeof card.value === 'number'){
        return card.value;
    }
    if (!isNaN(Number(card.value))){
        return Number(card.value);
    }
    return 0;
}

document.getElementById('play').addEventListener('click', _ => {
    document.querySelectorAll('.playerCards').forEach(card => card.remove());
    document.querySelectorAll('.dealerCards').forEach(card => card.remove());
    document.getElementById('hit').style.visibility = 'visible';
    document.getElementById('stand').style.visibility = 'visible';
    console.log('clicked!')
    fetch('/play')
        .then(res => res.json())
        .then(data => {
            //Creates img elements for the player's cards and dealer's cards
            const playerCardOne = document.createElement('img');
            const playerCardTwo = document.createElement('img');
            const dealerCardOne = document.createElement('img');
            const dealerCardTwo = document.createElement('img');

            //Assigns the front image, id and class of the first player card to the created element
            playerCardOne.src = data.cardOne.frontImage;
            playerCardOne.id = 'playercard1';
            playerCardOne.className = 'playerCards';

            //Assigns the front image, id and class of the second player card to the created element
            playerCardTwo.src = data.cardTwo.frontImage;
            playerCardTwo.id = 'playercard2';
            playerCardTwo.className = 'playerCards';

            //Assigns the front image, id and class of the dealer cards to their created elements
            dealerCardOne.src = data.dealerCardOne.frontImage;
            dealerCardOne.id = 'dealercard1';
            dealerCardOne.className = 'dealerCards';

            dealerCardTwo.src = data.dealerCardTwo.backImage;
            dealerCardTwo.id = 'dealercard2';
            dealerCardTwo.className = 'dealerCards';

            //Appends the new elements to the DOM
            document.querySelector('.playercardone').appendChild(playerCardOne);
            document.querySelector('.playercardtwo').appendChild(playerCardTwo);
            document.querySelector('.dealercardone').appendChild(dealerCardOne);
            document.querySelector('.dealercardtwo').appendChild(dealerCardTwo);
            
            //Calculates the player count to be displayed at the start of the game
            playerHand.length = 0;
            playerHand.push(data.cardOne, data.cardTwo);
            playerCount = handCalc(playerHand);
            console.log(playerCount);
            dealerHand.length = 0;
            dealerHand.push(data.dealerCardOne, data.dealerCardTwo);
            dealerCount = handCalc(dealerHand);

            //Assigns the created html elements with their respective card images and displays the player's and dealer's card count
            document.getElementById('playercard1').src = data.cardOne.frontImage;
            document.getElementById('playercard2').src = data.cardTwo.frontImage;
            document.getElementById('playerCount').innerText = `You have: ${playerCount}`
            document.getElementById('dealercard1').src = data.dealerCardOne.frontImage;
            document.getElementById('dealercard2').src = data.dealerCardTwo.backImage;
            document.getElementById('dealerCount').innerText = `Dealer has: ???`;

            //Assigns the dealer's cards to the shared object to be used in the 'stand' function to reveal the dealer's second card
            dealerCard['card1'] = data.dealerCardOne;
            dealerCard['card2'] = data.dealerCardTwo.frontImage;
        })
})

document.getElementById('hit').addEventListener('click', _ => {
    console.log('hit')
    fetch('/hit')
        .then(res => res.json())
        .then(data => {
            const drawnPlayerCard = document.createElement('img');
            drawnPlayerCard.src = data.drawCard.frontImage;
            drawnPlayerCard.className = 'playerCards';
            console.log(playerCount);
            playerHand.push(data.drawCard);
            playerCount = handCalc(playerHand);
            playerCountCheck();
            console.log(playerCount);
            const drawnPlayerCardDiv = document.createElement('div');
            drawnPlayerCardDiv.className = 'playerCards w-48 h-auto flex items-center justify-center';
            document.querySelector('.player').appendChild(drawnPlayerCardDiv).appendChild(drawnPlayerCard);
        })
})

document.getElementById('stand').addEventListener('click', _ => {
    console.log('stand')
    fetch('/stand')
        .then(res => res.json())
        .then(data => {
            hideButtons();
            dealerTurn();
        })
})