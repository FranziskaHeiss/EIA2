var Memory;
(function (Memory) {
    let numPlayers = 1; // Anzahl der Spieler
    let numPairs = 26; // Anzahl der Kartenpaare (wird durch eine ganze Zahl im Array angezeigt)
    let numCards = numPairs * 2;
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // m�gliche Inhalte der Memory Karten
    let check = prompt("Wie viele Spieler seid ihr? (1-4 Spieler)", ""); // Pop-Up Fenster
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
    for (let i = 1; i < numPlayers; i++) {
        createPlayerBox(i);
    }
    function createPlayerBox(_numPlayers) {
        let playerDiv = document.createElement("div");
        document.body.appendChild(playerDiv);
        // CSS Style Anweisungen
        let style = playerDiv.style;
        style.border = "thin solid black";
        style.position = "relative";
        style.left = "10px";
        style.top = "10px";
        style.margin = "5px";
        style.display = "inline-block";
        style.backgroundColor = "lightgray";
        style.width = "20%";
        style.overflow = "hidden";
        let player = document.createElement("p");
        playerDiv.appendChild(player);
        player.innerHTML = "Spieler" + _numPlayers;
        let stylePlayer = player.style;
        stylePlayer.textAlign = "center";
        let points = document.createElement("p");
        playerDiv.appendChild(points);
        points.innerHTML = "Punkte: 00";
        let stylePoints = points.style;
        stylePoints.textAlign = "center";
    }
    let cardArray = cardContent.slice(0); // 0 = Array so lassen wie es ist, sprich nicht ver�ndern
    // Slice = Klonen
    for (let i = 0; i < cardArray.length; i++) {
        cardContent.push(cardArray[i]);
    }
    console.log(cardContent); // Array verdoppelt / geklont, aber Buchstaben noch nicht an der richtigen Stelle
    for (let n = 0; n < 1; n++) {
        cardArray.splice(n + 1, 0, cardContent[n]);
    }
    for (let n = 1; n < 2; n++) {
        cardArray.splice(n + 2, 0, cardContent[n]);
    }
    for (let n = 2; n < 3; n++) {
        cardArray.splice(n + 3, 0, cardContent[n]);
    }
    for (let n = 3; n < 4; n++) {
        cardArray.splice(n + 4, 0, cardContent[n]);
    }
    for (let n = 4; n < 5; n++) {
        cardArray.splice(n + 5, 0, cardContent[n]);
    }
    // sehr kompliziert, funktioniert aber - ich wei� nicht, wie man das in EINER Schleife l�sen kann...
    console.log(cardArray);
})(Memory || (Memory = {}));
//# sourceMappingURL=memory.js.map