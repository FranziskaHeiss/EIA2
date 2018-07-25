var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    class Star extends AbschlussAufgabe.Cloud {
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
            AbschlussAufgabe.crc2.fillStyle = "rgb(255, 185, 015)";
            AbschlussAufgabe.crc2.beginPath();
            AbschlussAufgabe.crc2.moveTo(this.x, this.y - 20);
            AbschlussAufgabe.crc2.lineTo(this.x + 20, this.y + 10);
            AbschlussAufgabe.crc2.lineTo(this.x - 20, this.y + 10);
            AbschlussAufgabe.crc2.closePath();
            AbschlussAufgabe.crc2.moveTo(this.x, this.y + 20);
            AbschlussAufgabe.crc2.lineTo(this.x + 20, this.y - 10);
            AbschlussAufgabe.crc2.lineTo(this.x - 20, this.y - 10);
            AbschlussAufgabe.crc2.closePath();
            AbschlussAufgabe.crc2.stroke();
            AbschlussAufgabe.crc2.fill();
        }
    }
    AbschlussAufgabe.Star = Star;
})(AbschlussAufgabe || (AbschlussAufgabe = {})); //namespace
//# sourceMappingURL=Star.js.map