var Aufgabe11;
(function (Aufgabe11) {
    function environment() {
        background();
        bigSeaGrass(700, 590);
        smallSeaGrass(740, 590);
        smallSeaGrass(680, 640);
        bigSeaGrass(160, 640);
        bigSeaGrass(260, 590);
        smallSeaGrass(200, 590);
        sand();
        bigSeaGrass(0, 740);
        smallSeaGrass(30, 710);
        zweistein(100, 560);
        einstein(150, 590);
        chest(700, 560);
        anchor(300, 550);
    }
    Aufgabe11.environment = environment;
    function background() {
        let gradient = Aufgabe11.crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "#63cfc6");
        gradient.addColorStop(1, "#003d66");
        Aufgabe11.crc2.fillStyle = gradient;
        Aufgabe11.crc2.fillRect(0, 0, 1000, 700);
    }
    function sand() {
        let gradient = Aufgabe11.crc2.createLinearGradient(300, 700, 300, 500);
        gradient.addColorStop(0, "#cc9933");
        gradient.addColorStop(1, "#b28f4a");
        Aufgabe11.crc2.fillStyle = gradient;
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(0, 550);
        Aufgabe11.crc2.quadraticCurveTo(120, 500, 300, 580);
        Aufgabe11.crc2.quadraticCurveTo(400, 625, 500, 635);
        Aufgabe11.crc2.quadraticCurveTo(630, 640, 700, 600);
        Aufgabe11.crc2.quadraticCurveTo(855, 500, 1000, 500);
        Aufgabe11.crc2.lineTo(1000, 700);
        Aufgabe11.crc2.lineTo(0, 700);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.strokeStyle = "rgb(204,153,51)";
        Aufgabe11.crc2.stroke();
        Aufgabe11.crc2.fill();
    }
    function anchor(_x, _y) {
        //crc2.setTransform(1, 0.5, -0.5, 1, 200, 500);
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.arc(_x, _y, 12, 0, 2 * Math.PI);
        Aufgabe11.crc2.lineWidth = 7;
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.strokeStyle = "rgb(21, 30, 30)";
        Aufgabe11.crc2.stroke();
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x - 5, _y + 10);
        Aufgabe11.crc2.lineTo(_x + 5, _y + 10);
        Aufgabe11.crc2.lineTo(_x + 5, _y + 30);
        Aufgabe11.crc2.lineTo(_x + 30, _y + 30);
        Aufgabe11.crc2.lineTo(_x + 25, _y + 40);
        Aufgabe11.crc2.lineTo(_x + 5, _y + 40);
        Aufgabe11.crc2.lineTo(_x + 5, _y + 90);
        Aufgabe11.crc2.quadraticCurveTo(_x + 10, _y + 105, _x + 40, _y + 80);
        Aufgabe11.crc2.lineTo(_x + 25, _y + 75);
        Aufgabe11.crc2.lineTo(_x + 55, _y + 70);
        Aufgabe11.crc2.lineTo(_x + 50, _y + 100);
        Aufgabe11.crc2.lineTo(_x + 45, _y + 85);
        Aufgabe11.crc2.quadraticCurveTo(_x, _y + 130, _x - 45, _y + 85);
        Aufgabe11.crc2.lineTo(_x - 50, _y + 100);
        Aufgabe11.crc2.lineTo(_x - 55, _y + 70);
        Aufgabe11.crc2.lineTo(_x - 25, _y + 75);
        Aufgabe11.crc2.lineTo(_x - 40, _y + 80);
        Aufgabe11.crc2.quadraticCurveTo(_x - 10, _y + 105, _x - 5, _y + 90);
        Aufgabe11.crc2.lineTo(_x - 5, _y + 40);
        Aufgabe11.crc2.lineTo(_x - 25, _y + 40);
        Aufgabe11.crc2.lineTo(_x - 30, _y + 30);
        Aufgabe11.crc2.lineTo(_x - 5, _y + 30);
        Aufgabe11.crc2.fillStyle = "rgb(21, 30, 30)";
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.strokeStyle = "transparent";
        Aufgabe11.crc2.stroke();
    }
    function chest(_x, _y) {
        //part4
        Aufgabe11.crc2.fillStyle = "rgb(109, 77, 35)";
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.lineTo(_x, _y + 50);
        Aufgabe11.crc2.lineTo(_x + 60, _y + 50);
        Aufgabe11.crc2.lineTo(_x + 60, _y);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.strokeStyle = "transparent";
        Aufgabe11.crc2.stroke();
        //part3
        Aufgabe11.crc2.fillStyle = "rgb(89, 63, 29)";
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x + 110, _y + 100);
        Aufgabe11.crc2.lineTo(_x + 60, _y + 50);
        Aufgabe11.crc2.lineTo(_x + 60, _y);
        Aufgabe11.crc2.lineTo(_x + 110, _y + 50);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.strokeStyle = "transparent";
        Aufgabe11.crc2.stroke();
        //part1
        Aufgabe11.crc2.fillStyle = "rgb(130, 89, 36)";
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.lineTo(_x, _y + 50);
        Aufgabe11.crc2.lineTo(_x + 40, _y + 100);
        Aufgabe11.crc2.lineTo(_x + 40, _y + 50);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.strokeStyle = "transparent";
        Aufgabe11.crc2.stroke();
        //part2
        Aufgabe11.crc2.fillStyle = "rgb(142, 100, 45)";
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x + 40, _y + 50);
        Aufgabe11.crc2.lineTo(_x + 110, _y + 50);
        Aufgabe11.crc2.lineTo(_x + 110, _y + 100);
        Aufgabe11.crc2.lineTo(_x + 40, _y + 100);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.strokeStyle = "transparent";
        Aufgabe11.crc2.stroke();
        //part5 
        Aufgabe11.crc2.fillStyle = "rgb(114, 81, 39)";
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x + 110, _y + 50);
        Aufgabe11.crc2.lineTo(_x + 160, _y + 10);
        Aufgabe11.crc2.lineTo(_x + 105, _y - 40);
        Aufgabe11.crc2.lineTo(_x + 60, _y);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.strokeStyle = "transparent";
        Aufgabe11.crc2.stroke();
        // Deckel 3D - vorne        
        Aufgabe11.crc2.fillStyle = "rgb(142, 100, 45)";
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x + 110, _y + 50);
        Aufgabe11.crc2.quadraticCurveTo(_x + 150, _y + 50, _x + 160, _y + 10);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.strokeStyle = "transparent";
        Aufgabe11.crc2.stroke();
        // Deckel 3D - hinten        
        Aufgabe11.crc2.fillStyle = "rgb(99, 72, 36)";
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x + 60, _y);
        Aufgabe11.crc2.quadraticCurveTo(_x + 100, _y, _x + 105, _y - 40);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.strokeStyle = "transparent";
        Aufgabe11.crc2.stroke();
    }
    function bigSeaGrass(_x, _y) {
        Aufgabe11.crc2.fillStyle = "#336633";
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.quadraticCurveTo(_x - 15, _y - 30, _x, _y - 75);
        Aufgabe11.crc2.quadraticCurveTo(_x + 15, _y - 120, _x + 5, _y - 145);
        Aufgabe11.crc2.quadraticCurveTo(_x - 15, _y - 205, _x + 25, _y - 240);
        Aufgabe11.crc2.quadraticCurveTo(_x + 5, _y - 190, _x + 30, _y - 145);
        Aufgabe11.crc2.quadraticCurveTo(_x + 50, _y - 105, _x + 35, _y - 60);
        Aufgabe11.crc2.quadraticCurveTo(_x + 25, _y - 30, _x + 40, _y);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.strokeStyle = "transparent";
        Aufgabe11.crc2.stroke();
    }
    function smallSeaGrass(_x, _y) {
        Aufgabe11.crc2.fillStyle = "#339933";
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.quadraticCurveTo(_x + 15, _y - 25, _x, _y - 55);
        Aufgabe11.crc2.quadraticCurveTo(_x - 10, _y - 75, _x + 5, _y - 95);
        Aufgabe11.crc2.quadraticCurveTo(_x + 20, _y - 120, _x, _y - 150);
        Aufgabe11.crc2.quadraticCurveTo(_x + 40, _y - 125, _x + 25, _y - 90);
        Aufgabe11.crc2.quadraticCurveTo(_x + 15, _y - 70, _x + 30, _y - 50);
        Aufgabe11.crc2.quadraticCurveTo(_x + 45, _y - 25, _x + 35, _y);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.strokeStyle = "transparent";
        Aufgabe11.crc2.stroke();
    }
    function einstein(_x, _y) {
        /*let gradient: CanvasGradient = crc2.createLinearGradient(100, 600, 300, 700);
        gradient.addColorStop(0, "#cc9933");
        gradient.addColorStop(1, "#b28f4a");
        
        crc2.fillStyle = gradient;*/
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.lineTo(_x + 20, _y - 15);
        Aufgabe11.crc2.lineTo(_x + 70, _y - 10);
        Aufgabe11.crc2.lineTo(_x + 75, _y);
        Aufgabe11.crc2.lineTo(_x + 70, _y + 20);
        Aufgabe11.crc2.lineTo(_x + 30, _y + 30);
        Aufgabe11.crc2.lineTo(_x, _y + 20);
        Aufgabe11.crc2.lineTo(_x, _y);
        Aufgabe11.crc2.lineTo(_x + 30, _y + 10);
        Aufgabe11.crc2.lineTo(_x + 75, _y);
        Aufgabe11.crc2.lineTo(_x + 70, _y + 20);
        Aufgabe11.crc2.lineTo(_x + 30, _y + 30);
        Aufgabe11.crc2.lineTo(_x + 30, _y + 10);
        Aufgabe11.crc2.fillStyle = "rgb(166, 166, 166)";
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.strokeStyle = "rgb(102, 102, 102)";
        Aufgabe11.crc2.stroke();
    }
    function zweistein(_x, _y) {
        /*let gradient: CanvasGradient = crc2.createLinearGradient(300, 700, 300, 500);
        gradient.addColorStop(0, "#cc9933");
        gradient.addColorStop(1, "#b28f4a");
        
        crc2.fillStyle = gradient;*/
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.lineTo(_x + 15, _y - 10);
        Aufgabe11.crc2.lineTo(_x + 60, _y - 15);
        Aufgabe11.crc2.lineTo(_x + 75, _y);
        Aufgabe11.crc2.lineTo(_x + 80, _y + 20);
        Aufgabe11.crc2.lineTo(_x + 60, _y + 40);
        Aufgabe11.crc2.lineTo(_x + 15, _y + 45);
        Aufgabe11.crc2.lineTo(_x, _y + 30);
        Aufgabe11.crc2.lineTo(_x, _y);
        Aufgabe11.crc2.lineTo(_x + 15, _y + 20);
        Aufgabe11.crc2.lineTo(_x + 55, _y + 15);
        Aufgabe11.crc2.lineTo(_x + 75, _y);
        Aufgabe11.crc2.lineTo(_x + 80, _y + 20);
        Aufgabe11.crc2.lineTo(_x + 60, _y + 40);
        Aufgabe11.crc2.lineTo(_x + 55, _y + 15);
        Aufgabe11.crc2.lineTo(_x + 15, _y + 20);
        Aufgabe11.crc2.lineTo(_x + 15, _y + 45);
        Aufgabe11.crc2.lineTo(_x, _y + 30);
        Aufgabe11.crc2.fillStyle = "rgb(140, 140, 140)";
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.strokeStyle = "rgb(102, 102, 102)";
        Aufgabe11.crc2.stroke();
    }
})(Aufgabe11 || (Aufgabe11 = {})); //namespace
//# sourceMappingURL=Background.js.map