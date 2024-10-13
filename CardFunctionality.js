let turn = 0;

const stateOfGame = {drawCard: false, discardCard: false, opponentTurn: false, endGame: false};
let drawnCard;
let clickedCard;
const backOfCard = {id: 'B', imagePath: 'cards/card_back.png'}
const cardsData = [

    {id: 'CA', value: 1, inUse: false, imagePath: 'cards/1_club.png'},
    {id: 'C2', value: 2, inUse: false, imagePath: 'cards/2_club.png'},
    {id: 'C3', value: 3, inUse: false, imagePath: 'cards/3_club.png'},
    {id: 'C4', value: 4, inUse: false, imagePath: 'cards/4_club.png'},
    {id: 'C5', value: 5, inUse: false, imagePath: 'cards/5_club.png'},
    {id: 'C6', value: 6, inUse: false, imagePath: 'cards/6_club.png'},
    {id: 'C7', value: 7, inUse: false, imagePath: 'cards/7_club.png'},
    {id: 'C8', value: 8, inUse: false, imagePath: 'cards/8_club.png'},
    {id: 'C9', value: 9, inUse: false, imagePath: 'cards/9_club.png'},
    {id: 'C10', value: 10, inUse: false, imagePath: 'cards/10_club.png'},
    {id: 'CJ', value: 11, inUse: false, imagePath: 'cards/11_club.png'},
    {id: 'CQ', value: 12, inUse: false, imagePath: 'cards/12_club.png'},
    {id: 'CK', value: 13, inUse: false, imagePath: 'cards/13_club.png'},

    {id: 'DA', value: 1, inUse: false, imagePath: 'cards/1_diamond.png'},
    {id: 'D2', value: 2, inUse: false, imagePath: 'cards/2_diamond.png'},
    {id: 'D3', value: 3, inUse: false, imagePath: 'cards/3_diamond.png'},
    {id: 'D4', value: 4, inUse: false, imagePath: 'cards/4_diamond.png'},
    {id: 'D5', value: 5, inUse: false, imagePath: 'cards/5_diamond.png'},
    {id: 'D6', value: 6, inUse: false, imagePath: 'cards/6_diamond.png'},
    {id: 'D7', value: 7, inUse: false, imagePath: 'cards/7_diamond.png'},
    {id: 'D8', value: 8, inUse: false, imagePath: 'cards/8_diamond.png'},
    {id: 'D9', value: 9, inUse: false, imagePath: 'cards/9_diamond.png'},
    {id: 'D10', value: 10, inUse: false, imagePath: 'cards/10_diamond.png'},
    {id: 'DJ', value: 11, inUse: false, imagePath: 'cards/11_diamond.png'},
    {id: 'DQ', value: 12, inUse: false, imagePath: 'cards/12_diamond.png'},
    {id: 'DK', value: 13, inUse: false, imagePath: 'cards/13_diamond.png'},

    {id: 'HA', value: 1, inUse: false, imagePath: 'cards/1_heart.png'},
    {id: 'H2', value: 2, inUse: false, imagePath: 'cards/2_heart.png'},
    {id: 'H3', value: 3, inUse: false, imagePath: 'cards/3_heart.png'},
    {id: 'H4', value: 4, inUse: false, imagePath: 'cards/4_heart.png'},
    {id: 'H5', value: 5, inUse: false, imagePath: 'cards/5_heart.png'},
    {id: 'H6', value: 6, inUse: false, imagePath: 'cards/6_heart.png'},
    {id: 'H7', value: 7, inUse: false, imagePath: 'cards/7_heart.png'},
    {id: 'H8', value: 8, inUse: false, imagePath: 'cards/8_heart.png'},
    {id: 'H9', value: 9, inUse: false, imagePath: 'cards/9_heart.png'},
    {id: 'H10', value: 10, inUse: false, imagePath: 'cards/10_heart.png'},
    {id: 'HJ', value: 11, inUse: false, imagePath: 'cards/11_heart.png'},
    {id: 'HQ', value: 12, inUse: false, imagePath: 'cards/12_heart.png'},
    {id: 'HK', value: 13, inUse: false, imagePath: 'cards/13_heart.png'},

    {id: 'SA', value: 1, inUse: false, imagePath: 'cards/1_spade.png'},
    {id: 'S2', value: 2, inUse: false, imagePath: 'cards/2_spade.png'},
    {id: 'S3', value: 3, inUse: false, imagePath: 'cards/3_spade.png'},
    {id: 'S4', value: 4, inUse: false, imagePath: 'cards/4_spade.png'},
    {id: 'S5', value: 5, inUse: false, imagePath: 'cards/5_spade.png'},
    {id: 'S6', value: 6, inUse: false, imagePath: 'cards/6_spade.png'},
    {id: 'S7', value: 7, inUse: false, imagePath: 'cards/7_spade.png'},
    {id: 'S8', value: 8, inUse: false, imagePath: 'cards/8_spade.png'},
    {id: 'S9', value: 9, inUse: false, imagePath: 'cards/9_spade.png'},
    {id: 'S10', value: 10, inUse: false, imagePath: 'cards/10_spade.png'},
    {id: 'SJ', value: 11, inUse: false, imagePath: 'cards/11_spade.png'},
    {id: 'SQ', value: 12, inUse: false, imagePath: 'cards/12_spade.png'},
    {id: 'SK', value: 13, inUse: false, imagePath: 'cards/13_spade.png'}
]

let usersCards = [];
let computersCards = [];

function randomCard() {
    let dealtCard;
    while (true) {

        let randomCard = Math.floor(Math.random() * 52);

        dealtCard = cardsData[randomCard];

        if (dealtCard.inUse === false) {
            dealtCard.inUse = true;
            break;
        }

    }
    //  console.table(cardsData)
    return dealtCard;
}

function dealCards() {
    for (let i = 0; i < 14; i++) {

        let dealtCard = randomCard();
        if (i % 2 === 0) {
            usersCards.push(dealtCard);
        } else {
            computersCards.push(dealtCard);
        }
    }
    sortDecks();
}

function clearVisual() {
    usersCards = [];
    computersCards = [];

    const opponentSection = document.getElementById('opponentSection');
    const deckSection = document.getElementById('deckSection');
    const userSection = document.getElementById('userSection');

    // for(let child of opponentSection.children){
    //     opponentSection.removeChild(child);
    //     child.classList.remove('displayedCard');
    // }
    // for(let child of deckSection.children){
    //     deckSection.removeChild(child);
    //     child.classList.remove('displayedCard');
    // }
    // for(let child of userSection.children){
    //     userSection.removeChild(child);
    //     child.classList.remove('displayedCard');
    // }

//chatgpt code
    while (opponentSection.firstChild) {
        opponentSection.removeChild(opponentSection.firstChild);
    }
    while (deckSection.firstChild) {
        deckSection.removeChild(deckSection.firstChild);
    }
    while (userSection.firstChild) {
        userSection.removeChild(userSection.firstChild);
    }

}

function sortDecks() {
    usersCards.sort((a, b) => a.value - b.value);
    computersCards.sort((a, b) => a.value - b.value);
}

function displayUserComputerCards() {
    const userSection = document.getElementById('userSection');
    displayUserCards(userSection);

    const computerSection = document.getElementById('opponentSection');
    displayComputerCards(computerSection);

    stateOfGame.drawCard = true;
}

function displayUserCards(userSection) {
    for (let i = 0; i < usersCards.length; i++) {
        const currentCard = usersCards[i];
        const cardImage = document.createElement("img");
        cardImage.src = currentCard.imagePath;
        cardImage.alt = currentCard.id;
        cardImage.classList.add('displayedCards');
        cardImage.addEventListener("click", function () {
            cardClick(cardImage);
        });
        userSection.append(cardImage);
    }
}

function displayComputerCards(computerSection) {
    for (let i = 0; i < computersCards.length; i++) {
        const currentCard = computersCards[i];
        const cardImage = document.createElement("img");
        cardImage.src = currentCard.imagePath;
        cardImage.alt = currentCard.id;
        cardImage.classList.add('displayedCards');
        computerSection.append(cardImage);
    }
}

function displayDeckOfCards() {
    const deckSection = document.getElementById('deckSection');
    const cardImage = document.createElement("img");
    cardImage.src = backOfCard.imagePath;
    cardImage.alt = backOfCard.id;
    cardImage.classList.add('displayedCards');
    deckSection.append(cardImage);

    cardImage.addEventListener("click", function () {
        deckClick();
    });
}

function deckClick() {
    turn++;
    if (stateOfGame.drawCard === false) {
        return;
    }
    const deckSection = document.getElementById('deckSection');
    const cardImage = document.createElement("img");


    //Removes all the drawn cards
    cardImage.src = backOfCard.imagePath;
    for (let element of deckSection.children) {
        if (element.id === cardImage.id) {
            continue;
        }
        deckSection.removeChild(element);
    }

    const card = randomCard();
    drawnCard = card;
    cardImage.src = card.imagePath;
    cardImage.alt = card.id;
    cardImage.addEventListener("click", function () {
        cardClick(cardImage);
    });
    cardImage.classList.add('displayedCards');
    cardImage.classList.add('drawnCard');
    deckSection.append(cardImage);

    clearStates();
    stateOfGame.discardCard = true;
    console.log(stateOfGame);

}


function cardClick(cardImage) {

    const allDisplayedCards = document.querySelectorAll('.displayedCards');
    for (let card of allDisplayedCards) {
        card.classList.remove('clickedCard');
    }
    cardImage.classList.add('clickedCard');
}

function setupButtons() {
    const discardButton = document.getElementById('discardButton');
    discardButton.addEventListener("click", function () {
        discardSelectedCard();
    })

    const rulesButton = document.getElementById('rulesButton');
    rulesButton.addEventListener("click", function () {
        showRules();
    })
}

function discardSelectedCard() {
    const userSection = document.getElementById('userSection');
    const deckSection = document.getElementById('deckSection');

    while (true) {

        if (stateOfGame.discardCard === false) {
            console.log("State of game is not in discard card yet");
            return;
        }
        const selectedCard = document.querySelector('.clickedCard');
        const deckCard = document.querySelector('.drawnCard');
        if (selectedCard === undefined || selectedCard === null) {
            console.log("no card clicked");
            return;
        }

        if (selectedCard.src !== deckCard.src) {
            selectedCard.classList.remove("displayedCards");
            userSection.removeChild(selectedCard);

            let userCardIndex = 0;
            for (let card of usersCards) {
                console.log("card");
                console.log(card);
                console.log("selected card")
                console.log(selectedCard)
                if (card.id === selectedCard.alt) {
                    console.log("in if")
                    usersCards[userCardIndex] = drawnCard;
                    break;
                }
                userCardIndex++;
            }
            userSection.append(deckCard);
            break;
        }
        if (selectedCard.src === deckCard.src) {
            deckCard.classList.remove("drawnCard");
            deckSection.removeChild(deckCard);
            break;
        }
    }
    sortDecks();
    clearStates();
    stateOfGame.opponentTurn = true;
    document.getElementById('opponentSection').classList.add('activePlayer')
    document.getElementById('userSection').classList.remove('activePlayer');
    opponentsTurn();
}

function opponentsTurn() {
    if (stateOfGame.opponentTurn === true) {


        const deckSection = document.getElementById('deckSection');

        const cardImage = document.createElement("img");
        const drawnCard = randomCard();
        setTimeout(function () {

            cardImage.src = backOfCard.imagePath;
            cardImage.alt = drawnCard.id;
            cardImage.classList.add('displayedCards');
            deckSection.append(cardImage);

            setTimeout(function () {
                deckSection.removeChild(cardImage);


                handleOpponentCardReplace(drawnCard, deckSection);

                document.getElementById('opponentSection').classList.remove('activePlayer')
                document.getElementById('userSection').classList.add('activePlayer');


                if (turn > 5) {
                    let userScore = calculateUserScore();
                    let opponentScore = calculateOpponentScore();

                    let winner;
                    if (userScore === opponentScore) {
                        winner = "You drew!";
                    } else if (userScore > opponentScore) {
                        winner = "You won!";
                    } else {
                        winner = "Computer won!";
                    }
                    document.querySelector('.endGameMessage').innerText = "You scored " + userScore +
                        ".\nThe computer scored " + opponentScore +
                        ".\n " + winner +
                        "\nPress anywhere to continue.";
                    const endGame = document.getElementById("endGame");
                    endGame.style.display = "block";
                    const window = document.querySelector('.grid-container');
                    window.addEventListener('click', function (event) {
                        if (event.target === endGame) {

                            location.reload();
                        }
                    });
                }


            }, 2000);
            clearStates();
            stateOfGame.drawCard = true;


        }, 2000);


    }
}

function calculateUserScore() {
    let score = 0;
    for (let i = 0; i < 7; i++) {
        console.log(usersCards[i])
        score += usersCards[i].value;

    }
    console.log(score);
    return score;
}

function calculateOpponentScore() {
    console.log("COMPUTER LIST")
    let score = 0;
    for (let i = 0; i < 7; i++) {
        console.log(computersCards[i])
        score += computersCards[i].value;

    }
    console.log(score);
    return score;
}

function handleOpponentCardReplace(drawnCard, deckSection) {

    let smallestCard = computersCards[0];
    let indexOfCard = 0;
    //Grabs the smallest card in the deck to swap with the drawn card
    for (let i = 0; i < computersCards.length; i++) {
        let currentCard = computersCards[i];
        if (smallestCard.value > currentCard.value) {
            smallestCard = computersCards[i];
            indexOfCard = i;
        }
    }

    computersCards[indexOfCard] = drawnCard;


    const opponentSection = document.getElementById('opponentSection');

    const allDisplayedCards = document.querySelectorAll('.displayedCards');
    for (let card of allDisplayedCards) {
        if (card.alt === smallestCard.id) {

            card.classList.remove('displayedCards');
            opponentSection.removeChild(card);
            break;
        }
    }

    const cardImage = document.createElement("img");
    cardImage.src = drawnCard.imagePath;
    cardImage.alt = drawnCard.id;
    cardImage.classList.add('displayedCards');
    opponentSection.append(cardImage);

}

function showRules() {
    const ruleText = document.querySelector('.rules');
    if (ruleText.style.display === "block") {
        ruleText.style.display = "none";
    } else {
        ruleText.style.display = "block";
    }
}

function clearStates() {
    stateOfGame.drawCard = false;
    stateOfGame.discardCard = false;
    stateOfGame.opponentTurn = false;
    stateOfGame.endGame = false;
}


function startGame() {
    clearVisual();
    setupButtons()
    dealCards();
    displayUserComputerCards();
    displayDeckOfCards();
}

startGame();