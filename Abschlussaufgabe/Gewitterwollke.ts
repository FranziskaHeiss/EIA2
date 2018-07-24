namespace AbschlussAufgabe {
    export class Gewitterwolke extends Cloud {
   
        constructor() {
            super();
            this.setRandomPosition();
        }

        move(): void {
            this.x -= 2;
            this.y += 0;
            if (this.x < -200) {
                this.x = crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = crc2.canvas.height - 200;
                this.x -= 2;
            }
        }

        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height - 200;
        }

        draw(): void {

            let gradient: CanvasGradient = crc2.createLinearGradient(300, 500, 300, 300);

            gradient.addColorStop(0, "#ff4d4d");
            gradient.addColorStop(1, "#ff751a");

            crc2.fillStyle = gradient;

            crc2.beginPath();
            crc2.moveTo(50, 50);
            crc2.quadraticCurveTo(60, 30, 80 , 40);
            crc2.quadraticCurveTo(103, 15, 130 , 35);
            crc2.quadraticCurveTo(150, 25, 160 , 45);
            crc2.quadraticCurveTo(183, 50, 170 , 70);
            crc2.quadraticCurveTo(175, 90, 155 , 90);
            crc2.quadraticCurveTo(148, 110, 125 , 100);
            crc2.quadraticCurveTo(105, 120, 85 , 100);
            crc2.quadraticCurveTo(65, 105, 60 , 90);
            crc2.quadraticCurveTo(40, 90, 45 , 75);
            crc2.quadraticCurveTo(30, 60, 50 , 50);
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(134, 105);
            crc2.lineTo(130, 120);
            crc2.lineTo(140, 115);
            crc2.lineTo(135, 130);
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(85, 103);
            crc2.lineTo(80, 125);
            crc2.lineTo(90, 120);
            crc2.lineTo(85, 140);
            crc2.stroke();


            crc2.fill();

        }
    }

} //namespace