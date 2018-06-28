var Aufgabe11;
(function (Aufgabe11) {
    class Fish extends Aufgabe11.MovingObjects {
        constructor() {
            super();
            this.setRandomPosition();
        }
        move() {
            this.x -= 2;
            this.y += 0;
            if (this.x < -200) {
                this.x = Aufgabe11.crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = Aufgabe11.crc2.canvas.height - 200;
                this.x -= 2;
            }
        }
        setRandomPosition() {
            this.x = Math.random() * Aufgabe11.crc2.canvas.width;
            this.y = Math.random() * Aufgabe11.crc2.canvas.height - 200;
        }
        draw() {
            let gradient = Aufgabe11.crc2.createLinearGradient(300, 600, 300, 500);
            gradient.addColorStop(0, "#ff4d4d");
            gradient.addColorStop(1, "#ff751a");
            Aufgabe11.crc2.fillStyle = gradient;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 30, this.y + 30, this.x + 60, this.y);
            Aufgabe11.crc2.lineTo(this.x + 80, this.y + 14);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 65, this.y - 5, this.x + 80, this.y - 20);
            Aufgabe11.crc2.lineTo(this.x + 60, this.y - 5);
            Aufgabe11.crc2.quadraticCurveTo(this.x + 28, this.y - 35, this.x, this.y);
            Aufgabe11.crc2.strokeStyle = "transparent";
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.Fish = Fish;
})(Aufgabe11 || (Aufgabe11 = {})); //namespace
//# sourceMappingURL=Fish.js.map