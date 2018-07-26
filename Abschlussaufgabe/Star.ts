namespace AbschlussAufgabe {
    export class Star extends Cloud {

        points: number;

        constructor() {
            super();
            this.setRandomPosition();
        }

        move(): void {
            this.x -= 1;
        }

        setNewRandomSpawnPoint(): void {
            this.x = canvas.width + 50;
            //this.y = Math.random() * ((crc2.canvas.height - 200) - 50) + 50;
            let e: number = Math.floor(Math.random() * 3);
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

        setRandomPosition(): void {
            this.x = Math.random() * ((crc2.canvas.width + 200) - crc2.canvas.width) + crc2.canvas.width;
            //this.y = Math.random() * crc2.canvas.height - 200;
            let c: number = Math.floor(Math.random() * 3);
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

        draw(): void {

            //Berechnung um einen genauen Fünfstern zu zeichnen (Pentagram) 
            crc2.fillStyle = "rgb(255, 185, 015)";
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            let radius: number = 15;
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            for (let i: number = 1; i <= 5; ++i) {
                let th: number = i * 4 * Math.PI / 5;
                let x: number = this.x + radius * Math.sin(th);
                let y: number = this.y + radius - radius * Math.cos(th);
                crc2.lineTo(x, y);
            }
            crc2.lineJoin = "round";
            crc2.closePath();
            crc2.stroke();
            crc2.fill();
            
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

} //namespace