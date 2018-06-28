namespace Aufgabe11 {
    export class Fish extends MovingObjects {
        
        
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
                this.y = crc2.canvas.height;
                this.x -= 2;
            }
        }

        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height;
        }

        draw(): void {

            let gradient: CanvasGradient = crc2.createLinearGradient(300, 600, 300, 500);

            gradient.addColorStop(0, "#ff4d4d");
            gradient.addColorStop(1, "#ff751a");

            crc2.fillStyle = gradient;

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x + 30, this.y + 30, this.x + 60, this.y);
            crc2.lineTo(this.x + 80, this.y + 14);
            crc2.quadraticCurveTo(this.x + 65, this.y - 5, this.x + 80, this.y - 20);
            crc2.lineTo(this.x + 60, this.y - 5);
            crc2.quadraticCurveTo(this.x + 28, this.y - 35, this.x, this.y);

            crc2.strokeStyle = "transparent";
            crc2.stroke();

            crc2.fill();

        }
    }

}//namespace