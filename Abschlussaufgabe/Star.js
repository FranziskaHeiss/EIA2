var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    class Star extends AbschlussAufgabe.Cloud {
        constructor() {
            super();
            this.setRandomPosition();
        }
        move() {
            this.x -= 2;
        }
        setNewRandomSpawnPoint() {
            this.x = AbschlussAufgabe.canvas.width + 50;
            this.y = Math.random() * ((AbschlussAufgabe.crc2.canvas.height - 200) - 50) + 50;
        }
        setRandomPosition() {
            this.x = Math.random() * ((AbschlussAufgabe.crc2.canvas.width + 200) - AbschlussAufgabe.crc2.canvas.width) + AbschlussAufgabe.crc2.canvas.width;
            //this.x = Math.random() * ((crc2.canvas.width + 600) - (crc2.canvas.width)) + (crc2.canvas.width + 450);
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