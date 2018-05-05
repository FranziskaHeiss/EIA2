namespace Aufgabe4 { 

/*  Aufgabe: Aufgabe 4.2: Events - Memory
    Name: Franziska Heiß
    Matrikel: 257745
    Datum: 05.05.18
    
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst und Sofia Gschwend erarbeitet.*/   
    
    

// Interface einer Karte bestimmen
    export interface CardDeck {
        cardContent: string[];
        cardColor: string;
        cardFont: string;
        cardBatch: string;
    }

    export let deck: CardDeck;

    export interface CardPacket {
        [cardName: string]: CardDeck;
    };

    // Definieren der einzelnen Kartendecks
    export let decks: CardPacket = {};
    deck = {
        cardContent: ["Maus", "Katze", "Hund", "Wolf", "Tiger", "Panda", "Giraffe", "Pferd", "Esel", "Igel", "Hase", "L&oumlwe"],
        cardColor: "red",
        cardFont: "sans-serif",
        cardBatch: "12"
    };

    decks["animals"] = deck;
    // über den Namen "photography" wird das entsprechende deck aufgerufen

    deck = {
        cardContent: ["Aquamarin", "Amethyst", "Bernstein", "Opal", "Onyx", "Rubin", "Smaragd", "Saphir", "Diamant", "Topas", "Malachit", "T\u00fcrkis", "Rosenquarz", "Jade"],
        cardColor: "blue",
        cardFont: "sans-serif",
        cardBatch: "14"
    };

    decks["jewel"] = deck;
    // über den Namen "cities" wird das entsprechende deck aufgerufen

    deck = {
        cardContent: ["H&aumlnge-Birke", "Papier-Birke", "Moor-Birke", "Schwarz-Birke", "Gelb-Birke", "Zwerg-Birke", "Wei&szlig-Birke", "Zucker-Birke", "Strauch-Birke", "Wasser-Birke"],
        cardColor: "yellow",
        cardFont: "sans-serif",
        cardBatch: "10"
    };

    decks["trees"] = deck;
    // über den Namen "html-tags" wird das entsprechende deck aufgerufen

    // Interface der Spieleranzeige definieren
    export interface Scoreboard {
        player: string;
        score: number;
    }

    export let scoreboard: Scoreboard[] = [];
    
 }
