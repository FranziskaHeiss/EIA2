namespace Aufgabe8 {
    
/*  Aufgabe: Aufgabe 8: ClientServer - StudiVZ
    Name: Franziska Hei�
    Matrikel: 257745
    Datum: 07.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/ 
    
    
    // Struktur des heterogenen assoziativen Arrays als Datensatz f�r eine studierende Person
    export interface Studi {
        firstname: string;
        name: string;       
        matrikel: number;
        age: number;
        gender: boolean;
        studyPath: string;
       
    }

    // Struktur des homogenen assoziativen Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
    export interface Studis {
        [matrikel: string]: Studi;
    }
 
    // Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
    export let studiHomoAssoc: Studis = {};  
}