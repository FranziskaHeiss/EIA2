var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    class Cloud extends AbschlussAufgabe.MovingObject {
        constructor() {
            super();
            this.setRandomPosition();
        }
        move() {
            this.x -= 1;
        }
        checkPosition() {
            if (this.x < -200) {
                this.setNewRandomSpawnPoint();
            }
        }
        setRandomPosition() {
            this.x = Math.random() * AbschlussAufgabe.crc2.canvas.width + 400;
            // this.y = Math.random() * crc2.canvas.height - 200;
            let c = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.y = 100;
                    break;
                case 1:
                    this.y = 250;
                    break;
                case 2:
                    this.y = 410;
                    break;
            }
        }
        setNewRandomSpawnPoint() {
            this.x = AbschlussAufgabe.canvas.width + 50;
            //this.y = Math.random() * ((crc2.canvas.height - 200) - 50) + 50; // Math.random() * (max - min) + min
            let e = Math.floor(Math.random() * 3);
            switch (e) {
                case 0:
                    this.y = 100;
                    break;
                case 1:
                    this.y = 250;
                    break;
                case 2:
                    this.y = 410;
                    break;
            }
        }
        draw() {
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