var Aufgabe11;
(function (Aufgabe11) {
    //links
    class BubblesTwo extends Aufgabe11.BubblesOne {
        constructor() {
            super();
        }
        moveBubbles() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 540;
            }
        }
        setRandomPosition() {
            this.x = Math.random() * (200 - 250) + 250;
            this.y = Math.random() * 550;
            this.radius = Math.random() * 10;
        }
    }
    Aufgabe11.BubblesTwo = BubblesTwo;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=BubblesTwo.js.map