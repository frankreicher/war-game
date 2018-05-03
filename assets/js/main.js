// Takes a style with pixels and returns a number
function pxToNum(str) {
    str = str.split('');
    str.splice(str.length - 2, 2);
    return Number(str.join(''));
}

// Align cards properly
function alignCards() {
    var opponentHand = document.querySelector('#opponent-wrapper');
    var playerHand = document.querySelector('#player-wrapper');

    var opponentCard = document.querySelector('#opponent-card');
    var playerCard = document.querySelector('#player-card');

    cardMargin = pxToNum(window.getComputedStyle(opponentCard).marginLeft);

    opponentHand.style.left = ((window.innerWidth - opponentHand.offsetWidth - cardMargin) / 2) - ((opponentHand.offsetWidth - cardMargin) / 4) + 'px';

    playerHand.style.right = ((window.innerWidth - playerHand.offsetWidth - cardMargin) / 2) - ((playerHand.offsetWidth - cardMargin) / 4) + 'px';
}

// Generate a deck(s) of 52 cards
function generateDeck(numOfDecks) {

    var deck = [];
    var suits = ['spades', 'hearts', 'clubs', 'diamonds'];

    for (var i = 0; i < suits.length; i++) {
        for (var j = 1; j <= 13; j++) {

            var num;
            if (j == 1) {
                num = 'ace';
            } else if (j == 11) {
                num = 'jack';
            } else if (j == 12) {
                num = 'queen';
            } else if (j == 13) {
                num = 'king';
            } else {
                num = j;
            }

            deck.push(num + '_of_' + suits[i]);

        }
    }

    return deck;

}

// Shuffle an array
function shuffle(arr) {

    var newArr = [];
    while (arr.length > 0) {
        var rand = Math.floor(Math.random() * arr.length);
        newArr.push(arr[rand]);
        arr.splice(rand,1);
    }

    return newArr;
}

// Distribute cards
function dealCards(deck) {
    var playerDeck = [];
    var opponentDeck = [];

    for (var i = 0; i < deck.length; i++) {
        if (i % 2 == 0) {
            playerDeck.push(deck[i]);
        } else {
            opponentDeck.push(deck[i]);
        }
    }

    // Push array to holder elements on page
    document.querySelector('#opponent-cards').innerHTML = opponentDeck.join(' ');
    document.querySelector('#player-cards').innerHTML = playerDeck.join(' ');

    // Update card images
    displayCard('opponent', opponentDeck[0]);
    displayCard('player', playerDeck[0]);

}

// Displays selected card
function displayCard(char, card) {
    document.querySelector('#' + char + '-card').src = './assets/img/cards/' + card + '.png';
}

window.addEventListener('load', function () {

    // Correctly align cards.
    alignCards();

    // Generate cards
    var deck = generateDeck();

    // Shuffle deck
    deck = shuffle(deck);

    // Deal cards
    dealCards(deck);

});
