namespace Aufgabe10 {
    export class Fish {
        x: number;
        y: number;

        // declare method without keyword function
        move(): void {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
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







}