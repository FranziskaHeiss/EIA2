var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    class Paperplane extends AbschlussAufgabe.MovingObject {
        constructor() {
            super();
            this.positionX = 0;
            this.positionY = 0;
            this.gravity = 0;
            this.gravitySpeed = 0;
            this.distanceToStar = 5;
            this.setStartPosition();
        }
        setStartPosition() {
            this.x = 50;
            this.y = 220;
        }
        draw() {
            AbschlussAufgabe.crc2.beginPath();
            AbschlussAufgabe.crc2.fillStyle = "rgb(179, 179, 179)";
            AbschlussAufgabe.crc2.moveTo(this.x, this.y);
            AbschlussAufgabe.crc2.lineTo(this.x - 10, this.y - 15);
            AbschlussAufgabe.crc2.lineTo(this.x + 73, this.y - 3);
            AbschlussAufgabe.crc2.lineTo(this.x, this.y);
            AbschlussAufgabe.crc2.lineTo(this.x - 5, this.y + 15);
            AbschlussAufgabe.crc2.lineTo(this.x + 3, this.y + 8);
            AbschlussAufgabe.crc2.lineTo(this.x + 70, this.y - 2);
            AbschlussAufgabe.crc2.lineTo(this.x, this.y + 29);
            AbschlussAufgabe.crc2.lineTo(this.x + 4, this.y + 8);
            AbschlussAufgabe.crc2.lineTo(this.x - 5, this.y + 16);
            AbschlussAufgabe.crc2.lineTo(this.x + 3, this.y + 14);
            AbschlussAufgabe.crc2.stroke();
            AbschlussAufgabe.crc2.fill();
            AbschlussAufgabe.crc2.font = "21px Arial";
            AbschlussAufgabe.crc2.fillText("SCORE: " + AbschlussAufgabe.score, 20, 37);
        }
        newPos() {
            this.gravitySpeed += this.gravity;
            this.x += this.positionX;
            this.y += this.positionY + this.gravitySpeed;
            this.hitBottom();
            this.hitTop();
        }
        hitBottom() {
            let bottom = AbschlussAufgabe.canvas.height;
            if (this.y > bottom) {
                this.y = bottom;
                this.gravitySpeed = 0;
            }
        }
        hitTop() {
            let top = AbschlussAufgabe.canvas.height - AbschlussAufgabe.canvas.height;
            if (this.y < top) {
                this.y = top;
                this.gravitySpeed = 0;
            }
        }
        checkPosition() {
            for (let i = 0; i < AbschlussAufgabe.movingObjects.length; i++) {
                if (this.y <= AbschlussAufgabe.movingObjects[i].y + 25 && this.y >= AbschlussAufgabe.movingObjects[i].y - 25 && this.x <= AbschlussAufgabe.movingObjects[i].x + 25 && this.x >= AbschlussAufgabe.movingObjects[i].x - 25) {
                    // Alert-Box mit der Benachrichtigung "GAME OVER"
                    window.alert("GAME OVER");
                    if (window.alert) {
                        location.reload();
                    }
                }
            } //cloud-Schleife
            for (let b = 0; b < AbschlussAufgabe.collectables.length; b++) {
                if (this.y <= AbschlussAufgabe.collectables[b].y + 1 && this.y >= AbschlussAufgabe.collectables[b].y - 21) {
                    if (this.x <= AbschlussAufgabe.collectables[b].x + 12 && this.x >= AbschlussAufgabe.collectables[b].x - 12) {
                        AbschlussAufgabe.score += 1;
                        let index = b;
                        AbschlussAufgabe.collectables.splice(index, 1);
                        window.setTimeout(AbschlussAufgabe.createObjects, 400);
                    }
                }
            } //collectables-Schleife
        } //checkPosition
    }
    AbschlussAufgabe.Paperplane = Paperplane; //class
})(AbschlussAufgabe || (AbschlussAufgabe = {})); //namespace
//# sourceMappingURL=Paperplane.js.map