var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    class Papierflieger extends AbschlussAufgabe.MovingObject {
        constructor() {
            super();
            this.setStartPosition();
        }
        setStartPosition() {
            this.x = 20;
            this.y = 100;
        }
        draw() {
            AbschlussAufgabe.crc2.beginPath();
            AbschlussAufgabe.crc2.fillStyle = "rgb(179, 179, 179)";
            AbschlussAufgabe.crc2.moveTo(this.x, this.y);
            AbschlussAufgabe.crc2.lineTo(this.x - 10, this.y - 15);
            AbschlussAufgabe.crc2.lineTo(this.x - 73, this.y - 3);
            AbschlussAufgabe.crc2.lineTo(this.x, this.y);
            AbschlussAufgabe.crc2.lineTo(this.x - 5, this.y + 15);
            AbschlussAufgabe.crc2.lineTo(this.x + 3, this.y + 8);
            AbschlussAufgabe.crc2.lineTo(this.x + 70, this.y - 2);
            AbschlussAufgabe.crc2.lineTo(this.x, this.y + 29);
            AbschlussAufgabe.crc2.lineTo(this.x + 4, this.y + 8);
            AbschlussAufgabe.crc2.lineTo(this.x - 5, this.y + 16);
            AbschlussAufgabe.crc2.lineTo(this.x + 3, this.y + 14);
            AbschlussAufgabe.crc2.closePath();
            AbschlussAufgabe.crc2.stroke();
            AbschlussAufgabe.crc2.fill();
            console.log("Hallo");
        }
    }
    AbschlussAufgabe.Papierflieger = Papierflieger;
})(AbschlussAufgabe || (AbschlussAufgabe = {})); //namespace
//# sourceMappingURL=Papierflieger.js.map