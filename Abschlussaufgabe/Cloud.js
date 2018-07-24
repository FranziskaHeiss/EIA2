var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    class Cloud extends AbschlussAufgabe.MovingObject {
        constructor() {
            super();
            this.setRandomPosition();
        }
        move() {
            this.x -= 0.3;
            this.y += 0;
            if (this.x < -150) {
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
            AbschlussAufgabe.crc2.moveTo(this.x, this.y);
            AbschlussAufgabe.crc2.quadraticCurveTo(this.x + 5, this.y - 20, this.x + 20, this.y - 12);
            AbschlussAufgabe.crc2.quadraticCurveTo(this.x + 35, this.y - 30, this.x + 50, this.y - 15);
            AbschlussAufgabe.crc2.quadraticCurveTo(this.x + 65, this.y - 25, this.x + 75, this.y - 10);
            AbschlussAufgabe.crc2.quadraticCurveTo(this.x + 95, this.y - 10, this.x + 90, this.y + 10);
            AbschlussAufgabe.crc2.quadraticCurveTo(this.x + 100, this.y + 25, this.x + 85, this.y + 30);
            AbschlussAufgabe.crc2.quadraticCurveTo(this.x + 80, this.y + 45, this.x + 65, this.y + 40);
            AbschlussAufgabe.crc2.quadraticCurveTo(this.x + 50, this.y + 55, this.x + 35, this.y + 40);
            AbschlussAufgabe.crc2.quadraticCurveTo(this.x + 20, this.y + 50, this.x + 10, this.y + 35);
            AbschlussAufgabe.crc2.quadraticCurveTo(this.x - 5, this.y + 35, this.x, this.y + 20);
            AbschlussAufgabe.crc2.quadraticCurveTo(this.x - 15, this.y + 10, this.x, this.y);
            AbschlussAufgabe.crc2.stroke();
            AbschlussAufgabe.crc2.fill();
        }
    }
    AbschlussAufgabe.Cloud = Cloud;
})(AbschlussAufgabe || (AbschlussAufgabe = {})); //namespace
//# sourceMappingURL=Cloud.js.map