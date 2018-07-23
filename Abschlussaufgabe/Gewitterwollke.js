var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    class Gewitterwolke extends AbschlussAufgabe.Wolke {
        constructor() {
            super();
            this.setRandomPosition();
        }
        move() {
            this.x -= 2;
            this.y += 0;
            if (this.x < -200) {
                this.x = AbschlussAufgabe.crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = AbschlussAufgabe.crc2.canvas.height - 200;
                this.x -= 2;
            }
        }
        setRandomPosition() {
            this.x = Math.random() * AbschlussAufgabe.crc2.canvas.width;
            this.y = Math.random() * AbschlussAufgabe.crc2.canvas.height - 200;
        }
        draw() {
            let gradient = AbschlussAufgabe.crc2.createLinearGradient(300, 500, 300, 300);
            gradient.addColorStop(0, "#ff4d4d");
            gradient.addColorStop(1, "#ff751a");
            AbschlussAufgabe.crc2.fillStyle = gradient;
            AbschlussAufgabe.crc2.beginPath();
            AbschlussAufgabe.crc2.moveTo(50, 50);
            AbschlussAufgabe.crc2.quadraticCurveTo(60, 30, 80, 40);
            AbschlussAufgabe.crc2.quadraticCurveTo(103, 15, 130, 35);
            AbschlussAufgabe.crc2.quadraticCurveTo(150, 25, 160, 45);
            AbschlussAufgabe.crc2.quadraticCurveTo(183, 50, 170, 70);
            AbschlussAufgabe.crc2.quadraticCurveTo(175, 90, 155, 90);
            AbschlussAufgabe.crc2.quadraticCurveTo(148, 110, 125, 100);
            AbschlussAufgabe.crc2.quadraticCurveTo(105, 120, 85, 100);
            AbschlussAufgabe.crc2.quadraticCurveTo(65, 105, 60, 90);
            AbschlussAufgabe.crc2.quadraticCurveTo(40, 90, 45, 75);
            AbschlussAufgabe.crc2.quadraticCurveTo(30, 60, 50, 50);
            AbschlussAufgabe.crc2.stroke();
            AbschlussAufgabe.crc2.beginPath();
            AbschlussAufgabe.crc2.moveTo(134, 105);
            AbschlussAufgabe.crc2.lineTo(130, 120);
            AbschlussAufgabe.crc2.lineTo(140, 115);
            AbschlussAufgabe.crc2.lineTo(135, 130);
            AbschlussAufgabe.crc2.stroke();
            AbschlussAufgabe.crc2.beginPath();
            AbschlussAufgabe.crc2.moveTo(85, 103);
            AbschlussAufgabe.crc2.lineTo(80, 125);
            AbschlussAufgabe.crc2.lineTo(90, 120);
            AbschlussAufgabe.crc2.lineTo(85, 140);
            AbschlussAufgabe.crc2.stroke();
            AbschlussAufgabe.crc2.fill();
        }
    }
    AbschlussAufgabe.Gewitterwolke = Gewitterwolke;
})(AbschlussAufgabe || (AbschlussAufgabe = {})); //namespace
//# sourceMappingURL=Gewitterwollke.js.map