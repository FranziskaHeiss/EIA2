var Aufgabe4;
(function (Aufgabe4) {
    ;
    // Definieren der einzelnen Kartendecks
    Aufgabe4.decks = {};
    Aufgabe4.deck = {
        cardContent: ["Maus", "Katze", "Hund", "Wolf", "Tiger", "Panda", "Giraffe", "Pferd", "Esel", "Igel", "Hase", "L&oumlwe"],
        cardColor: "red",
        cardFont: "sans-serif",
        cardBatch: "12"
    };
    Aufgabe4.decks["animals"] = Aufgabe4.deck;
    // �ber den Namen "photography" wird das entsprechende deck aufgerufen
    Aufgabe4.deck = {
        cardContent: ["Aquamarin", "Amethyst", "Bernstein", "Opal", "Onyx", "Rubin", "Smaragd", "Saphir", "Diamant", "Topas", "Malachit", "T\u00fcrkis", "Rosenquarz", "Jade"],
        cardColor: "blue",
        cardFont: "sans-serif",
        cardBatch: "14"
    };
    Aufgabe4.decks["jewel"] = Aufgabe4.deck;
    // �ber den Namen "cities" wird das entsprechende deck aufgerufen
    Aufgabe4.deck = {
        cardContent: ["H&aumlnge-Birke", "Papier-Birke", "Moor-Birke", "Schwarz-Birke", "Gelb-Birke", "Zwerg-Birke", "Wei&szlig-Birke", "Zucker-Birke", "Strauch-Birke", "Wasser-Birke"],
        cardColor: "yellow",
        cardFont: "sans-serif",
        cardBatch: "10"
    };
    Aufgabe4.decks["trees"] = Aufgabe4.deck;
    Aufgabe4.scoreboard = [];
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Interface.js.map