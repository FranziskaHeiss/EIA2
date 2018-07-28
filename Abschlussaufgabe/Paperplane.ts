namespace AbschlussAufgabe {
    export class Paperplane extends MovingObject {

        positionX: number = 0;
        positionY: number = 0;
        gravity: number = 0;
        gravitySpeed: number = 0;
        star: Star;
        

        constructor() {
            super();
            this.setStartPosition();
        }

        setStartPosition(): void {
            this.x = 100;
            this.y = 220;
        }

        draw(): void {

            crc2.fillStyle = "rgb(255, 255, 255)";

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 80, this.y + 17);
            crc2.lineTo(this.x - 75, this.y + 1);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "rgb(26, 26, 26)";
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 85, this.y - 14);
            crc2.lineTo(this.x - 75, this.y + 1);
            crc2.lineTo(this.x - 1, this.y);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "rgb(26, 26, 26)";
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x, this.y + 1);
            crc2.lineTo(this.x - 75, this.y + 31);
            crc2.lineTo(this.x - 72, this.y + 9);
            crc2.lineTo(this.x, this.y + 1);
            crc2.lineWidth = 2;
            crc2.strokeStyle = "rgb(26, 26, 26)";
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.moveTo(this.x - 71, this.y + 8);
            crc2.lineTo(this.x - 80, this.y + 16);
            crc2.lineWidth = 1;
            crc2.strokeStyle = "rgb(26, 26, 26)";
            crc2.stroke();          
            crc2.fill();


            crc2.font = "23px Calibri";
            crc2.fillText("SCORE: " + score, 740, 30);


        }

        newPos(): void {
            this.gravitySpeed += this.gravity;
            this.x += this.positionX;
            this.y += this.positionY + this.gravitySpeed;
            this.hitBottom();
            this.hitTop();
        }

        hitBottom(): void {
            let bottom: number = canvas.height + 10;
            if (this.y > bottom) {
                this.y = bottom;
               
                gameOver(); 
            }
        }

        hitTop(): void {
            let top: number = canvas.height - (canvas.height + 20);
            if (this.y < top) {
                this.y = top;

                gameOver(); //Funktionsaufruf
            }
        }

        checkPosition(): void {

            //Kollision mit Wolken 
            for (let i: number = 0; i < movingObjects.length; i++) {

                if (this.x <= movingObjects[i].x + 85 && this.x >= movingObjects[i].x) {
                    if (this.y <= movingObjects[i].y + 40 && this.y >= movingObjects[i].y - 15) {

                        gameOver(); 
                        
                    }
                }

                if (this.x - 75 <= movingObjects[i].x + 85 && this.x - 75 >= movingObjects[i].x - 10) {
                    if (this.y + 31 <= movingObjects[i].y + 40 && this.y + 31 >= movingObjects[i].y - 15) {
                        
                        gameOver();
                    }
                }

                if (this.x - 85 <= movingObjects[i].x + 85 && this.x - 85 >= movingObjects[i].x) {
                    if (this.y - 14 <= movingObjects[i].y + 40 && this.y - 14 >= movingObjects[i].y - 15) {
                        
                        gameOver(); 
                    }
                }
            }//cloud-Schleife


            //Einsammeln von Sternen 
            for (let b: number = 0; b < collectables.length; b++) {
                if (this.x <= collectables[b].x + 25 && this.x >= collectables[b].x - 20) {
                    if (this.y <= collectables[b].y + 15 && this.y >= collectables[b].y - 15) {

                        score += 1;

                        let index: number = b;
                        collectables.splice(index, 1);

                        window.setTimeout(createStar, 400);
                    }
                }
                if (this.x - 85 <= collectables[b].x + 20 && this.x - 85 >= collectables[b].x - 25) {
                    if (this.y - 14 <= collectables[b].y + 15 && this.y - 14 >= collectables[b].y - 15) {

                        score += 1;

                        let index: number = b;
                        collectables.splice(index, 1);

                        window.setTimeout(createStar, 400);
                    }
                }

                if (this.x - 75 <= collectables[b].x + 20 && this.x - 75 >= collectables[b].x - 25) {
                    if (this.y + 31 <= collectables[b].y + 15 && this.y + 31 >= collectables[b].y - 15) {

                        score += 1;

                        let index: number = b;
                        collectables.splice(index, 1);

                        window.setTimeout(createStar, 400);
                    }
                }
            }//collectables-Schleife
        }//checkPosition


    }//class
} //namespace