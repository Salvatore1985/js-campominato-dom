/**
 * Consegna
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
 */




//*LEGO UN EVENTO AL CLICK DEL BTN-LEVEL

document.getElementById("btn-level").addEventListener("click", function () {

    generationGameLevel()



});


/********FUNCTION *********/

// Arrow function che restituisce un div di square sotto forma di elemento del DOM
function generationGameLevel() {
    /* Resetto l'HTML  */
    document.getElementById("grid").innerHTML = "";

    //*RECUPERO L'ELEMENTO DAL DOM
    /**Recupero il valore del livello */
    const levelElement = document.getElementById("level").value;
    console.log(levelElement);

    //*CREO UNO SWICH PER DEFINIRE IL VALORE PER OGNI LIVELLO
    let cellForRow;
    let cellNumber;
    switch (levelElement) {
        case "level-easy":
            cellNumber = 100;
            break;
        case "level-medium":
            cellNumber = 81;
            break;
        case "level-hard":
            cellNumber = 49;
            break;
    }

    //*CALCOLO LA RADICE QUADRATA DELLA VARIABILE "cellForRow"
    cellForRow = Math.sqrt(cellNumber);
    console.log("La radice quadrata di " + cellNumber + " é " + cellForRow);

    //*CICLO PER TUTTI GLI ELEMENTI CHE VOGLIO CREARE
    for (let i = 1; i <= cellNumber; i++) {
        let cell = createGridSquare(i, cellForRow);
        console.log(createGridSquare(i, cellForRow) + i);

        document.getElementById("grid").appendChild(cell);
        console.log(cell);

    }

};

// Arrow function che restituisce un div di square sotto forma di elemento del DOM
function createGridSquare(number, cellForRow) {
    const currentElement = document.createElement("div");
    // inseriamo tutto il necessario per ogni square

    currentElement.classList.add("square");
    currentElement.style.width = `calc(100% / ${cellForRow} )`;
    currentElement.style.height = currentElement.style.width;
    currentElement.innerHTML = `<span>${number}</span>`;
    return currentElement;
};









// Arrow function che restituisceil varole della select di un elemento del DOM
const selectValue = (element) => {
    const elementValue = element.value;
    // inseriamo tutto il necessario per ogni square
    return elementValue;
};