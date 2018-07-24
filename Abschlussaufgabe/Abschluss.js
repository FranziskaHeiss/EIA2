var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    window.addEventListener("load", init);
    let imgData;
    AbschlussAufgabe.movingObjects = [];
    let flieger = new AbschlussAufgabe.Papierflieger();
    AbschlussAufgabe.movingObjects.push(flieger);
    let blub;
    function init(_event) {
        AbschlussAufgabe.canvas = document.getElementsByTagName("canvas")[0];
        AbschlussAufgabe.crc2 = AbschlussAufgabe.canvas.getContext("2d");
        //canvas.addEventListener("click", insertFood);
        //Hintergrund 
        AbschlussAufgabe.environment();
        imgData = AbschlussAufgabe.crc2.getImageData(0, 0, AbschlussAufgabe.canvas.width, AbschlussAufgabe.canvas.height);
        for (let b = 0; b < 5; b++) {
            let wolken = new AbschlussAufgabe.Wolke();
            AbschlussAufgabe.movingObjects.push(wolken);
        }
        animate();
        blub = document.getElementById("Button");
        blub.addEventListener("mousedown", accelerate);
        console.log(blub);
        function accelerate() {
            flieger.gravity = -0.3;
            console.log("test");
        }
        blub.addEventListener("mouseup", accelerate2);
        console.log(blub);
        function accelerate2() {
            flieger.gravity = 0.2;
            console.log("test2");
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        AbschlussAufgabe.crc2.clearRect(0, 0, AbschlussAufgabe.crc2.canvas.width, AbschlussAufgabe.crc2.canvas.height);
        AbschlussAufgabe.crc2.putImageData(imgData, 0, 0); // die Zahlen bestimmen den Ankerpunkt des Hintergrundes
        moveObjects();
        drawObjects();
        newPosition();
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
    function newPosition() {
        flieger.newPos();
    }
})(AbschlussAufgabe || (AbschlussAufgabe = {})); //namespace
//# sourceMappingURL=Abschluss.js.map