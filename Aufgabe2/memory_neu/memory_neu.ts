 /*Aufgabe: Aufgabe 2: DynHTML - Memory
      Name: Franziska Heiß
      Matrikel: 257745
      Datum: 14.04.18
      Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
      Dieser Code wurde in Zusammenarbeit mit Abreitsgruppe Grün und unter Anleitung von Melvin B erstellt.
      */

namespace Memory {
    
    
    document.addEventListener("DOMContentLoaded", main);

    // Variablen deklarieren
    let cardContent: string[] = ["Panda", "Koala", "Tiger", "Wolf", "Hase", "Reh", "Katze", "Hund", "Esel", "Igel"];

    let cardArray: HTMLElement[] = [];
    // leeres Array, in das die für das Spiel benötigten Karten als divs hineingespeichert werden

    let numPairs: number;
    let numPlayers: number;

    let playerInfo: HTMLElement;
    let cardField: HTMLElement;

    let score: number = 0;
    let name: string = "Spieler ";


    function main(): void {

        // Spieler soll Anzahl der Kartenpaare eingeben
        askCardPairs();
        // Spieler sollen angeben, wie viele spielen wollen
        askNumsPlayer();

        // DOM abhängige Varaiblen deklarieren
        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");

        // Spielkarten erzeugen
        for (let i: number = 0; i < numPairs; i++) {
            createCard(cardContent[i], randomState());
            // cardContent an der Stelle i - wird als Übergabeparameter mitgegeben
            createCard(cardContent[i], randomState());
            // cardContent an der Stelle i - wird als Übergabeparameter mitgegeben
        }

        // Karten mischen
        randomMix(cardArray);

        // Karten dem Spielbrett hinzufügen
        for (let i: number = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
            // dem Spielbrett hinzufügen
        }

        // Spieler Anzeige generieren
        for (let i: number = 0; i < numPlayers; i++) {
            createPlayer(score, name + [i + 1]);
        }
    }

    function askCardPairs(): void {
        numPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare festlegen", "5 - 10 Kartenpaare"), 10);
        if (numPairs < 5 || numPairs > 10) {
            askCardPairs();
        // Funktionsaufruf in der if Abfrage -> Pop-up Abfrage erscheint bei falscher Eingabe erneut
        }
    }
    function askNumsPlayer(): void {
        numPlayers = parseInt(prompt("Bitte die Anzahl der Spieler festlegen", "1 - 4 Spieler"), 10);
        if (numPlayers > 4 || numPlayers < 1) {
            askNumsPlayer();
        // Funktionsaufruf in der if Abfrage -> Pop-up Abfrage erscheint bei falscher Eingabe erneut
        }
    }
    
    function createCard(_textDerAufDieKarteSoll: string, _state: string): void {
        let card: HTMLElement = document.createElement("div");
        // div erzeugen
        card.innerText = _textDerAufDieKarteSoll;
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card " + _state);
        // Attribut hinzufügen: class = Welches Attribut (hier eine Klasse); card = zugehöriger Wert aus dem CSS Dokument
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher für alle erzeugten Karten, die durch ".push" hinzugefügt werden
    }


    function createPlayer(_score: number, _name: string): void {
        let player: HTMLElement = document.createElement("div");
        let scoreField: HTMLElement = document.createElement("div");
        let n: string = _score.toString(); 
        //.toString wandelt number in string um
        player.innerText = _name;
        scoreField.innerText = n;
        //deshalb ist scoreField = n 
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

    // Zufallsgenerator als eigene funktion -> schöner & funktioniert besser :D
    function randomState(): string {
        let randomState: number = Math.random();
        // zufällige Zahl rein speichern, mit ganz vielen Kommastellen zwischen 0 und 1
        if (randomState <= .5) {
            // 50%ige Wahrscheinlichkeit, dass die Karte den Status: "hidden" hat 
            return "hidden";
            // Status = hidden
        } else if (randomState > .5 && randomState <= .75) {
            // oder wenn: wenn Zahl größer als 0,5 und kleiner gleich 0,75 - dann Status: "taken"
            return "taken";
        } else if (randomState > .75) {
            // oder wenn: Wenn Zahl größer als 0,75 - dann Status: "visible"
            return "visible";
        }
    }


}
