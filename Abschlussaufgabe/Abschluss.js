var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    window.addEventListener("load", init);
    let imgData;
    AbschlussAufgabe.movingObjects = [];
    let plane = new AbschlussAufgabe.Paperplane();
    AbschlussAufgabe.movingObjects.push(plane);
    let canvasClick;
    function init(_event) {
        AbschlussAufgabe.canvas = document.getElementsByTagName("canvas")[0];
        AbschlussAufgabe.crc2 = AbschlussAufgabe.canvas.getContext("2d");
        //canvas.addEventListener("click", insertFood);
        //Hintergrund 
        AbschlussAufgabe.environment();
        imgData = AbschlussAufgabe.crc2.getImageData(0, 0, AbschlussAufgabe.canvas.width, AbschlussAufgabe.canvas.height);
        for (let b = 0; b < 5; b++) {
            let clouds = new AbschlussAufgabe.Cloud();
            AbschlussAufgabe.movingObjects.push(clouds);
        }
        animate();
        canvasClick = document.getElementsByTagName("canvas")[0];
        canvasClick.addEventListener("mousedown", accelerate);
        canvasClick.addEventListener("touchstart", accelerate);
        console.log(canvasClick);
        function accelerate() {
            plane.gravity = -0.1;
            console.log("test");
        }
        canvasClick.addEventListener("mouseup", accelerate2);
        canvasClick.addEventListener("touchend", accelerate2);
        console.log(canvasClick);
        function accelerate2() {
            plane.gravity = 0.05;
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
        plane.newPos();
    }
})(AbschlussAufgabe || (AbschlussAufgabe = {})); //namespace
//# sourceMappingURL=Abschluss.js.map