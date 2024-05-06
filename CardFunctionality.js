const arrayOfCards = [
    "CA", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "CJ", "CQ", "CK",
    "DA", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "DJ", "DQ", "DK",
    "HA", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "HJ", "HQ", "HK",
    "SA", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "SJ", "SQ", "SK",
];
const backOfCard = {id: 1, value: "back", imagePath: 'cards/card_back.png'}

const cardsData = {

    clubs: [
        //Club images
        {id: 1, inUse: false,value: 'A', imagePath: 'cards/1_club.png'},
        {id: 2, inUse: false,value: '2', imagePath: 'cards/2_club.png'},
        {id: 3, inUse: false,value: '3', imagePath: 'cards/3_club.png'},
        {id: 4, inUse: false,value: '4', imagePath: 'cards/4_club.png'},
        {id: 5, inUse: false,value: '5', imagePath: 'cards/5_club.png'},
        {id: 6, inUse: false,value: '6', imagePath: 'cards/6_club.png'},
        {id: 7, inUse: false,value: '7', imagePath: 'cards/7_club.png'},
        {id: 8, inUse: false,value: '8', imagePath: 'cards/8_club.png'},
        {id: 9, inUse: false,value: '9', imagePath: 'cards/9_club.png'},
        {id: 10, inUse: false,value: '10', imagePath: 'cards/10_club.png'},
        {id: 11, inUse: false,value: 'J', imagePath: 'cards/11_club.png'},
        {id: 12, inUse: false,value: 'Q', imagePath: 'cards/12_club.png'},
        {id: 13, inUse: false,value: 'K', imagePath: 'cards/13_club.png'},
    ],
    diamonds: [
        //Diamond images
        {id: 14, inUse: false,value: 'A', imagePath: 'cards/1_diamond.png'},
        {id: 15, inUse: false,value: '2', imagePath: 'cards/2_diamond.png'},
        {id: 16, inUse: false,value: '3', imagePath: 'cards/3_diamond.png'},
        {id: 17, inUse: false,value: '4', imagePath: 'cards/4_diamond.png'},
        {id: 18, inUse: false,value: '5', imagePath: 'cards/5_diamond.png'},
        {id: 19, inUse: false,value: '6', imagePath: 'cards/6_diamond.png'},
        {id: 20, inUse: false,value: '7', imagePath: 'cards/7_diamond.png'},
        {id: 21, inUse: false,value: '8', imagePath: 'cards/8_diamond.png'},
        {id: 22, inUse: false,value: '9', imagePath: 'cards/9_diamond.png'},
        {id: 23, inUse: false,value: '10', imagePath: 'cards/10_diamond.png'},
        {id: 24, inUse: false,value: 'J', imagePath: 'cards/11_diamond.png'},
        {id: 25, inUse: false,value: 'Q', imagePath: 'cards/12_diamond.png'},
        {id: 26, inUse: false,value: 'K', imagePath: 'cards/13_diamond.png'},
    ],
    hearts: [
        //Heart images
        {id: 27, inUse: false,value: 'A', imagePath: 'cards/1_heart.png'},
        {id: 28, inUse: false,value: '2', imagePath: 'cards/2_heart.png'},
        {id: 29, inUse: false,value: '3', imagePath: 'cards/3_heart.png'},
        {id: 30, inUse: false,value: '4', imagePath: 'cards/4_heart.png'},
        {id: 31, inUse: false,value: '5', imagePath: 'cards/5_heart.png'},
        {id: 32, inUse: false,value: '6', imagePath: 'cards/6_heart.png'},
        {id: 33, inUse: false,value: '7', imagePath: 'cards/7_heart.png'},
        {id: 34, inUse: false,value: '8', imagePath: 'cards/8_heart.png'},
        {id: 35, inUse: false,value: '9', imagePath: 'cards/9_heart.png'},
        {id: 36, inUse: false,value: '10', imagePath: 'cards/10_heart.png'},
        {id: 37, inUse: false,value: 'J', imagePath: 'cards/11_heart.png'},
        {id: 38, inUse: false,value: 'Q', imagePath: 'cards/12_heart.png'},
        {id: 39, inUse: false,value: 'K', imagePath: 'cards/13_heart.png'},
    ],
    spades: [
        //Spade images.
        {id: 40, inUse: false,value: 'A', imagePath: 'cards/1_spade.png'},
        {id: 41, inUse: false,value: '2', imagePath: 'cards/2_spade.png'},
        {id: 42, inUse: false,value: '3', imagePath: 'cards/3_spade.png'},
        {id: 43, inUse: false,value: '4', imagePath: 'cards/4_spade.png'},
        {id: 44, inUse: false,value: '5', imagePath: 'cards/5_spade.png'},
        {id: 45, inUse: false,value: '6', imagePath: 'cards/6_spade.png'},
        {id: 46, inUse: false,value: '7', imagePath: 'cards/7_spade.png'},
        {id: 47, inUse: false,value: '8', imagePath: 'cards/8_spade.png'},
        {id: 48, inUse: false,value: '9', imagePath: 'cards/9_spade.png'},
        {id: 49, inUse: false,value: '10', imagePath: 'cards/10_spade.png'},
        {id: 50, inUse: false,value: 'J', imagePath: 'cards/11_spade.png'},
        {id: 51, inUse: false,value: 'Q', imagePath: 'cards/12_spade.png'},
        {id: 52, inUse: false,value: 'K', imagePath: 'cards/13_spade.png'}
    ]
}

// function shuffleArray(array) {
//     //Loop through the array starting from the last element
//     for (let i = 52; i > 0; i--) {
//         //Generate a random index between 0 and i (inclusive)
//         const j = Math.floor(Math.random() * (i + 1));
//         //Swap the current element with a randomly selected element
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }


let usersCards = [];
let computersCards = [];

function dealCards() {

    for (let i = 0; i < 14; i++) {
        let suits = ["clubs", "diamonds", "hearts", "spades"]
        let randomSuit = suits[Math.floor(Math.random() * 4)];
        let randomCard = Math.floor(Math.random() * 13);// + 1;

        let dealtCard = cardsData[randomSuit].at(randomCard);

        if(dealtCard.inUse === false) {
            dealtCard.inUse = true;
            if (i % 2 === 0) {
                usersCards.push(dealtCard);
            } else {
                computersCards.push(dealtCard);
            }
            console.log("Card " + i + ", Suit: " + randomSuit + ", Card: " + dealtCard.id);
        }else{
            i--;
        }
    }
}

function displayDeck() {
    const deckSection = document.getElementById('deckSection');
    const card = backOfCard;
    const cardImage = document.createElement("img");
    cardImage.src = card.imagePath;
    cardImage.classList.add("card");
    cardImage.alt = card.value;
    deckSection.appendChild(cardImage);

}

function displayOpponentsCards() {
    const opponentSections = document.getElementById("opponentSection");
    for (let i = 0; i < computersCards.length; i++) {
        const card = computersCards[i];
        const cardImage = document.createElement("img");
        try {
            cardImage.src = card.imagePath;
       }catch (e) {
       console.log(card.id);
       }
        cardImage.classList.add("card");
        cardImage.alt = card.value;
        opponentSections.appendChild(cardImage);
    }
}

function displayUsersCards() {
    const usersSection = document.getElementById("userSection");
    for (let i = 0; i < usersCards.length; i++) {
        const card = usersCards[i];
        const cardImage = document.createElement("img");
        cardImage.src = card.imagePath;
        cardImage.classList.add("card");
        cardImage.alt = card.value;
        cardImage.addEventListener("click", function() {
            cardClick(cardImage, card);
        });
        usersSection.appendChild(cardImage);
    }
}
function cardClick(cardImage, card) {
    console.log("Clicked on card:", card);
}


// Call the displayCards function to display the card images
//shuffleArray();
displayDeck();
dealCards();
displayUsersCards();
displayOpponentsCards();