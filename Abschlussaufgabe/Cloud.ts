namespace AbschlussAufgabe {
    export class Cloud extends MovingObject {

        constructor() {
            super();
            this.setRandomPosition();
        }

        move(): void {
            this.x -= 0.4;          
        }

        checkPosition(): void {
            if (this.x < -200) {
                this.setNewRandomSpawnPoint();               
            }
        }
        
        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width + 300;
            this.y = Math.random() * crc2.canvas.height - 200;
        }
        
        setNewRandomSpawnPoint(): void {
            this.x = canvas.width + 50;
            this.y = Math.random() * ((crc2.canvas.height - 200) - 50) + 50; // Math.random() * (max - min) + min
        }
        
        draw(): void {

            
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