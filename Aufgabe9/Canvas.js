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
        chest();
        anchor();
        for (let i = 0; i < 7; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            fish(x, y);
        }
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
    function fish(_x, _y) {
        crc2.fillStyle = "rgb(255,0,0)";
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x + 30, _y + 30, _x + 60, _y);
        crc2.lineTo(_x + 80, _y + 14);
        crc2.quadraticCurveTo(_x + 65, _y - 5, _x + 80, _y - 20);
        crc2.lineTo(_x + 60, _y - 5);
        crc2.quadraticCurveTo(_x + 28, _y - 35, _x, _y);
        crc2.strokeStyle = "rgb(255,0,0)";
        crc2.stroke();
        crc2.fill();
    }
    function anchor() {
        crc2.fillStyle = "rgb(0,0,0)";
        crc2.beginPath();
        crc2.moveTo(50, 50);
        crc2.lineTo(50, 80);
        crc2.quadraticCurveTo(35, 100, 20, 80);
        crc2.lineTo(15, 85);
        crc2.quadraticCurveTo(50, 115, 90, 85);
        crc2.lineTo(85, 80);
        crc2.quadraticCurveTo(70, 100, 55, 80);
        crc2.lineTo(55, 50);
        crc2.lineTo(60, 50);
        crc2.lineTo(60, 45);
        crc2.lineTo(55, 45);
        crc2.lineTo(55, 40);
        crc2.lineTo(50, 40);
        crc2.lineTo(50, 45);
        crc2.lineTo(45, 45);
        crc2.lineTo(45, 50);
        crc2.closePath();
        crc2.strokeStyle = "rgb(0,0,0)";
        crc2.stroke();
        crc2.fill();
    }
    function chest() {
        //part4
        crc2.fillStyle = "rgb(109, 77, 35)";
        crc2.beginPath();
        crc2.moveTo(700, 560);
        crc2.lineTo(700, 610);
        crc2.lineTo(750, 610);
        crc2.lineTo(750, 560);
        crc2.closePath();
        crc2.fill();
        crc2.strokeStyle = "transparent";
        crc2.stroke();
        //part3
        crc2.fillStyle = "rgb(89, 63, 29)";
        crc2.beginPath();
        crc2.moveTo(800, 660);
        crc2.lineTo(750, 610);
        crc2.lineTo(750, 560);
        crc2.lineTo(800, 610);
        crc2.closePath();
        crc2.fill();
        crc2.strokeStyle = "transparent";
        crc2.stroke();
        //part1
        crc2.fillStyle = "rgb(130, 89, 36)";
        crc2.beginPath();
        crc2.moveTo(700, 560);
        crc2.lineTo(700, 610);
        crc2.lineTo(750, 660);
        crc2.lineTo(750, 610);
        crc2.closePath();
        crc2.fill();
        crc2.strokeStyle = "transparent";
        crc2.stroke();
        //part2
        crc2.fillStyle = "rgb(142, 100, 45)";
        crc2.beginPath();
        crc2.moveTo(750, 610);
        crc2.lineTo(800, 610);
        crc2.lineTo(800, 660);
        crc2.lineTo(750, 660);
        crc2.closePath();
        crc2.fill();
        crc2.strokeStyle = "transparent";
        crc2.stroke();
        //part5 
        crc2.fillStyle = "rgb(114, 81, 39)";
        crc2.beginPath();
        crc2.moveTo(800, 610);
        crc2.lineTo(825, 570);
        crc2.lineTo(775, 520);
        crc2.lineTo(750, 560);
        crc2.closePath();
        crc2.fill();
        crc2.strokeStyle = "transparent";
        crc2.stroke();
        // Deckel 3D - vorne        
        crc2.fillStyle = "rgb(142, 100, 45)";
        crc2.beginPath();
        crc2.moveTo(800, 610);
        crc2.quadraticCurveTo(830, 600, 825, 570);
        crc2.closePath();
        crc2.fill();
        crc2.strokeStyle = "transparent";
        crc2.stroke();
        // Deckel 3D - hinten        
        crc2.fillStyle = "rgb(99, 72, 36)";
        crc2.beginPath();
        crc2.moveTo(750, 560);
        crc2.quadraticCurveTo(780, 550, 775, 520);
        crc2.closePath();
        crc2.fill();
        crc2.strokeStyle = "transparent";
        crc2.stroke();
    }
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=Canvas.js.map