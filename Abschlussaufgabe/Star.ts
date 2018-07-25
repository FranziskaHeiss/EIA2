namespace AbschlussAufgabe {
    export class Star extends Cloud {

        points: number;

        constructor() {
            super();
            this.setRandomPosition();
        }

        move(): void {
            this.x -= 2;            
        }
       
        setNewRandomSpawnPoint(): void {
            this.x = canvas.width + 50;
            this.y = Math.random() * ((crc2.canvas.height - 200) - 50) + 50; 
        }
        
        setRandomPosition(): void {
            this.x = Math.random() * ((crc2.canvas.width + 200) - crc2.canvas.width) + crc2.canvas.width;
            //this.x = Math.random() * ((crc2.canvas.width + 600) - (crc2.canvas.width)) + (crc2.canvas.width + 450);
            this.y = Math.random() * crc2.canvas.height - 200;
        }

        draw(): void {

            crc2.fillStyle = "rgb(255, 185, 015)";

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
            crc2.fill();
        }
    }

} //namespace