let cardArr = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'burger',
        img: 'images/burger.png'
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
        name: 'milktea',
        img: 'images/milktea.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'peach',
        img: 'images/peach.png'
    },
    {
        name: 'meat',
        img: 'images/meat.png'
    },
    {
        name: 'soup',
        img: 'images/soup.png'
    },
    {
        name: 'cake',
        img: 'images/cake.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'burger',
        img: 'images/burger.png'
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
        name: 'milktea',
        img: 'images/milktea.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'peach',
        img: 'images/peach.png'
    },
    {
        name: 'meat',
        img: 'images/meat.png'
    },
    {
        name: 'soup',
        img: 'images/soup.png'
    },
    {
        name: 'cake',
        img: 'images/cake.png'
    },
]

cardArr.sort(() => 0.5 - Math.random())
let gridDisplay = document.querySelector('#gird')
let resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardChosenId = []
let cardWon = []


function createBoard() {
    for (let i = 0; i < cardArr.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    let cards = document.querySelectorAll('img')
    let optionOneId = cardChosenId[0]
    let optionTwoId = cardChosenId[1]
    console.log(cards)

    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }
    if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }
    resultDisplay.textContent = cardWon.length
    cardsChosen = []
    cardChosenId = []
    if (cardWon.length === (cardArr.length / 2)) {
        alert('Ahihi!!! Thắng rồi kìa')
    }
}

function flipCard() {
    console.log(cardArr)
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArr[cardId].name)
    cardChosenId.push(cardId)
    console.log(cardsChosen)
    console.log(cardChosenId)
    this.setAttribute('src', cardArr[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 100)
    }
}

