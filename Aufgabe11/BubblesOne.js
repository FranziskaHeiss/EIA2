var Aufgabe11;
(function (Aufgabe11) {
    //rechts
    class BubblesOne extends Aufgabe11.MovingObjects {
        constructor() {
            super();
            this.setRandomPosition();
        }
        setRandomPosition() {
            this.x = Math.random() * (730 - 760) + 760;
            this.y = Math.random() * 550;
            this.radius = Math.random() * 10;
        }
        move() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 590;
            }
        }
        draw() {
            Aufgabe11.crc2.fillStyle = "rgb(206, 220, 226, 0.6)";
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.strokeStyle = "transparent";
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.BubblesOne = BubblesOne;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=BubblesOne.js.map