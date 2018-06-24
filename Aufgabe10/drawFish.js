var Aufgabe10;
(function (Aufgabe10) {
    class Fish {
        move() {
            this.x -= 2;
            this.y += 0;
            if (this.x < -200) {
                this.x = Aufgabe10.crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = Aufgabe10.crc2.canvas.height;
                this.x -= 2;
            }
        }
        draw() {
            let gradient = Aufgabe10.crc2.createLinearGradient(300, 600, 300, 500);
            gradient.addColorStop(0, "#ff4d4d");
            gradient.addColorStop(1, "#ff751a");
            Aufgabe10.crc2.fillStyle = gradient;
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 30, this.y + 30, this.x + 60, this.y);
            Aufgabe10.crc2.lineTo(this.x + 80, this.y + 14);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 65, this.y - 5, this.x + 80, this.y - 20);
            Aufgabe10.crc2.lineTo(this.x + 60, this.y - 5);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 28, this.y - 35, this.x, this.y);
            Aufgabe10.crc2.strokeStyle = "transparent";
            Aufgabe10.crc2.stroke();
            Aufgabe10.crc2.fill();
        }
    }
    Aufgabe10.Fish = Fish;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=drawFish.js.map