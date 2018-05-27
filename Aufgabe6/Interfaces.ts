namespace Aufgabe6 {
    
/*  Aufgabe: Aufgabe 6: ClientServer - StudiVZ
    Name: Franziska Heiß
    Matrikel: 257745
    Datum: 27.05.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/ 
    
    
    // Struktur des heterogenen assoziativen Arrays als Datensatz für eine studierende Person
    export interface Studi {
        firstname: string;
        name: string;
        studyPath: string;
        matrikel: number;
        age: number;
        gender: boolean;
       
    }

    // Struktur des homogenen assoziativen Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
    export interface Studis {
        [matrikel: string]: Studi;
    }
 
    // Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
    export let studiHomoAssoc: Studis = {};  
}