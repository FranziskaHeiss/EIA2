var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    class Star extends AbschlussAufgabe.Cloud {
        constructor() {
            super();
            this.setRandomPosition();
        }
        setRandomPosition() {
            this.x = Math.random() * ((AbschlussAufgabe.crc2.canvas.width + 200) - AbschlussAufgabe.crc2.canvas.width) + AbschlussAufgabe.crc2.canvas.width;
            //this.y = Math.random() * crc2.canvas.height - 200;
            let c = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.y = 30;
                    break;
                case 1:
                    this.y = 180;
                    break;
                case 2:
                    this.y = 320;
                    break;
            }
        }
        setNewRandomSpawnPoint() {
            this.x = AbschlussAufgabe.canvas.width + 50;
            //this.y = Math.random() * ((crc2.canvas.height - 200) - 50) + 50;
            let e = Math.floor(Math.random() * 3);
            switch (e) {
                case 0:
                    this.y = 30;
                    break;
                case 1:
                    this.y = 180;
                    break;
                case 2:
                    this.y = 320;
                    break;
            }
        }
        draw() {
            //Berechnung um einen genauen F�nfstern zu zeichnen (Pentagram) 
            AbschlussAufgabe.crc2.fillStyle = "rgb(255, 185, 015)";
            AbschlussAufgabe.crc2.beginPath();
            AbschlussAufgabe.crc2.moveTo(this.x, this.y);
            let radius = 15;
            AbschlussAufgabe.crc2.beginPath();
            AbschlussAufgabe.crc2.moveTo(this.x, this.y);
            for (let i = 1; i <= 5; ++i) {
                let th = i * 4 * Math.PI / 5;
                let x = this.x + radius * Math.sin(th);
                let y = this.y + radius - radius * Math.cos(th);
                AbschlussAufgabe.crc2.lineTo(x, y);
            }
            AbschlussAufgabe.crc2.lineJoin = "round";
            AbschlussAufgabe.crc2.closePath();
            AbschlussAufgabe.crc2.lineWidth = 2;
            AbschlussAufgabe.crc2.strokeStyle = "rgb(102, 102, 102)";
            AbschlussAufgabe.crc2.stroke();
            AbschlussAufgabe.crc2.fill();
            /*crc2.fillStyle = "rgb(255, 185, 015)";

            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 20);
            crc2.lineTo(this.x + 20, this.y + 10);
            crc2.lineTo(this.x - 20, this.y + 10);
            crc2.closePath();

            crc2.moveTo(this.x, this.y + 20);
            crc2.lineTo(this.x + 20, this.y - 10);
            crc2.lineTo(this.x - 20, this.y - 10);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();*/
        }
    }
    AbschlussAufgabe.Star = Star;
})(AbschlussAufgabe || (AbschlussAufgabe = {})); //namespace
//# sourceMappingURL=Star.js.map