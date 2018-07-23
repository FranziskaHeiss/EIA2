var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    window.addEventListener("load", init);
    let imgData;
    let breite = (window.innerWidth);
    let hoehe = (window.innerHeight);
    //export let movingObjects: MovingObject[] = [];
    function init(_event) {
        AbschlussAufgabe.canvas = document.getElementsByTagName("canvas")[0];
        AbschlussAufgabe.crc2 = AbschlussAufgabe.canvas.getContext("2d");
        //canvas.addEventListener("click", insertFood);
        //Hintergrund 
        AbschlussAufgabe.environment();
        imgData = AbschlussAufgabe.crc2.getImageData(0, 0, AbschlussAufgabe.canvas.width, AbschlussAufgabe.canvas.height);
        if (breite < hoehe) {
            AbschlussAufgabe.canvas.style.setProperty("height", 0.95 * hoehe + "px");
        }
        else if (hoehe < breite) {
            AbschlussAufgabe.canvas.style.setProperty("width", 0.95 * breite + "px");
        }
    }
})(AbschlussAufgabe || (AbschlussAufgabe = {})); //namespace
//# sourceMappingURL=Abschluss.js.map