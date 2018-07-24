var AbschlussAufgabe;
(function (AbschlussAufgabe) {
    class Paperplane extends AbschlussAufgabe.MovingObject {
        constructor() {
            super();
            this.positionX = 0;
            this.positionY = 0;
            this.gravity = 0.03;
            this.gravitySpeed = 0;
            this.setStartPosition();
        }
        setStartPosition() {
            this.x = 20;
            this.y = 100;
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
            console.log("Hallo");
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
    }
    AbschlussAufgabe.Paperplane = Paperplane;
})(AbschlussAufgabe || (AbschlussAufgabe = {})); //namespace
//# sourceMappingURL=Paperplane.js.map