var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    function environment() {
        background();
    }
    AbschlussAufgabe.environment = environment;
    function background() {
        let gradient = AbschlussAufgabe.crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "#63cfc6");
        gradient.addColorStop(1, "#003d66");
        AbschlussAufgabe.crc2.fillStyle = gradient;
        AbschlussAufgabe.crc2.fillRect(0, 0, 854, 480);
    }
})(AbschlussAufgabe || (AbschlussAufgabe = {})); //namespace
//# sourceMappingURL=Background_Plane.js.map