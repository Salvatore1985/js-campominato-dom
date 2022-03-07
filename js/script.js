/**
 * Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco
 (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, 
 e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
- abbiamo calpestato una bomba
- la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro
 e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.
BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste
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

    //*GENERO UNA LISTA CON IOL NUMERO DELLE BOMBE
    const numberBombs = 16;
    const bombs = generateBombs(numberBombs, cellNumber);
    console.table(bombs);



    //*CICLO PER TUTTI GLI ELEMENTI CHE VOGLIO CREARE
    for (let i = 1; i <= cellNumber; i++) {
        let cell = createGridSquare(i, cellForRow);
        /*   console.log(createGridSquare(i, cellForRow) + i); */

        //*  LEGO UN EVENTO AL CLICK DEL DELLA CELLA
        cell.addEventListener("click", function () {
            //!CONVALIDO SE I NUMERI DELLE BOMBE SONO NELLE CELLE CLICCATE
            if (!bombs.includes(i)) {
                cell.classList.add("active");

            } else {
                cell.classList.add("red");
            }
        });

        document.getElementById("grid").appendChild(cell);
        /*   console.log(cell); */

    }

};


//function che restituisce un div di square sotto forma di elemento del DOM
function createGridSquare(number, cellForRow) {
    const currentElement = document.createElement("div");
    // inseriamo tutto il necessario per ogni square

    currentElement.classList.add("square");
    currentElement.style.width = `calc(100% / ${cellForRow} )`;
    currentElement.style.height = currentElement.style.width;
    currentElement.innerHTML = `<span>${number}</span>`;
    return currentElement;
};

//  function che crea un numero random tra min e max non  incluso in una array
/**
 *  function che crea un numero random tra min e max non  incluso in una array
 * @param {*} numsBlackList è l'array dove non  ci sono i numeri che non possono essere randomizati
 * @param {number} min è il numero con il valore minimo
 * @param {number} max è il numero con il valore massimo
 */
function generateUniqueRandomNumber(numsBlackList, min, max) {

    let check = false;
    let randomInteger;

    while (!check) {
        randomInteger = Math.floor(Math.random() * ((max + 1) - min) + min);

        if (!numsBlackList.includes(randomInteger)) {
            check = true;
        }
    }

    return randomInteger;

};

/**
 * Funzione che mi permette di inserire dentro la mia array di numeri la lista dei numeri delle bombe
 * @param {*} boms è il numero di bombe che posso inserire nel gioco
 * @param {*} numberOfCells è il numero delle celle che posso inserire nel gioco
 * @returns 
 */
function generateBombs(bombs, numberOfCells) {
    const numberBombs = [];

    for (let i = 0; i < bombs; i++) {

        numberBombs.push((generateUniqueRandomNumber(numberBombs, 1, numberOfCells)));
    }

    return numberBombs

}

