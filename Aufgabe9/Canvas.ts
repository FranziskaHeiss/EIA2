namespace L09_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        crc2.fillStyle = "rgba(0,153,255)";
        crc2.fillRect (0, 0, 1000, 700);
     }
        /*drawDavidStar(300, 100);
        drawDavidStar(100, 200);

        for (let i: number = 0; i < 100; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            drawDavidStar(x, y);
        }
    }

    function drawDavidStar(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y - 20);
        crc2.lineTo(_x + 20, _y + 10);
        crc2.lineTo(_x - 20, _y + 10);
        crc2.closePath();

        crc2.moveTo(_x, _y + 20);
        crc2.lineTo(_x + 20, _y - 10);
        crc2.lineTo(_x - 20, _y - 10);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }*/
}