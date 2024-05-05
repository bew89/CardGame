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
        {id: 1, value: 'A', imagePath: 'cards/1_club.png'},
        {id: 2, value: '2', imagePath: 'cards/2_club.png'},
        {id: 3, value: '3', imagePath: 'cards/3_club.png'},
        {id: 4, value: '4', imagePath: 'cards/4_club.png'},
        {id: 5, value: '5', imagePath: 'cards/5_club.png'},
        {id: 6, value: '6', imagePath: 'cards/6_club.png'},
        {id: 7, value: '7', imagePath: 'cards/7_club.png'},
        {id: 8, value: '8', imagePath: 'cards/8_club.png'},
        {id: 9, value: '9', imagePath: 'cards/9_club.png'},
        {id: 10, value: '10', imagePath: 'cards/10_club.png'},
        {id: 11, value: 'J', imagePath: 'cards/11_club.png'},
        {id: 12, value: 'Q', imagePath: 'cards/12_club.png'},
        {id: 13, value: 'K', imagePath: 'cards/13_club.png'},
    ],
    diamonds: [
        //Diamond images
        {id: 14, value: 'A', imagePath: 'cards/1_diamond.png'},
        {id: 15, value: '2', imagePath: 'cards/2_diamond.png'},
        {id: 16, value: '3', imagePath: 'cards/3_diamond.png'},
        {id: 17, value: '4', imagePath: 'cards/4_diamond.png'},
        {id: 18, value: '5', imagePath: 'cards/5_diamond.png'},
        {id: 19, value: '6', imagePath: 'cards/6_diamond.png'},
        {id: 20, value: '7', imagePath: 'cards/7_diamond.png'},
        {id: 21, value: '8', imagePath: 'cards/8_diamond.png'},
        {id: 22, value: '9', imagePath: 'cards/9_diamond.png'},
        {id: 23, value: '10', imagePath: 'cards/10_diamond.png'},
        {id: 24, value: 'J', imagePath: 'cards/11_diamond.png'},
        {id: 25, value: 'Q', imagePath: 'cards/12_diamond.png'},
        {id: 26, value: 'K', imagePath: 'cards/13_diamond.png'},
    ],
    hearts: [
        //Heart images
        {id: 27, value: 'A', imagePath: 'cards/1_heart.png'},
        {id: 28, value: '2', imagePath: 'cards/2_heart.png'},
        {id: 29, value: '3', imagePath: 'cards/3_heart.png'},
        {id: 30, value: '4', imagePath: 'cards/4_heart.png'},
        {id: 31, value: '5', imagePath: 'cards/5_heart.png'},
        {id: 32, value: '6', imagePath: 'cards/6_heart.png'},
        {id: 33, value: '7', imagePath: 'cards/7_heart.png'},
        {id: 34, value: '8', imagePath: 'cards/8_heart.png'},
        {id: 35, value: '9', imagePath: 'cards/9_heart.png'},
        {id: 36, value: '10', imagePath: 'cards/10_heart.png'},
        {id: 37, value: 'J', imagePath: 'cards/11_heart.png'},
        {id: 38, value: 'Q', imagePath: 'cards/12_heart.png'},
        {id: 39, value: 'K', imagePath: 'cards/13_heart.png'},
    ],
    spades: [
        //Spade images.
        {id: 40, value: 'A', imagePath: 'cards/1_spade.png'},
        {id: 41, value: '2', imagePath: 'cards/2_spade.png'},
        {id: 42, value: '3', imagePath: 'cards/3_spade.png'},
        {id: 43, value: '4', imagePath: 'cards/4_spade.png'},
        {id: 44, value: '5', imagePath: 'cards/5_spade.png'},
        {id: 45, value: '6', imagePath: 'cards/6_spade.png'},
        {id: 46, value: '7', imagePath: 'cards/7_spade.png'},
        {id: 47, value: '8', imagePath: 'cards/8_spade.png'},
        {id: 48, value: '9', imagePath: 'cards/9_spade.png'},
        {id: 49, value: '10', imagePath: 'cards/10_spade.png'},
        {id: 50, value: 'J', imagePath: 'cards/11_spade.png'},
        {id: 51, value: 'Q', imagePath: 'cards/12_spade.png'},
        {id: 52, value: 'K', imagePath: 'cards/13_spade.png'}
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
        let randomCard = Math.floor(Math.random() * 13) + 1;


        let dealtCard = cardsData[randomSuit].at(randomCard);

        if (i % 2 === 0) {
            usersCards.push(dealtCard);
        } else {
            computersCards.push(dealtCard);
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
        cardImage.src = card.imagePath;
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
        // Append the image element to the main section
        usersSection.appendChild(cardImage);
    }
}


// Call the displayCards function to display the card images
//shuffleArray();
displayDeck();
dealCards();
displayUsersCards();
displayOpponentsCards();