/*  Aufgabe: Aufgabe 11: Inheritance: Seaworld
    Name: Franziska Hei�
    Matrikel: 257745
    Datum: 28.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst, Anna Lotz und Sofia Gschwend erarbeitet*/
var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let movingObjects = [];
    let n = 8;
    let canvas;
    let imgData;
    function init(_event) {
        canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", insertFood);
        //Hintergrund 
        Aufgabe11.environment();
        imgData = Aufgabe11.crc2.getImageData(0, 0, canvas.width, canvas.height);
        //rechts
        for (let b = 0; b < 20; b++) {
            let bubbles = new Aufgabe11.BubbleOne();
            movingObjects.push(bubbles);
        }
        //links
        for (let b = 0; b < 20; b++) {
            let bubbles = new Aufgabe11.BubbleTwo();
            movingObjects.push(bubbles);
        }
        for (let i = 0; i < n; i++) {
            let fish = new Aufgabe11.Fish();
            movingObjects.push(fish);
        }
        animate();
    }
    function insertFood(_event) {
        let newPositionX = _event.clientX;
        let newPositionY = _event.clientY;
        for (let i = 0; i < 4; i++) {
            let flakes = new Aufgabe11.Flake(newPositionX, newPositionY);
            movingObjects.push(flakes);
            newPositionX += Math.random() * 50;
            newPositionX -= Math.random() * 50;
            newPositionY += Math.random() * 30;
        }
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