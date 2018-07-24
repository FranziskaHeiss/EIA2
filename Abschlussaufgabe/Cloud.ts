namespace AbschlussAufgabe {
    export class Cloud extends MovingObject {

        constructor() {
            super();
            this.setRandomPosition();
        }

        move(): void {
            this.x -= 0.3;
            this.y += 0;
            if (this.x < -150) {
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
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x + 5, this.y - 20, this.x + 20, this.y - 12);
            crc2.quadraticCurveTo(this.x + 35, this.y - 30, this.x + 50, this.y - 15);
            crc2.quadraticCurveTo(this.x + 65, this.y - 25, this.x + 75, this.y - 10);
            crc2.quadraticCurveTo(this.x + 95, this.y - 10, this.x + 90, this.y + 10);
            crc2.quadraticCurveTo(this.x + 100, this.y + 25, this.x + 85, this.y + 30);
            crc2.quadraticCurveTo(this.x + 80, this.y + 45, this.x + 65, this.y + 40);
            crc2.quadraticCurveTo(this.x + 50, this.y + 55, this.x + 35, this.y + 40);
            crc2.quadraticCurveTo(this.x + 20, this.y + 50, this.x + 10, this.y + 35);
            crc2.quadraticCurveTo(this.x - 5, this.y + 35, this.x, this.y + 20);
            crc2.quadraticCurveTo(this.x - 15, this.y + 10, this.x, this.y);
            crc2.stroke();

            crc2.fill();

        }
    }

} //namespace