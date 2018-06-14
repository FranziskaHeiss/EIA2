var L09_Canvas;
(function (L09_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        background();
        sand();
        /*for (let i: number = 0; i < 100; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            drawDavidStar(x, y);
        }*/
    }
    function background() {
        crc2.fillStyle = "rgba(0,153,204)";
        crc2.fillRect(0, 0, 1000, 700);
    }
    function sand() {
        crc2.fillStyle = "rgb(255,204,51)";
        crc2.beginPath();
        crc2.moveTo(0, 550);
        crc2.quadraticCurveTo(120, 500, 300, 580);
        crc2.quadraticCurveTo(400, 625, 500, 635);
        crc2.quadraticCurveTo(630, 640, 700, 600);
        crc2.quadraticCurveTo(855, 500, 1000, 500);
        crc2.lineTo(1000, 700);
        crc2.lineTo(0, 700);
        crc2.closePath();
        crc2.strokeStyle = "rgb(255,204,51)";
        crc2.stroke();
        crc2.fill();
    }
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=Canvas.js.map