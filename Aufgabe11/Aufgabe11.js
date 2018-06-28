/*  Aufgabe: Aufgabe 10: Classes: OO Seaworld
    Name: Franziska Hei�
    Matrikel: 257745
    Datum: 24.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst erarbeitet*/
var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let movingObjects = [];
    let n = 8;
    let imgData;
    function init(_event) {
        Aufgabe11.canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = Aufgabe11.canvas.getContext("2d");
        //Hintergrund 
        Aufgabe11.environment();
        imgData = Aufgabe11.crc2.getImageData(0, 0, Aufgabe11.canvas.width, Aufgabe11.canvas.height);
        //rechts
        for (let b = 0; b < 20; b++) {
            let bubbles = new Aufgabe11.BubblesOne();
            movingObjects.push(bubbles);
        }
        //links
        for (let b = 0; b < 20; b++) {
            let bubbles = new Aufgabe11.BubblesTwo();
            movingObjects.push(bubbles);
        }
        for (let i = 0; i < n; i++) {
            let fish = new Aufgabe11.Fish();
            movingObjects.push(fish);
        }
        animate();
    }
    function animate() {
        window.setTimeout(animate, 10);
        Aufgabe11.crc2.clearRect(0, 0, Aufgabe11.crc2.canvas.width, Aufgabe11.crc2.canvas.height);
        Aufgabe11.crc2.putImageData(imgData, 0, 0); // die Zahlen bestimmen den Ankerpunkt des Hintergrundes
        moveObjects();
        drawObjects();
    }
    // moveObjects-Funktion
    function moveObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }
    //drawObjects-Funktion
    function drawObjects() {
        for (let i = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
    }
})(Aufgabe11 || (Aufgabe11 = {})); //namespace      
//# sourceMappingURL=Aufgabe11.js.map