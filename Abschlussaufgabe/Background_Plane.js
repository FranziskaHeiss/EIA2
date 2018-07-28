var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    function environment() {
        background();
    }
    AbschlussAufgabe.environment = environment;
    function background() {
        let gradient = AbschlussAufgabe.crc2.createLinearGradient(0, 0, 0, 700);
        gradient.addColorStop(0, "#80c1ff");
        gradient.addColorStop(1, "#e6f3ff");
        AbschlussAufgabe.crc2.fillStyle = gradient;
        AbschlussAufgabe.crc2.fillRect(0, 0, 854, 480);
    }
})(AbschlussAufgabe || (AbschlussAufgabe = {})); //namespace
//# sourceMappingURL=Background_Plane.js.map