namespace AbschlussAufgabe {
    export class Paperplane extends MovingObject {

        positionX: number = 0;
        positionY: number = 0;
        gravity: number = 0.03;
        gravitySpeed: number = 0;

        constructor() {
            super();
            this.setStartPosition();
        }

        setStartPosition(): void {
            this.x = 20;
            this.y = 100;
        }

        draw(): void {
            crc2.beginPath();
            crc2.fillStyle = "rgb(179, 179, 179)";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 10, this.y - 15);
            crc2.lineTo(this.x + 73, this.y - 3);
            crc2.lineTo(this.x, this.y);
            crc2.lineTo(this.x - 5, this.y + 15);
            crc2.lineTo(this.x + 3, this.y + 8);
            crc2.lineTo(this.x + 70, this.y - 2);
            crc2.lineTo(this.x, this.y + 29);
            crc2.lineTo(this.x + 4, this.y + 8);
            crc2.lineTo(this.x - 5, this.y + 16);
            crc2.lineTo(this.x + 3, this.y + 14);

            crc2.stroke();

            crc2.fill();
            console.log("Hallo");
        }

        newPos(): void {
            this.gravitySpeed += this.gravity;
            this.x += this.positionX;
            this.y += this.positionY + this.gravitySpeed;
            this.hitBottom();
            this.hitTop();
        }

        hitBottom(): void {
            let bottom: number = canvas.height;
            if (this.y > bottom) {
                this.y = bottom;
                this.gravitySpeed = 0; 
                //alert("Game Over");              
            }
        }

        hitTop(): void {
            let top: number = canvas.height - canvas.height;
            if (this.y < top) {
                this.y = top;
                this.gravitySpeed = 0;               
            }
        }
    }
} //namespace