var Memory;
(function (Memory) {
    /*Aufgabe: Aufgabe 2: DynHTML - Memory
     Name: Franziska Hei�
     Matrikel: 257745
     Datum: 14.04.18
     Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
     Dieser Code wurde in Zusammenarbeit mit Abreitsgruppe Gr�n und unter Anleitung von Melvin B erstellt.
     */
    document.addEventListener("DOMContentLoaded", main);
    // Variablen deklarieren
    let cardContent = ["Panda", "Koala", "Tiger", "Wolf", "Hase", "Reh", "Katze", "Hund", "Esel", "Igel"];
    let cardArray = [];
    // leeres Array, in das die f�r das Spiel ben�tigten Karten als divs hineingespeichert werden
    let numPairs;
    let numPlayers;
    let playerInfo;
    let cardField;
    let score = 0;
    let name = "Spieler ";
    function main() {
        // Spieler soll Anzahl der Kartenpaare eingeben
        askCardPairs();
        // Spieler sollen angeben, wie viele spielen wollen
        askNumsPlayer();
        // DOM abh�ngige Varaiblen deklarieren
        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");
        // Spielkarten erzeugen
        for (let i = 0; i < numPairs; i++) {
            createCard(cardContent[i], randomState());
            // cardContent an der Stelle i - wird als �bergabeparameter mitgegeben
            createCard(cardContent[i], randomState());
        }
        // Karten mischen
        randomMix(cardArray);
        // Karten dem Spielbrett hinzuf�gen
        for (let i = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
        }
        // Spieler Anzeige generieren
        for (let i = 0; i < numPlayers; i++) {
            createPlayer(score, name + [i + 1]);
        }
    }
    function askCardPairs() {
        numPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare festlegen", "5 - 10 Kartenpaare"), 10);
        if (numPairs < 5 || numPairs > 10) {
            askCardPairs();
        }
    }
    function askNumsPlayer() {
        numPlayers = parseInt(prompt("Bitte die Anzahl der Spieler festlegen", "1 - 4 Spieler"), 10);
        if (numPlayers > 4 || numPlayers < 1) {
            askNumsPlayer();
        }
    }
    function createCard(_textDerAufDieKarteSoll, _state) {
        let card = document.createElement("div");
        // div erzeugen
        card.innerText = _textDerAufDieKarteSoll;
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card " + _state);
        // Attribut hinzuf�gen: class = Welches Attribut (hier eine Klasse); card = zugeh�riger Wert aus dem CSS Dokument
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher f�r alle erzeugten Karten, die durch ".push" hinzugef�gt werden
    }
    function createPlayer(_score, _name) {
        let player = document.createElement("div");
        let scoreField = document.createElement("div");
        let n = _score.toString();
        //.toString wandelt number in string um
        player.innerText = _name;
        scoreField.innerText = n;
        //deshalb ist scoreField = n 
        playerInfo.appendChild(player);
        playerInfo.appendChild(scoreField);
    }
    // Shuffle Arrays
    function randomMix(_array) {
        // _array = das Array, das durchmischt werden soll
        for (let i = _array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe -> das Array ist jetzt durchgemischt
    }
    // Zufallsgenerator als eigene funktion -> sch�ner & funktioniert besser :D
    function randomState() {
        let randomState = Math.random();
        // zuf�llige Zahl rein speichern, mit ganz vielen Kommastellen zwischen 0 und 1
        if (randomState <= .5) {
            // 50%ige Wahrscheinlichkeit, dass die Karte den Status: "hidden" hat 
            return "hidden";
        }
        else if (randomState > .5 && randomState <= .75) {
            // oder wenn: wenn Zahl gr��er als 0,5 und kleiner gleich 0,75 - dann Status: "taken"
            return "taken";
        }
        else if (randomState > .75) {
            // oder wenn: Wenn Zahl gr��er als 0,75 - dann Status: "visible"
            return "visible";
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=memory_neu.js.map