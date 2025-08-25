const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()
const PORT = 8000

const deckOfCards = [
        {
        'id': 'aceOfSpades',
        'name': 'ace',
        'value': [1,11],
        'suit': 'spades',
        'backImage': '/deck_images/zback.jpg',
        'frontImage': 'http://www.marytcusack.com/maryc/decks/Images/Cards/WWDeadwood/S01.jpg'
    },
        {
        'id': 'aceOfClubs',
        'name': 'ace',
        'value': [1,11],
        'suit': 'clubs',
        'backImage': '/deck_images/zback.jpg'
    },
        {
        'id': 'aceOfHearts',
        'name': 'ace',
        'value': [1,11],
        'suit': 'hearts',
        'backImage': '/deck_images/zback.jpg'
    },
        {
        'id': 'aceOfDiamonds',
        'name': 'ace',
        'value': [1,11],
        'suit': 'diamonds',
        'backImage': '/deck_images/zback.jpg'
    },
        {
        'id': 'twoOfSpades',
        'name': 'two',
        'value': 2,
        'suit': 'spades'
    },
        {
        'id': 'twoOfClubs',
        'name': 'two',
        'value': 2,
        'suit': 'clubs'
    },
        {
        'id': 'twoOfHearts',
        'name': 'two',
        'value': 2,
        'suit': 'hearts'
    },
        {
        'id': 'twoOfDiamonds',
        'name': 'two',
        'value': 2,
        'suit': 'diamonds'
    },
        {
        'id': 'threeOfSpades',
        'name': 'three',
        'value': 3,
        'suit': 'spades'
    },
        {
        'id': 'threeOfClubs',
        'name': 'three',
        'value': 3,
        'suit': 'clubs'
    },
        {
        'id': 'threeOfHearts',
        'name': 'three',
        'value': 3,
        'suit': 'hearts'
    },
        {
        'id': 'threeOfDiamonds',
        'name': 'three',
        'value': 3,
        'suit': 'diamonds'
    },
        {
        'id': 'fourOfSpades',
        'name': 'four',
        'value': 4,
        'suit': 'spades'
    },
        {
        'id': 'fourOfClubs',
        'name': 'four',
        'value': 4,
        'suit': 'clubs'
    },
        {
        'id': 'fourOfHearts',
        'name': 'four',
        'value': 4,
        'suit': 'hearts'
    },
        {
        'id': 'fourOfDiamonds',
        'name': 'four',
        'value': 4,
        'suit': 'diamonds'
    },
        {
        'id': 'fiveOfSpades',
        'name': 'five',
        'value': 5,
        'suit': 'spades'
    },
        {
        'id': 'fiveOfClubs',
        'name': 'five',
        'value': 5,
        'suit': 'clubs'
    },
        {
        'id': 'fiveOfHearts',
        'name': 'five',
        'value': 5,
        'suit': 'hearts'
    },
        {
        'id': 'fiveOfDiamonds',
        'name': 'five',
        'value': 5,
        'suit': 'diamonds'
    },
        {
        'id': 'sixOfSpades',
        'name': 'six',
        'value': 6,
        'suit': 'spades'
    },
        {
        'id': 'sixOfClubs',
        'name': 'six',
        'value': 6,
        'suit': 'clubs'
    },
        {
        'id': 'sixOfHearts',
        'name': 'six',
        'value': 6,
        'suit': 'hearts'
    },
        {
        'id': 'sixOfDiamonds',
        'name': 'six',
        'value': 6,
        'suit': 'diamonds'
    },
        {
        'id': 'sevenOfSpades',
        'name': 'seven',
        'value': 7,
        'suit': 'spades'
    },
        {
        'id': 'sevenOfClubs',
        'name': 'seven',
        'value': 7,
        'suit': 'clubs'
    },
        {
        'id': 'sevenOfHearts',
        'name': 'seven',
        'value': 7,
        'suit': 'hearts'
    },
        {
        'id': 'sevenOfDiamonds',
        'name': 'seven',
        'value': 7,
        'suit': 'diamonds'
    },
        {
        'id': 'eightOfSpades',
        'name': 'eight',
        'value': 8,
        'suit': 'spades'
    },
        {
        'id': 'eightOfClubs',
        'name': 'eight',
        'value': 8,
        'suit': 'clubs'
    },
        {
        'id': 'eightOfHearts',
        'name': 'eight',
        'value': 8,
        'suit': 'hearts'
    },
        {
        'id': 'eightOfDiamonds',
        'name': 'eight',
        'value': 8,
        'suit': 'diamonds'
    },
        {
        'id': 'nineOfSpades',
        'name': 'nine',
        'value': 9,
        'suit': 'spades'
    },
        {
        'id': 'nineOfClubs',
        'name': 'nine',
        'value': 9,
        'suit': 'clubs'
    },
        {
        'id': 'nineOfHearts',
        'name': 'nine',
        'value': 9,
        'suit': 'hearts'
    },
        {
        'id': 'nineOfDiamonds',
        'name': 'nine',
        'value': 9,
        'suit': 'diamonds'
    },
        {
        'id': 'tenOfSpades',
        'name': 'ten',
        'value': 10,
        'suit': 'spades'
    },
        {
        'id': 'tenOfClubs',
        'name': 'ten',
        'value': 10,
        'suit': 'clubs'
    },
        {
        'id': 'tenOfHearts',
        'name': 'ten',
        'value': 10,
        'suit': 'hearts'
    },
        {
        'id': 'tenOfDiamonds',
        'name': 'ten',
        'value': 10,
        'suit': 'diamonds'
    },
        {
        'id': 'jackOfSpades',
        'name': 'jack',
        'value': 10,
        'suit': 'spades'
    },
        {
        'id': 'jackOfClubs',
        'name': 'jack',
        'value': 10,
        'suit': 'clubs'
    },
        {
        'id': 'jackOfHearts',
        'name': 'jack',
        'value': 10,
        'suit': 'hearts'
    },
        {
        'id': 'jackOfDiamonds',
        'name': 'jack',
        'value': 10,
        'suit': 'diamonds'
    },
        {
        'id': 'queenOfSpades',
        'name': 'queen',
        'value': 10,
        'suit': 'spades'
    },
        {
        'id': 'queenOfClubs',
        'name': 'queen',
        'value': 10,
        'suit': 'clubs'
    },
        {
        'id': 'queenOfHearts',
        'name': 'queen',
        'value': 10,
        'suit': 'hearts'
    },
        {
        'id': 'queensOfDiamonds',
        'name': 'queen',
        'value': 10,
        'suit': 'diamonds'
    },
        {
        'id': 'kingOfSpades',
        'name': 'king',
        'value': 10,
        'suit': 'spades'
    },
        {
        'id': 'kingOfClubs',
        'name': 'king',
        'value': 10,
        'suit': 'clubs'
    },
        {
        'id': 'kingOfHearts',
        'name': 'king',
        'value': 10,
        'suit': 'hearts'
    },
        {
        'id': 'kingOfDiamonds',
        'name': 'king',
        'value': 10,
        'suit': 'diamonds'
    },
]
app.use('/deck_images', express.static('public/deck_images'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
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

app.listen(PORT, () => {
    console.log('server running');
})