const express = require('express')
const app = express()
const PORT = 8000
app.use(express.static(__dirname));
app.use(express.json())
const path = require('path');

const deckOfCards = [
        {
        'id': 'aceOfSpades',
        'name': 'ace',
        'suit': 'spades',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/AS.png'
    },
        {
        'id': 'aceOfClubs',
        'name': 'ace',
        'suit': 'clubs',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/AC.png'
    },
        {
        'id': 'aceOfHearts',
        'name': 'ace',
        'suit': 'hearts',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/AH.png',
    },
        {
        'id': 'aceOfDiamonds',
        'name': 'ace',
        'suit': 'diamonds',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/AD.png',
    },
        {
        'id': 'twoOfSpades',
        'name': 'two',
        'value': 2,
        'suit': 'spades',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/2S.png',
    },
        {
        'id': 'twoOfClubs',
        'name': 'two',
        'value': 2,
        'suit': 'clubs',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/2C.png',
    },
        {
        'id': 'twoOfHearts',
        'name': 'two',
        'value': 2,
        'suit': 'hearts',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/2H.png',
    },
        {
        'id': 'twoOfDiamonds',
        'name': 'two',
        'value': 2,
        'suit': 'diamonds',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/2D.png',
    },
        {
        'id': 'threeOfSpades',
        'name': 'three',
        'value': 3,
        'suit': 'spades',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/3S.png',
    },
        {
        'id': 'threeOfClubs',
        'name': 'three',
        'value': 3,
        'suit': 'clubs',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/3C.png',
    },
        {
        'id': 'threeOfHearts',
        'name': 'three',
        'value': 3,
        'suit': 'hearts',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/3H.png',
    },
        {
        'id': 'threeOfDiamonds',
        'name': 'three',
        'value': 3,
        'suit': 'diamonds',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/3D.png',
    },
        {
        'id': 'fourOfSpades',
        'name': 'four',
        'value': 4,
        'suit': 'spades',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/4S.png',
    },
        {
        'id': 'fourOfClubs',
        'name': 'four',
        'value': 4,
        'suit': 'clubs',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/4C.png',
    },
        {
        'id': 'fourOfHearts',
        'name': 'four',
        'value': 4,
        'suit': 'hearts',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/4H.png',
    },
        {
        'id': 'fourOfDiamonds',
        'name': 'four',
        'value': 4,
        'suit': 'diamonds',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/4D.png',
    },
        {
        'id': 'fiveOfSpades',
        'name': 'five',
        'value': 5,
        'suit': 'spades',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/5S.png',
    },
        {
        'id': 'fiveOfClubs',
        'name': 'five',
        'value': 5,
        'suit': 'clubs',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/5C.png',
    },
        {
        'id': 'fiveOfHearts',
        'name': 'five',
        'value': 5,
        'suit': 'hearts',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/5H.png',
    },
        {
        'id': 'fiveOfDiamonds',
        'name': 'five',
        'value': 5,
        'suit': 'diamonds',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/5D.png',
    },
        {
        'id': 'sixOfSpades',
        'name': 'six',
        'value': 6,
        'suit': 'spades',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/6S.png',
    },
        {
        'id': 'sixOfClubs',
        'name': 'six',
        'value': 6,
        'suit': 'clubs',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/6C.png',
    },
        {
        'id': 'sixOfHearts',
        'name': 'six',
        'value': 6,
        'suit': 'hearts',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/6H.png',
    },
        {
        'id': 'sixOfDiamonds',
        'name': 'six',
        'value': 6,
        'suit': 'diamonds',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/6D.png',
    },
        {
        'id': 'sevenOfSpades',
        'name': 'seven',
        'value': 7,
        'suit': 'spades',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/7S.png',
    },
        {
        'id': 'sevenOfClubs',
        'name': 'seven',
        'value': 7,
        'suit': 'clubs',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/7C.png',
    },
        {
        'id': 'sevenOfHearts',
        'name': 'seven',
        'value': 7,
        'suit': 'hearts',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/7H.png',
    },
        {
        'id': 'sevenOfDiamonds',
        'name': 'seven',
        'value': 7,
        'suit': 'diamonds',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/7D.png',
    },
        {
        'id': 'eightOfSpades',
        'name': 'eight',
        'value': 8,
        'suit': 'spades',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/8S.png',
    },
        {
        'id': 'eightOfClubs',
        'name': 'eight',
        'value': 8,
        'suit': 'clubs',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/8C.png',
    },
        {
        'id': 'eightOfHearts',
        'name': 'eight',
        'value': 8,
        'suit': 'hearts',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/8H.png',
    },
        {
        'id': 'eightOfDiamonds',
        'name': 'eight',
        'value': 8,
        'suit': 'diamonds',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/8D.png',
    },
        {
        'id': 'nineOfSpades',
        'name': 'nine',
        'value': 9,
        'suit': 'spades',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/9S.png',
    },
        {
        'id': 'nineOfClubs',
        'name': 'nine',
        'value': 9,
        'suit': 'clubs',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/9C.png',
    },
        {
        'id': 'nineOfHearts',
        'name': 'nine',
        'value': 9,
        'suit': 'hearts',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/9H.png',
    },
        {
        'id': 'nineOfDiamonds',
        'name': 'nine',
        'value': 9,
        'suit': 'diamonds',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/9D.png',
    },
        {
        'id': 'tenOfSpades',
        'name': 'ten',
        'value': 10,
        'suit': 'spades',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/10S.png',
    },
        {
        'id': 'tenOfClubs',
        'name': 'ten',
        'value': 10,
        'suit': 'clubs',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/10C.png',
    },
        {
        'id': 'tenOfHearts',
        'name': 'ten',
        'value': 10,
        'suit': 'hearts',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/10H.png',
    },
        {
        'id': 'tenOfDiamonds',
        'name': 'ten',
        'value': 10,
        'suit': 'diamonds',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/10D.png',
    },
        {
        'id': 'jackOfSpades',
        'name': 'jack',
        'value': 10,
        'suit': 'spades',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/JS.png',
    },
        {
        'id': 'jackOfClubs',
        'name': 'jack',
        'value': 10,
        'suit': 'clubs',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/JC.png',
    },
        {
        'id': 'jackOfHearts',
        'name': 'jack',
        'value': 10,
        'suit': 'hearts',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/JH.png',
    },
        {
        'id': 'jackOfDiamonds',
        'name': 'jack',
        'value': 10,
        'suit': 'diamonds',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/JD.png',
    },
        {
        'id': 'queenOfSpades',
        'name': 'queen',
        'value': 10,
        'suit': 'spades',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/QS.png',
    },
        {
        'id': 'queenOfClubs',
        'name': 'queen',
        'value': 10,
        'suit': 'clubs',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/QC.png',
    },
        {
        'id': 'queenOfHearts',
        'name': 'queen',
        'value': 10,
        'suit': 'hearts',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/QH.png',
    },
        {
        'id': 'queensOfDiamonds',
        'name': 'queen',
        'value': 10,
        'suit': 'diamonds',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/QD.png',
    },
        {
        'id': 'kingOfSpades',
        'name': 'king',
        'value': 10,
        'suit': 'spades',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/KS.png',
    },
        {
        'id': 'kingOfClubs',
        'name': 'king',
        'value': 10,
        'suit': 'clubs',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/KC.png',
    },
        {
        'id': 'kingOfHearts',
        'name': 'king',
        'value': 10,
        'suit': 'hearts',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/KH.png',
    },
        {
        'id': 'kingOfDiamonds',
        'name': 'king',
        'value': 10,
        'suit': 'diamonds',
        'backImage': '/public/cards/card_back_left.png',
        'frontImage': '/public/cards/KD.png',
    },
]

let shoe = [];
function createDeck() {
    
    for (let i = 0; i < 6; i++){
        shoe = shoe.concat(deckOfCards.map(card => ({ ...card})))
    }
}

const dealerCardTwoShared = {};
createDeck();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', '/index.html'));
});

app.get('/hit', (req, res) => {
    const randomIndex = Math.floor(Math.random() * shoe.length);
    const drawCard = shoe.splice(randomIndex, 1)[0];
    res.json({ drawCard: drawCard})
});

app.get('/play', (req, res) => {
    if (shoe.length < 52){
        createDeck();
    }
    const randomIndexCardOne = Math.floor(Math.random() * shoe.length);
    const cardOne = shoe.splice(randomIndexCardOne, 1)[0];
    const randomIndexCardTwo = Math.floor(Math.random() * shoe.length);
    const cardTwo = shoe.splice(randomIndexCardTwo, 1)[0];
    const randomIndexDealerCardOne = Math.floor(Math.random() * shoe.length);
    const dealerCardOne = shoe.splice(randomIndexDealerCardOne, 1)[0];
    const randomIndexDealerCardTwo = Math.floor(Math.random() * shoe.length);
    const dealerCardTwo = shoe.splice(randomIndexDealerCardTwo, 1)[0];
    dealerCardTwoShared['card'] = dealerCardTwo;
    console.log(cardOne, cardTwo, dealerCardOne, dealerCardTwo);
    res.json({ cardOne: cardOne, cardTwo: cardTwo, dealerCardOne: dealerCardOne, dealerCardTwo: dealerCardTwo})
})

app.get('/stand', (req, res) => {
    const dealerCardTwo = dealerCardTwoShared['card']
    res.json({data: dealerCardTwo})
})

app.get('/dealerDraw', (req, res) => {
    const randomIndexDealerDrawnCard = Math.floor(Math.random() * shoe.length);
    const dealerDrawnCard = shoe.splice(randomIndexDealerDrawnCard, 1)[0];
    res.json({dealerDrawnCard: dealerDrawnCard})
})

app.get('/api/:cardId', (req, res) => {
    const cardId = req.params.cardId.toLowerCase()
    const card = deckOfCards.find(c => c.id && c.id.toLowerCase() === cardId)
    if(card){
        res.json(card);
    }
    else {
        res.json(deckOfCards)
    }
})

app.get('/ace', (req, res) => {
    res.json(deckOfCards)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})