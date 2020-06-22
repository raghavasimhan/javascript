const cardArray = [
{
    name: 'fries',
    img: 'images/fries.png'
},
{
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
},
{
    name: 'hotdog',
    img: 'images/hotdog.png'
},
{
    name: 'ice-cream',
    img: 'images/ice-cream.png'
},
{
    name: 'pizza',
    img: 'images/pizza.png'
},
{
    name: 'hotdog',
    img: 'images/hotdog.png'
},
{
    name: 'milkshake',
    img: 'images/milkshake.png'
},
{
    name: 'fries',
    img: 'images/fries.png'
},
{
    name: 'pizza',
    img: 'images/pizza.png'
},
{
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
},
{
    name: 'ice-cream',
    img: 'images/ice-cream.png'
},
{
    name: 'milkshake',
    img: 'images/milkshake.png'
},
]

cardArray.sort(() => 0.5 - Math.random());
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');

function createGrid() {
    for(let i=0;i< cardArray.length;i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if(cardsChosen[0] === cardsChosen[1]) {
        alert('You Found A Match!!')
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('Sorry, Try Again')
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations';
    }
}

function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length == 2) {
        setTimeout(checkForMatch, 500);
    }
}
createGrid();


