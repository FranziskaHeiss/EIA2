namespace Aufgabe11 {
    
    //rechts
    export class BubbleOne extends MovingObjects {
        
        radius: number;
       
        constructor() {
            super();
            this.setRandomPosition();
        }

        setRandomPosition(): void {
            this.x = Math.random() * (730 - 760) + 760;           
            this.y = Math.random() * 550;
            this.radius = Math.random() * 10;
            }
        
        move(): void {
            this.x += 0;           
            this.y -= 2;
            if (this.y < 0) {
                this.y = 590;
            }
        }

        draw(): void {
            crc2.fillStyle = "rgb(206, 220, 226, 0.6)";

            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.fill();

            crc2.strokeStyle = "transparent";
            crc2.stroke();
        }
    }    
}