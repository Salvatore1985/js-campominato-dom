/**
 * Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
 */
//*RECUPERO L'ELEMENTO DAL DOM
const levelElement = document.getElementById("level");
const btnLevelElement = document.getElementById("btn-level");
const gridElement = document.getElementById("grid");


//*LEGO UN EVENTO AL CLICK DEL BTN-LEVEL

btnLevelElement.addEventListener("click", function () {
    /* Resetto l'HTML  */
    gridElement.innerHTML = "";
    selectValue(levelElement);
    console.log(selectValue(levelElement));

    let level = 100;
    for (let i = 1; i <= level; i++) {
        const currentSquare = createGridSquare();
        if (selectValue(levelElement) === "level-medium") {
            level = 81;
            currentSquare.classList.add("medium");

        } else if (selectValue(levelElement) === "level-hard") {
            level = 49;
            currentSquare.classList.add("hard");
        }

        currentSquare.addEventListener("click", function () {
            currentSquare.classList.add("active");

        });

        gridElement.appendChild(currentSquare);

    }

});


/********FUNCTION *********/

// Arrow function che restituisce un div di square sotto forma di elemento del DOM
const createGridSquare = () => {
    const currentElement = document.createElement("div");
    // inseriamo tutto il necessario per ogni square

    currentElement.classList.add("square");
    return currentElement;
};

// Arrow function che restituisceil varole della select di un elemento del DOM
const selectValue = (element) => {
    const elementValue = element.value;
    // inseriamo tutto il necessario per ogni square
    return elementValue;
};