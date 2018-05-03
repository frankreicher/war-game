// Takes a style with pixels and returns a number
function pxToNum(str) {
    str = str.split('');
    str.splice(str.length - 2, 2);
    return Number(str.join(''));
}


window.addEventListener('load', function () {

    // Correctly align cards.
    var opponentHand = document.querySelector('#opponent-wrapper');
    var playerHand = document.querySelector('#player-wrapper');

    var opponentCard = document.querySelector('#opponent-card');
    var playerCard = document.querySelector('#player-card');
    
    cardMargin = pxToNum(window.getComputedStyle(opponentCard).marginLeft);

    opponentHand.style.left = ((window.innerWidth - opponentHand.offsetWidth - cardMargin) / 2) - ((opponentHand.offsetWidth - cardMargin) / 4) + 'px';

    playerHand.style.right = ((window.innerWidth - playerHand.offsetWidth - cardMargin) / 2) - ((playerHand.offsetWidth - cardMargin) / 4) + 'px';

});
