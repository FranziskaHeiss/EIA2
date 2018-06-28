var L11;
(function (L11) {
    class Rect extends L11.DavidStar {
        constructor(_color) {
            super(_color);
        }
        draw() {
            L11.crc2.fillStyle = this.color;
            L11.crc2.fillRect(this.x - 20, this.y - 20, 40, 40);
        }
    }
    L11.Rect = Rect;
})(L11 || (L11 = {}));
//# sourceMappingURL=Rect.js.map