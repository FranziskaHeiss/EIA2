var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    window.addEventListener("load", init);
    let imgData;
    let breite = (window.innerWidth);
    let hoehe = (window.innerHeight);
    AbschlussAufgabe.movingObjects = [];
    function init(_event) {
        AbschlussAufgabe.canvas = document.getElementsByTagName("canvas")[0];
        AbschlussAufgabe.crc2 = AbschlussAufgabe.canvas.getContext("2d");
        //canvas.addEventListener("click", insertFood);
        //Hintergrund 
        AbschlussAufgabe.environment();
        imgData = AbschlussAufgabe.crc2.getImageData(0, 0, AbschlussAufgabe.canvas.width, AbschlussAufgabe.canvas.height);
        if (breite > hoehe) {
            AbschlussAufgabe.canvas.style.setProperty("height", 0.95 * hoehe + "px");
        }
        else if (hoehe > breite) {
            AbschlussAufgabe.canvas.style.setProperty("width", 0.95 * breite + "px");
        }
        for (let b = 0; b < 5; b++) {
            let wolken = new AbschlussAufgabe.Wolke();
            AbschlussAufgabe.movingObjects.push(wolken);
        }
        animate();
    }
    function animate() {
        window.setTimeout(animate, 10);
        AbschlussAufgabe.crc2.clearRect(0, 0, AbschlussAufgabe.crc2.canvas.width, AbschlussAufgabe.crc2.canvas.height);
        AbschlussAufgabe.crc2.putImageData(imgData, 0, 0); // die Zahlen bestimmen den Ankerpunkt des Hintergrundes
        moveObjects();
        drawObjects();
    }
    // moveObjects-Funktion
    function moveObjects() {
        for (let i = 0; i < AbschlussAufgabe.movingObjects.length; i++) {
            AbschlussAufgabe.movingObjects[i].move();
        }
    }
    //drawObjects-Funktion
    function drawObjects() {
        for (let i = 0; i < AbschlussAufgabe.movingObjects.length; i++) {
            AbschlussAufgabe.movingObjects[i].draw();
        }
    }
})(AbschlussAufgabe || (AbschlussAufgabe = {})); //namespace
//# sourceMappingURL=Abschluss.js.map