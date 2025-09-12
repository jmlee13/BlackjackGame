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
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/S01.jpg'
    },
        {
        'id': 'aceOfClubs',
        'name': 'ace',
        'suit': 'clubs',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/C01.jpg'
    },
        {
        'id': 'aceOfHearts',
        'name': 'ace',
        'suit': 'hearts',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/H01.jpg',
    },
        {
        'id': 'aceOfDiamonds',
        'name': 'ace',
        'suit': 'diamonds',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/D01.jpg',
    },
        {
        'id': 'twoOfSpades',
        'name': 'two',
        'value': 2,
        'suit': 'spades',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/S02.jpg',
    },
        {
        'id': 'twoOfClubs',
        'name': 'two',
        'value': 2,
        'suit': 'clubs',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/C02.jpg',
    },
        {
        'id': 'twoOfHearts',
        'name': 'two',
        'value': 2,
        'suit': 'hearts',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/H02.jpg',
    },
        {
        'id': 'twoOfDiamonds',
        'name': 'two',
        'value': 2,
        'suit': 'diamonds',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/D02.jpg',
    },
        {
        'id': 'threeOfSpades',
        'name': 'three',
        'value': 3,
        'suit': 'spades',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/S03.jpg',
    },
        {
        'id': 'threeOfClubs',
        'name': 'three',
        'value': 3,
        'suit': 'clubs',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/C03.jpg',
    },
        {
        'id': 'threeOfHearts',
        'name': 'three',
        'value': 3,
        'suit': 'hearts',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/H03.jpg',
    },
        {
        'id': 'threeOfDiamonds',
        'name': 'three',
        'value': 3,
        'suit': 'diamonds',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/D03.jpg',
    },
        {
        'id': 'fourOfSpades',
        'name': 'four',
        'value': 4,
        'suit': 'spades',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/S04.jpg',
    },
        {
        'id': 'fourOfClubs',
        'name': 'four',
        'value': 4,
        'suit': 'clubs',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/C04.jpg',
    },
        {
        'id': 'fourOfHearts',
        'name': 'four',
        'value': 4,
        'suit': 'hearts',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/H04.jpg',
    },
        {
        'id': 'fourOfDiamonds',
        'name': 'four',
        'value': 4,
        'suit': 'diamonds',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/D04.jpg',
    },
        {
        'id': 'fiveOfSpades',
        'name': 'five',
        'value': 5,
        'suit': 'spades',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/S05.jpg',
    },
        {
        'id': 'fiveOfClubs',
        'name': 'five',
        'value': 5,
        'suit': 'clubs',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/C05.jpg',
    },
        {
        'id': 'fiveOfHearts',
        'name': 'five',
        'value': 5,
        'suit': 'hearts',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/H05.jpg',
    },
        {
        'id': 'fiveOfDiamonds',
        'name': 'five',
        'value': 5,
        'suit': 'diamonds',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/D05.jpg',
    },
        {
        'id': 'sixOfSpades',
        'name': 'six',
        'value': 6,
        'suit': 'spades',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/S06.jpg',
    },
        {
        'id': 'sixOfClubs',
        'name': 'six',
        'value': 6,
        'suit': 'clubs',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/C06.jpg',
    },
        {
        'id': 'sixOfHearts',
        'name': 'six',
        'value': 6,
        'suit': 'hearts',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/H06.jpg',
    },
        {
        'id': 'sixOfDiamonds',
        'name': 'six',
        'value': 6,
        'suit': 'diamonds',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/D06.jpg',
    },
        {
        'id': 'sevenOfSpades',
        'name': 'seven',
        'value': 7,
        'suit': 'spades',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/S07.jpg',
    },
        {
        'id': 'sevenOfClubs',
        'name': 'seven',
        'value': 7,
        'suit': 'clubs',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/C07.jpg',
    },
        {
        'id': 'sevenOfHearts',
        'name': 'seven',
        'value': 7,
        'suit': 'hearts',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/H07.jpg',
    },
        {
        'id': 'sevenOfDiamonds',
        'name': 'seven',
        'value': 7,
        'suit': 'diamonds',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/D07.jpg',
    },
        {
        'id': 'eightOfSpades',
        'name': 'eight',
        'value': 8,
        'suit': 'spades',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/S08.jpg',
    },
        {
        'id': 'eightOfClubs',
        'name': 'eight',
        'value': 8,
        'suit': 'clubs',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/C08.jpg',
    },
        {
        'id': 'eightOfHearts',
        'name': 'eight',
        'value': 8,
        'suit': 'hearts',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/H08.jpg',
    },
        {
        'id': 'eightOfDiamonds',
        'name': 'eight',
        'value': 8,
        'suit': 'diamonds',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/D08.jpg',
    },
        {
        'id': 'nineOfSpades',
        'name': 'nine',
        'value': 9,
        'suit': 'spades',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/S09.jpg',
    },
        {
        'id': 'nineOfClubs',
        'name': 'nine',
        'value': 9,
        'suit': 'clubs',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/C09.jpg',
    },
        {
        'id': 'nineOfHearts',
        'name': 'nine',
        'value': 9,
        'suit': 'hearts',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/H09.jpg',
    },
        {
        'id': 'nineOfDiamonds',
        'name': 'nine',
        'value': 9,
        'suit': 'diamonds',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/D09.jpg',
    },
        {
        'id': 'tenOfSpades',
        'name': 'ten',
        'value': 10,
        'suit': 'spades',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/S10.jpg',
    },
        {
        'id': 'tenOfClubs',
        'name': 'ten',
        'value': 10,
        'suit': 'clubs',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/C10.jpg',
    },
        {
        'id': 'tenOfHearts',
        'name': 'ten',
        'value': 10,
        'suit': 'hearts',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/H10.jpg',
    },
        {
        'id': 'tenOfDiamonds',
        'name': 'ten',
        'value': 10,
        'suit': 'diamonds',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/D10.jpg',
    },
        {
        'id': 'jackOfSpades',
        'name': 'jack',
        'value': 10,
        'suit': 'spades',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/SC1J.jpg',
    },
        {
        'id': 'jackOfClubs',
        'name': 'jack',
        'value': 10,
        'suit': 'clubs',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/CC1J.jpg',
    },
        {
        'id': 'jackOfHearts',
        'name': 'jack',
        'value': 10,
        'suit': 'hearts',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/HC1J.jpg',
    },
        {
        'id': 'jackOfDiamonds',
        'name': 'jack',
        'value': 10,
        'suit': 'diamonds',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/DC1J.jpg',
    },
        {
        'id': 'queenOfSpades',
        'name': 'queen',
        'value': 10,
        'suit': 'spades',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/SC2Q.jpg',
    },
        {
        'id': 'queenOfClubs',
        'name': 'queen',
        'value': 10,
        'suit': 'clubs',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/CC2Q.jpg',
    },
        {
        'id': 'queenOfHearts',
        'name': 'queen',
        'value': 10,
        'suit': 'hearts',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/HC2Q.jpg',
    },
        {
        'id': 'queensOfDiamonds',
        'name': 'queen',
        'value': 10,
        'suit': 'diamonds',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/DC2Q.jpg',
    },
        {
        'id': 'kingOfSpades',
        'name': 'king',
        'value': 10,
        'suit': 'spades',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/SC3K.jpg',
    },
        {
        'id': 'kingOfClubs',
        'name': 'king',
        'value': 10,
        'suit': 'clubs',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/CC3K.jpg',
    },
        {
        'id': 'kingOfHearts',
        'name': 'king',
        'value': 10,
        'suit': 'hearts',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/HC3K.jpg',
    },
        {
        'id': 'kingOfDiamonds',
        'name': 'king',
        'value': 10,
        'suit': 'diamonds',
        'backImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/DC3K.jpg',
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