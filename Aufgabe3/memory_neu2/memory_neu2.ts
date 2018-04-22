/*  Aufgabe: Aufgabe 3: Events - Memory
    Name: Franziska Heiß
    Matrikel: 257745
    Datum: 22.04.18
    
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst und Sofia Gschwend erarbeitet.   
  */

namespace Memory {


    document.addEventListener("DOMContentLoaded", main);

    // Variablen deklarieren
    let cardContent: string[] = ["Panda", "Koala", "Tiger", "Wolf", "Hase", "Reh", "Katze", "Hund", "Esel", "Igel"];

    let cardArray: HTMLElement[] = [];
    // leeres Array, in das die für das Spiel benötigten Karten als divs hineingespeichert werden

    let numPairs: number;
    let numPlayers: number;

    let playerInfo: HTMLElement; // HTMLElement = komplexer Datentyp
    let cardField: HTMLElement;

    let score: number = 0; // 0 = Platzhalter
    let name: string = "Spieler ";

    let openCards: number = 0;
    
    
    function main(): void {

        // Funktionsaufruf
        cardPairs();
        // Funktionsaufruf
        numsPlayer();

        // DOM abhängige Varaiblen deklarieren
        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");

        // Spielkarten erzeugen
        for (let i: number = 0; i < numPairs; i++) {
            createCard(cardContent[i]);
            // cardContent an der Stelle i - wird als Übergabeparameter mitgegeben
            createCard(cardContent[i]);
            // cardContent an der Stelle i - wird als Übergabeparameter mitgegeben
        }

        // benötigte Karten mischen - Funktionsaufruf
        randomMix(cardArray);

        // Karten dem Spielbrett hinzufügen
        for (let i: number = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
            // dem Spielbrett hinzufügen
        }

        // Spieler Anzeige generieren
        for (let i: number = 0; i < numPlayers; i++) {
            createPlayer(score, name + [i + 1]);
            // Aufruf der Funktion - score wird mitgegeben und die Variable name + Nummer des Spielers, die hochzählt
        }

        cardField.addEventListener("click", clickHandler);
        // Verweis auf die Funktion clickHandler

    }

    function cardPairs(): void {
        numPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare festlegen", "5 - 10 Kartenpaare"), 10); // 10 = Dezimales Zahlensystem
        if (numPairs < 5 || numPairs > 10) {
            cardPairs();
            // Bei falscher Angabe erscheint das PopUp-Fenster erneut
        }
    }

    function numsPlayer(): void {
        numPlayers = parseInt(prompt("Bitte die Anzahl der Spieler festlegen", "1 - 4 Spieler"), 10);
        if (numPlayers > 4 || numPlayers < 1) {
            numsPlayer();
            // Bei falscher Angabe erscheint das PopUp-Fenster erneut
        }
    }

    function createCard(_textDerAufDieKarteSoll: string): void {
        let card: HTMLElement = document.createElement("div");
        // div erzeugen
        card.innerHTML = `<div>${_textDerAufDieKarteSoll}</div>`;
        // innerHTML = setzt den Inhalt eines Elements auf einen Wert - hier mit span, denn innerHTML erwartet einen string
        // `` = string; $ = String + Variable + String (das heißt, man fügt den Wert einer Variable in einen String ein)
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card hidden");
        // Attribut hinzufÃ¼gen: class = Welches Attribut (hier eine Klasse); card = zugehÃ¶riger Wert aus dem CSS Dokument
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher fÃ¼r alle erzeugten Karten, die durch ".push" hinzugefÃ¼gt werden
    }

    function createPlayer(_score: number, _name: string): void {
        let player: HTMLElement = document.createElement("div");
        let scoreField: HTMLElement = document.createElement("div");
        // Umwandeln einer number in string
        let n: string = _score.toString();
        player.innerText = _name;
        // deshalb ist scoreField = n
        scoreField.innerText = n;
        playerInfo.appendChild(player);
        playerInfo.appendChild(scoreField);
    }

    // Shuffle Arrays
    function randomMix(_array: HTMLElement[]): HTMLElement[] {
        // _array = das Array, das durchmischt werden soll
        for (let i: number = _array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe -> das Array ist jetzt durchgemischt
    }

    function clickHandler(_event: MouseEvent): void {
        let cardClass: HTMLElement = <HTMLElement>_event.target;
        // Gibt das HTMLElement zurück, das den Event ausgelöst hat
        if (cardClass.classList.contains("card")) {
            // classList = gibt den Klassen Namen eines Elements zurück, es können CSS Klassen hinzugefügt und zurückgesetzt werden (w3Schools)
            openCards++;
            if (cardClass.classList.contains("hidden")) {
                // Wenn das Element den Klassen-Namen "hidden" hat, dann:
                cardClass.classList.remove("hidden");
                // Klassen-Namen "hidden" wird gelöscht
                cardClass.classList.add("visible");
                // Klassen-Namen wird auf "visible" gesetzt   
            }
        }
        if (openCards == 2) {
            // wenn zwei Karten offen daliegen, dann:
            setTimeout(cardsCompare, 1700);
            // Timeout für 1700 ms bzw. 1,7 Sekunden           
        }
        if (openCards > 2) {
            //es können nicht mehr als zwei Karten aufgedeckt werden
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }
    }

    function filterCardsByClass(_filter: string): HTMLElement[] {
        return cardArray.filter(card => card.classList.contains(_filter));
        // gibt dem cardArray einen Filter mit, der nach der CSS-Klasse filtert
        // card (aus dem CSS-Dokument)
    }

    function cardsCompare(): void {
        let openArray: HTMLElement[] = filterCardsByClass("visible");
        // Definition des openArray, solle Funktion filterCardsByClass ausführen

        if (openArray[0].children[0].innerHTML == openArray[1].children[0].innerHTML) {
            // wenn das Kind an der Stelle [0] und das Kind der Stelle [1] gleich sind, dann:
            for (let f: number = 0; f < openArray.length; f++) {
                openArray[f].classList.remove("visible");
                // "visible" wird entfernt
                openArray[f].classList.add("taken");
                // und durch "taken" ersetzt
            }
        }
        else {
            // wenn die Kinder des Arrays nicht identisch sind, dann:
            for (let f: number = 0; f < openArray.length; f++) {
                openArray[f].classList.remove("visible");
                // "visible" wird entfernt
                openArray[f].classList.add("hidden");
                // und durch "hidden" ersetzt
            }
        }

        congratAlert();
        //Aufruf von congratAlert(), wenn alle Karten aufgedeckt sind
        
        openArray = [];
        // leeres Array, in das die offenen Karten kommen
        
        openCards = 0;
        // openCards wieder auf 0 setzen
    }

    function congratAlert(): void {
        let cardsTaken: HTMLElement[] = filterCardsByClass("hidden");
        if (cardsTaken.length == 0) {
            // Alert erscheint, wenn alle Karten den Status "taken" haben
            alert("Gratulation!");
        }
        cardsTaken = [];
    } 
}