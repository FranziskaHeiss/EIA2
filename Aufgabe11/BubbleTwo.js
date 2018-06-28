var Aufgabe11;
(function (Aufgabe11) {
    //links
    class BubbleTwo extends Aufgabe11.BubbleOne {
        constructor() {
            super();
        }
        setRandomPosition() {
            this.x = Math.random() * (200 - 250) + 250; //Math.random()* (max - min) + min 
            this.y = Math.random() * 550;
            this.radius = Math.random() * 10;
        }
        move() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 540;
            }
        }
    }
    Aufgabe11.BubbleTwo = BubbleTwo;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=BubbleTwo.js.map