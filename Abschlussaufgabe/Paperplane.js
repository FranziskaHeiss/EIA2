var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    class Paperplane extends AbschlussAufgabe.MovingObject {
        constructor() {
            super();
            this.positionX = 0;
            this.positionY = 0;
            this.gravity = 0;
            this.gravitySpeed = 0;
            this.setStartPosition();
        }
        setStartPosition() {
            this.x = 100;
            this.y = 220;
        }
        draw() {
            AbschlussAufgabe.crc2.fillStyle = "rgb(255, 255, 255)";
            AbschlussAufgabe.crc2.beginPath();
            AbschlussAufgabe.crc2.moveTo(this.x, this.y);
            AbschlussAufgabe.crc2.lineTo(this.x - 80, this.y + 17);
            AbschlussAufgabe.crc2.lineTo(this.x - 75, this.y + 1);
            AbschlussAufgabe.crc2.lineWidth = 2;
            AbschlussAufgabe.crc2.strokeStyle = "rgb(26, 26, 26)";
            AbschlussAufgabe.crc2.stroke();
            AbschlussAufgabe.crc2.fill();
            AbschlussAufgabe.crc2.beginPath();
            AbschlussAufgabe.crc2.moveTo(this.x, this.y);
            AbschlussAufgabe.crc2.lineTo(this.x - 85, this.y - 14);
            AbschlussAufgabe.crc2.lineTo(this.x - 75, this.y + 1);
            AbschlussAufgabe.crc2.lineTo(this.x - 1, this.y);
            AbschlussAufgabe.crc2.lineWidth = 2;
            AbschlussAufgabe.crc2.strokeStyle = "rgb(26, 26, 26)";
            AbschlussAufgabe.crc2.stroke();
            AbschlussAufgabe.crc2.fill();
            AbschlussAufgabe.crc2.beginPath();
            AbschlussAufgabe.crc2.moveTo(this.x, this.y + 1);
            AbschlussAufgabe.crc2.lineTo(this.x - 75, this.y + 31);
            AbschlussAufgabe.crc2.lineTo(this.x - 72, this.y + 9);
            AbschlussAufgabe.crc2.lineTo(this.x, this.y + 1);
            AbschlussAufgabe.crc2.lineWidth = 2;
            AbschlussAufgabe.crc2.strokeStyle = "rgb(26, 26, 26)";
            AbschlussAufgabe.crc2.stroke();
            AbschlussAufgabe.crc2.fill();
            AbschlussAufgabe.crc2.beginPath();
            AbschlussAufgabe.crc2.moveTo(this.x - 71, this.y + 8);
            AbschlussAufgabe.crc2.lineTo(this.x - 80, this.y + 16);
            AbschlussAufgabe.crc2.lineWidth = 1;
            AbschlussAufgabe.crc2.strokeStyle = "rgb(26, 26, 26)";
            AbschlussAufgabe.crc2.stroke();
            AbschlussAufgabe.crc2.fill();
            AbschlussAufgabe.crc2.font = "23px Calibri";
            AbschlussAufgabe.crc2.fillText("SCORE: " + AbschlussAufgabe.score, 740, 30);
        }
        //neue Position des Fliegers, der durch den Gravitationswert erzeugt wird
        newPos() {
            this.gravitySpeed += this.gravity;
            this.x += this.positionX;
            this.y += this.positionY + this.gravitySpeed;
            this.hitBottom();
            this.hitTop();
        }
        //Begrenzung wie weit das Flugzeug sinken kann, bevor Game Over angezeigt wird 
        hitBottom() {
            let bottom = AbschlussAufgabe.canvas.height + 10;
            if (this.y > bottom) {
                this.y = bottom;
                AbschlussAufgabe.gameOver();
            }
        }
        //Begrenzung wie weit das Flugzeug steigen kann, bevor Game Over angezeigt wird 
        hitTop() {
            let top = AbschlussAufgabe.canvas.height - (AbschlussAufgabe.canvas.height + 20);
            if (this.y < top) {
                this.y = top;
                AbschlussAufgabe.gameOver(); //Funktionsaufruf
            }
        }
        //Methode um die Position der Wolken und des Stern mit der des Fliegers abzugleichen
        checkPosition() {
            //Kollision mit Wolken 
            for (let i = 0; i < AbschlussAufgabe.movingObjects.length; i++) {
                //Kollisionsbereich der Spitze des Fliegers
                if (this.x <= AbschlussAufgabe.movingObjects[i].x + 85 && this.x >= AbschlussAufgabe.movingObjects[i].x) {
                    if (this.y <= AbschlussAufgabe.movingObjects[i].y + 40 && this.y >= AbschlussAufgabe.movingObjects[i].y - 15) {
                        AbschlussAufgabe.gameOver();
                    }
                }
                //Kollisionsbereich des oberen Fl�gels des Fliegers
                if (this.x - 75 <= AbschlussAufgabe.movingObjects[i].x + 85 && this.x - 75 >= AbschlussAufgabe.movingObjects[i].x - 10) {
                    if (this.y + 31 <= AbschlussAufgabe.movingObjects[i].y + 40 && this.y + 31 >= AbschlussAufgabe.movingObjects[i].y - 15) {
                        AbschlussAufgabe.gameOver();
                    }
                }
                //Kollisionsbereich des unteren Fl�gels des Fliegers
                if (this.x - 85 <= AbschlussAufgabe.movingObjects[i].x + 85 && this.x - 85 >= AbschlussAufgabe.movingObjects[i].x) {
                    if (this.y - 14 <= AbschlussAufgabe.movingObjects[i].y + 40 && this.y - 14 >= AbschlussAufgabe.movingObjects[i].y - 15) {
                        AbschlussAufgabe.gameOver();
                    }
                }
            } //cloud-Schleife
            //Einsammeln von Sternen 
            for (let b = 0; b < AbschlussAufgabe.collectables.length; b++) {
                //Kollisionsbereich der Spitze des Fliegers
                if (this.x <= AbschlussAufgabe.collectables[b].x + 25 && this.x >= AbschlussAufgabe.collectables[b].x - 20) {
                    if (this.y <= AbschlussAufgabe.collectables[b].y + 15 && this.y >= AbschlussAufgabe.collectables[b].y - 15) {
                        AbschlussAufgabe.score += 1;
                        let index = b;
                        AbschlussAufgabe.collectables.splice(index, 1);
                        window.setTimeout(AbschlussAufgabe.createStar, 400);
                    }
                }
                //Kollisionsbereich des oberen Fl�gels des Fliegers
                if (this.x - 85 <= AbschlussAufgabe.collectables[b].x + 20 && this.x - 85 >= AbschlussAufgabe.collectables[b].x - 25) {
                    if (this.y - 14 <= AbschlussAufgabe.collectables[b].y + 15 && this.y - 14 >= AbschlussAufgabe.collectables[b].y - 15) {
                        AbschlussAufgabe.score += 1;
                        let index = b;
                        AbschlussAufgabe.collectables.splice(index, 1);
                        window.setTimeout(AbschlussAufgabe.createStar, 400);
                    }
                }
                //Kollisionsbereich des unteren Fl�gels des Fliegers
                if (this.x - 75 <= AbschlussAufgabe.collectables[b].x + 20 && this.x - 75 >= AbschlussAufgabe.collectables[b].x - 25) {
                    if (this.y + 31 <= AbschlussAufgabe.collectables[b].y + 15 && this.y + 31 >= AbschlussAufgabe.collectables[b].y - 15) {
                        AbschlussAufgabe.score += 1;
                        let index = b;
                        AbschlussAufgabe.collectables.splice(index, 1);
                        window.setTimeout(AbschlussAufgabe.createStar, 400);
                    }
                }
            } //collectables-Schleife
        } //checkPosition
    }
    AbschlussAufgabe.Paperplane = Paperplane; //class
})(AbschlussAufgabe || (AbschlussAufgabe = {})); //namespace
//# sourceMappingURL=Paperplane.js.map