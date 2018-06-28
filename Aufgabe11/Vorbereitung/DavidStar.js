var L11;
(function (L11) {
    class DavidStar {
        constructor(_color) {
            this.setRandomPosition();
            this.color = _color;
        }
        setRandomPosition() {
            this.x = Math.random() * L11.crc2.canvas.width;
            this.y = Math.random() * L11.crc2.canvas.height;
        }
        // declare method without keyword function
        move() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }
        draw() {
            L11.crc2.beginPath();
            L11.crc2.moveTo(this.x, this.y - 20);
            L11.crc2.lineTo(this.x + 20, this.y + 10);
            L11.crc2.lineTo(this.x - 20, this.y + 10);
            L11.crc2.closePath();
            L11.crc2.moveTo(this.x, this.y + 20);
            L11.crc2.lineTo(this.x + 20, this.y - 10);
            L11.crc2.lineTo(this.x - 20, this.y - 10);
            L11.crc2.closePath();
            L11.crc2.fillStyle = this.color;
            L11.crc2.stroke();
            L11.crc2.fill();
        }
    }
    L11.DavidStar = DavidStar;
})(L11 || (L11 = {}));
//# sourceMappingURL=DavidStar.js.map