/*Aufgabe: Abschlussaufgabe
  Name: Franziska Hei�
  Matrikel: 257745
  Datum: 28.07.18
    
  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    window.addEventListener("load", init);
    let imgData;
    AbschlussAufgabe.movingObjects = [];
    AbschlussAufgabe.collectables = [];
    let plane = new AbschlussAufgabe.Paperplane();
    AbschlussAufgabe.score = 0;
    let node;
    let writeScore = false;
    let canvasClick;
    //init zeigt zu Beginn nur die Startseite an 
    function init() {
        document.getElementById("start").addEventListener("click", startGame);
        document.getElementById("game").style.display = "none";
        document.getElementById("gameover").style.display = "none";
    }
    AbschlussAufgabe.init = init;
    //Funktion blendet die Startseite aus und zeigt das Spiel an
    function startGame(_event) {
        document.getElementById("interface").style.display = "none";
        document.getElementById("game").style.display = "block";
        AbschlussAufgabe.canvas = document.getElementsByTagName("canvas")[0];
        AbschlussAufgabe.crc2 = AbschlussAufgabe.canvas.getContext("2d");
        //Hintergrund 
        AbschlussAufgabe.environment();
        imgData = AbschlussAufgabe.crc2.getImageData(0, 0, AbschlussAufgabe.canvas.width, AbschlussAufgabe.canvas.height);
        //Wolken 
        for (let b = 0; b < 10; b++) {
            let clouds = new AbschlussAufgabe.Cloud();
            AbschlussAufgabe.movingObjects.push(clouds);
        }
        //Stern
        let stars = new AbschlussAufgabe.Star();
        AbschlussAufgabe.collectables.push(stars);
        animate();
        //EventListener f�r die Fliegerbewegung 
        canvasClick = document.getElementsByTagName("canvas")[0];
        canvasClick.addEventListener("mousedown", accelerateUp);
        canvasClick.addEventListener("touchstart", accelerateUp);
        function accelerateUp() {
            plane.gravity = -0.1;
        }
        canvasClick.addEventListener("mouseup", accelerateDown);
        canvasClick.addEventListener("touchend", accelerateDown);
        function accelerateDown() {
            plane.gravity = 0.05;
        }
    } //init-Funktion 
    function animate() {
        window.setTimeout(animate, 10);
        AbschlussAufgabe.crc2.clearRect(0, 0, AbschlussAufgabe.crc2.canvas.width, AbschlussAufgabe.crc2.canvas.height);
        AbschlussAufgabe.crc2.putImageData(imgData, 0, 0); // die Zahlen bestimmen den Ankerpunkt des Hintergrundes
        moveObjects();
        drawObjects();
        plane.newPos();
    } //animate-Funktion 
    function moveObjects() {
        for (let i = 0; i < AbschlussAufgabe.movingObjects.length; i++) {
            AbschlussAufgabe.movingObjects[i].checkPosition();
            AbschlussAufgabe.movingObjects[i].move();
            plane.checkPosition();
        }
        for (let a = 0; a < AbschlussAufgabe.collectables.length; a++) {
            AbschlussAufgabe.collectables[a].checkPosition();
            AbschlussAufgabe.collectables[a].move();
        }
    } //movingObjects-Funktion 
    function drawObjects() {
        plane.draw();
        for (let i = 0; i < AbschlussAufgabe.movingObjects.length; i++) {
            AbschlussAufgabe.movingObjects[i].draw();
        }
        for (let a = 0; a < AbschlussAufgabe.collectables.length; a++) {
            AbschlussAufgabe.collectables[a].draw();
        }
    } //drawObjects-Funktion
    //ertstellt den Stern neu, wenn dieser eingesammelt wurde 
    function createStar() {
        let stars = new AbschlussAufgabe.Star();
        AbschlussAufgabe.collectables.push(stars);
    }
    AbschlussAufgabe.createStar = createStar;
    //blendet die Game Over Seite ein und zeigt den pers�nlichen Score an 
    function gameOver() {
        document.getElementById("interface").style.display = "none";
        document.getElementById("game").style.display = "none";
        document.getElementById("gameover").style.display = "block";
        if (!writeScore) {
            node = document.getElementById("yourscore");
            let content = "";
            content = "Your score: " + AbschlussAufgabe.score;
            node.innerHTML += content;
            writeScore = true;
        }
    }
    AbschlussAufgabe.gameOver = gameOver;
})(AbschlussAufgabe || (AbschlussAufgabe = {})); //namespace
//# sourceMappingURL=Abschluss.js.map