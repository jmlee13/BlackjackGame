document.getElementById('draw').addEventListener('click', drawCards)
document.getElementById('draw').addEventListener('click', showGameButtons)
document.getElementById('hit').style.visibility = "hidden"
document.getElementById('stand').style.visibility = "hidden"
let playerCount = 0
let dealerCount = 0

let deckId = ''
fetch(`https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6`)
    .then(res => res.json())    //parse response as JSON
    .then(data => {
        console.log(data)
        deckId = data.deck_id
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

function drawCards(){
    const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            drawData = data
            console.log(data)
            document.getElementById('playercard1').src = data.cards[0].image
            document.getElementById('playercard2').src = data.cards[2].image
            dealerBackCard()
            document.getElementById('dealercard2').src = data.cards[3].image
            playerCount = convertToNum(data.cards[0].value) + convertToNum(data.cards[2].value)
            dealerCount = convertToNum(data.cards[1].value) + convertToNum(data.cards[3].value)
            document.getElementById('playerCount').innerText = `You have: ${playerCount}`
            document.getElementById('dealerCount').innerText = `Dealer has: ???`
        })
}

function dealerDrawsCard(callback){
        fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            dealerCount += convertToNum(data.cards[0].value)
            const img = document.createElement('img')
            img.src = data.cards[0].image
            document.getElementById('dealerCards').appendChild(img)
            showDealersCount()
            if (callback) callback()
        })
}

function showGameButtons(){
    document.getElementById('hit').style.visibility = "visible"
    document.getElementById('stand').style.visibility = "visible"
    document.getElementById('hit').addEventListener('click', hit)
    document.getElementById('stand').addEventListener('click', stand)
    }

function hit(){
    fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const img = document.createElement('img')
            img.src = data.cards[0].image
            document.getElementById('playerCards').appendChild(img)
            playerCount += convertToNum(data.cards[0].value)
            document.getElementById('playerCount').innerText = `You have: ${playerCount}`
            if (playerCount > 21){
                busted()
            }
        })
}

function busted(){
    document.getElementById('playerCount').innerText = `You Busted!`
    document.getElementById('hit').style.visibility = "hidden"
    document.getElementById('stand').style.visibility = "hidden"

}

function stand(){
    document.getElementById('dealercard1').src = drawData.cards[1].image
    showDealersCount()
    dealerTurn()
}

function dealerTurn() {
    if (dealerCount < 17) {
        setTimeout(() => {
            dealerDrawsCard(dealerTurn); // call again after drawing
        }, 1000);
    } else {
        // Dealer is done, check winner here if needed
        if (dealerCount > 21 || (dealerCount >= 17 && dealerCount < 21 && dealerCount < playerCount)){
            document.getElementById('playerCount').innerText = `You win!`
        }
        else if (dealerCount >= 17 && dealerCount <= 21 && dealerCount > playerCount){
            busted()
        }
    }
}

function showDealersCount(){
    document.getElementById('dealerCount').innerText = `Dealer has: ${dealerCount}`
}

function dealerBackCard(){
        document.getElementById('dealercard1').src = 'https://www.deckofcardsapi.com/static/img/back.png'
}

function convertToNum(val){
    if (val === 'KING' || val === 'QUEEN' || val === 'JACK'){
        return 10
    }
    else if ((val === 'ACE' && playerCount <= 10) || (val === 'ACE' && dealerCount <= 10)){
        return 11
    }
    else if ((val === 'ACE' && playerCount >= 20) || (val === 'ACE' && dealerCount >= 20)){
        return 1
    }
    else {
        return Number(val)
    }
}

function newGame(){
    document.getElementById('playerCards').remove()
    document.getElementById('dealerCards').remove()
}