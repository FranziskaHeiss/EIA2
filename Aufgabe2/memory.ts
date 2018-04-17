namespace Memory {

let numPlayers : number = 1; // Anzahl der Spieler
let numPairs : number = 26; // Anzahl der Kartenpaare (wird durch eine ganze Zahl im Array angezeigt)
let numCards : number = numPairs * 2;
let cardContent : string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// mögliche Inhalte der Memory Karten

let check : string = prompt("Wie viele Spieler seid ihr? (1-4 Spieler)", ""); // Pop-Up Fenster
switch (check) {
    case "1":
        numPlayers += 1;
        break;

    case "2":
        numPlayers += 2;
        break;

    case "3":
        numPlayers += 3;
        break;

    case "4":
        numPlayers += 4;
        break;

    default:
        location.reload();
}
switch/case ist hier mit Kanonen auf Spatzen geschossen. 
Wandelt check einfach in eine Zahl um, z.B. mit parseInt und prüft ob das Ergebnis tatsächlich eine Zahl zwischen 1 und 4 ist
das gleiche könnt ihr dann auch für die Paarzahl machen, da wird es offensichtlich, dass ein switch Wahnsinn wäre...    

for (let i : number = 1; i < numPlayers; i++) {
    createPlayerBox(i);
}

function createPlayerBox(_numPlayers: number) : void {
    let playerDiv: HTMLDivElement = document.createElement("div");
    document.body.appendChild(playerDiv);

// CSS Style Anweisungen
Styles blähen den Code hier unnötig auf. Außerdem steht explizit in der Aufgabenstellung:
"Die Stil-Informationen zur Anzeige des aufgebauten DOM sind vollständig in der CSS-Datei hinterlegt,..."
Hier sollten also im Wesentlichen nur creates und appends geschehen.
    let style: CSSStyleDeclaration = playerDiv.style;
    style.border = "thin solid black";
    style.position = "relative";
    style.left = "10px";
    style.top = "10px";
    style.margin = "5px";
    style.display = "inline-block";
    style.backgroundColor = "lightgray";
    style.width = "20%";
    style.overflow = "hidden";

    let player: HTMLParagraphElement = document.createElement("p");
    playerDiv.appendChild(player);
    player.innerHTML = "Spieler" + _numPlayers;

    let stylePlayer: CSSStyleDeclaration = player.style;
    stylePlayer.textAlign = "center";

    let points: HTMLParagraphElement = document.createElement("p");
    playerDiv.appendChild(points);
    points.innerHTML = "Punkte: 00";

    let stylePoints: CSSStyleDeclaration = points.style;
    stylePoints.textAlign = "center";
}

In der Aufgabenstellung hatte ich auf splice hingewiesen, hier wird slice verwendet. Die Idee dahinter erschließt sich mir nicht.
Ich kann sie auch nicht im Aktivitätsdiagramm erkennen, da dort eine falsch verstandene Aufgabenstellung verfolgt wird.... :-(
    let cardArray : string [] = cardContent.slice(0); // 0 = Array so lassen wie es ist, sprich nicht verändern
    // Slice = Klonen

    for (let i : number = 0; i < cardArray.length; i++) {
        cardContent.push(cardArray[i]);
    }
OK, ihr verdoppelt also das cardContent-Array
    
    console.log (cardContent); // Array verdoppelt / geklont, aber Buchstaben noch nicht an der richtigen Stelle

die folgenden Schleifen machen jeweils nur eine Iteration, folglich kann man auf sie verzichten.    
    for (let n : number = 0; n < 1; n++) { 
        cardArray.splice(n + 1, 0, cardContent[n])
    }

    for (let n : number = 1; n < 2; n++) {
        cardArray.splice(n + 2, 0, cardContent[n])
    }

    for (let n : number = 2; n < 3; n++) {
        cardArray.splice(n + 3, 0, cardContent[n])
    }

    for (let n : number = 3; n < 4; n++) {
        cardArray.splice(n + 4, 0, cardContent[n])
    }

    for (let n : number = 4; n < 5; n++) {
        cardArray.splice(n + 5, 0, cardContent[n])
    }

Aaalso... ihr fügt derzeit an der Stelle 1 im cardArray den Wert von cardContent an der Stelle 0 ein, 
also ein weiteres "A" zwischen "A" und "B", dann an der Stelle 3 den Wert von cardContent an der Stelle 1,
also ein weiteres "B" zwischen "B" und "C". Das macht ihr für jeden Buchstaben einzeln und habt dafür jeweils sogar
eine Schleife geschrieben, die immer nur einmal durchlaufen wird. Wenn ihr so weitermacht, werdet ihr sicher noch 
einige Stunden versenken. Da hier außerdem kein Zufall im Spiel ist, sondern das Ergebnis lediglich das Array
["A","A","B","B","C","C",....,"Z","Z"] sein wird, könntet ihr euch den ganzen Code sparen und das Array einfach so schreiben...

Ihr solltet euch noch einmal den Grobentwurf des Aktivitätsdiagramms aus dem Praktikum anschauen und verstehen.
Ich denke, ich sollte ihn ins reine zeichnen. Mache mich gleich daran...

Räumt in der Zwischenzeit den Code auf!

    // sehr kompliziert, funktioniert aber - ich weiß nicht, wie man das in EINER Schleife lösen kann...

    console.log (cardArray);




/*
//createCard(cardArray(k))

let content : string;
let status : string;
let n : number = 2;

function createCard(_content: string, _status: string) : void {
    let card: HTMLDivElement = document.createElement("div");
    document.body.appendChild(card);

    let styleCard: CSSStyleDeclaration = card.style;
    styleCard.border = "thin solid black";
    styleCard.position = "relative";
    styleCard.left = "10px";
    styleCard.top = "10px";
    styleCard.margin = "5px";
    styleCard.display = "inline-block";
    styleCard.backgroundColor = "red";
    styleCard.width = "10%";
    styleCard.overflow = "hidden";

    for (let n : number = 0; n < numPairs; n++) {
        card.push (_status[n]) * 2;
    }
}
*/

}
