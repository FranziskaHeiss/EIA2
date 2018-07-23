namespace AbschlussAufgabe {
    export class Papierflieger  extends MovingObject {

        constructor() {
            super();

        }

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 10, this.y - 15);
            crc2.lineTo(this.x - 73, this.y - 3);
            crc2.lineTo(this.x, this.y);
            crc2.lineTo(this.x - 5, this.y + 15);
            crc2.lineTo(this.x + 3, this.y + 8);
            crc2.lineTo(this.x + 70, this.y - 2);
            crc2.lineTo(this.x, this.y + 29);
            crc2.lineTo(this.x + 4, this.y + 8);
            crc2.lineTo(this.x - 5, this.y + 16);
            crc2.lineTo(this.x + 3, this.y + 14);
            crc2.stroke();
        }

    }
} //namespace