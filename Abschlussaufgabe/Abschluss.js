var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    window.addEventListener("load", init);
    let imgData;
    AbschlussAufgabe.movingObjects = [];
    AbschlussAufgabe.collectables = [];
    let plane = new AbschlussAufgabe.Paperplane();
    AbschlussAufgabe.score = 0;
    let canvasClick;
    function init() {
        document.getElementById("start").addEventListener("click", startGame);
        document.getElementById("game").style.display = "none";
    }
    function startGame(_event) {
        document.getElementById("interface").style.display = "none";
        document.getElementById("game").style.display = "block";
        AbschlussAufgabe.canvas = document.getElementsByTagName("canvas")[0];
        AbschlussAufgabe.crc2 = AbschlussAufgabe.canvas.getContext("2d");
        //Hintergrund 
        AbschlussAufgabe.environment();
        imgData = AbschlussAufgabe.crc2.getImageData(0, 0, AbschlussAufgabe.canvas.width, AbschlussAufgabe.canvas.height);
        for (let b = 0; b < 5; b++) {
            let clouds = new AbschlussAufgabe.Cloud();
            AbschlussAufgabe.movingObjects.push(clouds);
        }
        for (let i = 0; i < 2; i++) {
            let stars = new AbschlussAufgabe.Star();
            AbschlussAufgabe.collectables.push(stars);
        }
        animate();
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
    } // init-Funktion 
    function animate() {
        window.setTimeout(animate, 10);
        AbschlussAufgabe.crc2.clearRect(0, 0, AbschlussAufgabe.crc2.canvas.width, AbschlussAufgabe.crc2.canvas.height);
        AbschlussAufgabe.crc2.putImageData(imgData, 0, 0); // die Zahlen bestimmen den Ankerpunkt des Hintergrundes
        moveObjects();
        drawObjects();
        newPosition();
    } // animate-Funktion 
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
    } // movingObjects-Funktion 
    function drawObjects() {
        plane.draw();
        for (let i = 0; i < AbschlussAufgabe.movingObjects.length; i++) {
            AbschlussAufgabe.movingObjects[i].draw();
        }
        for (let a = 0; a < AbschlussAufgabe.collectables.length; a++) {
            AbschlussAufgabe.collectables[a].draw();
        }
    } //drawObjects-Funktion
    function createObjects() {
        let stars = new AbschlussAufgabe.Star();
        AbschlussAufgabe.collectables.push(stars);
    }
    AbschlussAufgabe.createObjects = createObjects;
    function newPosition() {
        plane.newPos();
    } // newPosition-Funktion 
})(AbschlussAufgabe || (AbschlussAufgabe = {})); //namespace
//# sourceMappingURL=Abschluss.js.map