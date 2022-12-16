const cardObjectDefinitions = [
  { id: 1, imagePath: "/images/card-KingHearts.png" },
  { id: 2, imagePath: "/images/card-JackClubs.png" },
  { id: 3, imagePath: "/images/card-QueenDiamonds.png" },
  { id: 4, imagePath: "/images/card-AceSpades.png" },
];

const cardBackImgPath = "/images/card-back-Blue.png";
const cardContainerElem = document.querySelector(".card-container");

let cards = [];
const playGameButtonElem = document.getElementById("playGame");

const collapsedGridAreaTemplate = '"a a" "a a"';
const cardCollectionCellClass = '.card-pos-a';



loadGame();

function loadGame() {
  createCards();

  cards = document.querySelectorAll(".card");
  playGameButtonElem.addEventListener("click", () => startGame());
}

function startGame() {
  initializeNewGame();
  startRound();
}
function initializeNewGame() {
    
}
function startRound() {
  initializeNewRound();
  collectCards();
  flipCards(true);
}
function initializeNewRound() {

}
function collectCards(){
  transformGridArea(collapsedGridAreaTemplate);
}

function transformGridArea(areas){
  cardContainerElem.style.gridTemplateAreas = areas;
    addCardsToGridAreaCell(cardCollectionCellClass);
  
}

function addCardsToGridAreaCell(cellPositionClassName){
    const cellPositionElem = document.querySelector(cellPositionClassName);

    cards.forEach((card, index) => {
        addChildElement(cellPositionElem, card)
    })
}

function flipCard(card, flipToBack) {
  const innerCardElem = card.firstChild;

  if(flipToBack && !innerCardElem.classList.contains('flip-it')) {
    innerCardElem.classList.add('flip-it');
  } else if(innerCardElem.classList.contains('flip-it')) {
    innerCardElem.classList.remove('flip-it');
  };
}

function flipCards(flipToBack) {
    cards.forEach((card, index) => {
        setTimeout(() => {
            flipCard(card, flipToBack)
        }, index * 100)
    })
}

function createCards() {
  cardObjectDefinitions.forEach((cardItem) => {
    createCard(cardItem);
  });
}

function shuffleCards(){
    
}


function createCard(cardItem) {
  // create div elements that make up a card
  const cardElem = createElement("div");
  const cardInnerElem = createElement("div");
  const cardFrontElem = createElement("div");
  const cardBackElem = createElement("div");

  const cardFrontImg = createElement("img");
  const cardBackImg = createElement("img");

  // add class and id to card element

  addClassToElement(cardElem, "card");
  addIdToElement(cardElem, cardItem.id);

  //   add class to inner card element

  addClassToElement(cardInnerElem, "card-inner");

  //  add class to front card
  addClassToElement(cardFrontElem, "card-front");

  //   add class to backside card
  addClassToElement(cardBackElem, "card-back");

  //   add src atr and appropriate value to img element - front of card
  addSrcToImageElem(cardFrontImg, cardItem.imagePath);

  //   add src atr and appropriate value to img element - back of card
  addSrcToImageElem(cardBackImg, cardBackImgPath);

  //   assign class to front image element of front of card
  addClassToElement(cardFrontImg, "card-img");
  
  //   assign class to back image element of back of card
  addClassToElement(cardBackImg, "card-img");

  //   add back image image element as child  element of back card element
  addChildElement(cardBackElem, cardBackImg);

  //   add front image image element as child  element of front card element
  addChildElement(cardFrontElem, cardFrontImg);

  //   add front card element as child element to innercard element
  addChildElement(cardInnerElem, cardFrontElem);
  
  //   add back card element as child element to innercard element
  addChildElement(cardInnerElem, cardBackElem);

  //   add inner card element as child to card element
  addChildElement(cardElem, cardInnerElem);

  //   add card element as child element to appropriate grid cell
  addCardToGridCell(cardElem);
}

function createElement(elemTypes) {
  return document.createElement(elemTypes);
}

function addClassToElement(elem, className) {
  elem.classList.add(className);
}

function addIdToElement(elem, id) {
  elem.id = id;
}
function addSrcToImageElem(imgElem, src) {
  imgElem.src = src;
}
function addChildElement(parentElem, childElem) {
  parentElem.appendChild(childElem);
}
function addCardToGridCell(card) {
  const cardPositionClassName = mapCardIdToGridCell(card);

  const cardPosElement = document.querySelector(cardPositionClassName);

  addChildElement(cardPosElement, card);
}
function mapCardIdToGridCell(card) {
  if (card.id == 1) {
    return ".card-pos-a";
  } else if (card.id == 2) {
    return ".card-pos-b";
  } else if (card.id == 3) {
    return ".card-pos-c";
  } else if (card.id == 4) {
    return ".card-pos-d";
  }
}
