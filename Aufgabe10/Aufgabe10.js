/*  Aufgabe: Aufgabe 9: Canvas - Seaworld
    Name: Franziska Hei�
    Matrikel: 257745
    Datum: 17.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst erarbeitet*/
var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let fishGroup = [];
    let n = 8;
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10.crc2 = canvas.getContext("2d");
        console.log(Aufgabe10.crc2);
        //Hintergrund 
        environment();
        for (let b = 0; b < 20; b++) {
            let v = Math.random() * (730 - 760) + 760;
            let w = Math.random() * 590;
            let r = Math.random() * 10;
            bubbles(v, w, r);
        }
        for (let b = 0; b < 20; b++) {
            let v = Math.random() * (200 - 250) + 250;
            let w = Math.random() * 550;
            let r = Math.random() * 10;
            bubbles(v, w, r);
        }
        for (let i = 0; i < n; i++) {
            let fish = new Aufgabe10.Fish();
            fish.x = Math.random() * Aufgabe10.crc2.canvas.width;
            fish.y = Math.random() * Aufgabe10.crc2.canvas.height;
            fishGroup.push(fish);
        }
        imgData = Aufgabe10.crc2.getImageData(0, 0, canvas.width, canvas.height);
        animate();
    }
    function animate() {
        window.setTimeout(animate, 10);
        Aufgabe10.crc2.putImageData(imgData, 0, 0); // die Zahlen bestimmen den Ankerpunkt des Hintergrundes
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < fishGroup.length; i++) {
            fishGroup[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < fishGroup.length; i++)
            fishGroup[i].draw();
    }
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
    function background() {
        let gradient = Aufgabe10.crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "#63cfc6");
        gradient.addColorStop(1, "#003d66");
        Aufgabe10.crc2.fillStyle = gradient;
        Aufgabe10.crc2.fillRect(0, 0, 1000, 700);
    }
    function sand() {
        let gradient = Aufgabe10.crc2.createLinearGradient(300, 700, 300, 500);
        gradient.addColorStop(0, "#cc9933");
        gradient.addColorStop(1, "#b28f4a");
        Aufgabe10.crc2.fillStyle = gradient;
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, 550);
        Aufgabe10.crc2.quadraticCurveTo(120, 500, 300, 580);
        Aufgabe10.crc2.quadraticCurveTo(400, 625, 500, 635);
        Aufgabe10.crc2.quadraticCurveTo(630, 640, 700, 600);
        Aufgabe10.crc2.quadraticCurveTo(855, 500, 1000, 500);
        Aufgabe10.crc2.lineTo(1000, 700);
        Aufgabe10.crc2.lineTo(0, 700);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.strokeStyle = "rgb(204,153,51)";
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
    }
    function anchor(_x, _y) {
        //crc2.setTransform(1, 0.5, -0.5, 1, 200, 500);
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(_x, _y, 12, 0, 2 * Math.PI);
        Aufgabe10.crc2.lineWidth = 7;
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.strokeStyle = "rgb(21, 30, 30)";
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x - 5, _y + 10);
        Aufgabe10.crc2.lineTo(_x + 5, _y + 10);
        Aufgabe10.crc2.lineTo(_x + 5, _y + 30);
        Aufgabe10.crc2.lineTo(_x + 30, _y + 30);
        Aufgabe10.crc2.lineTo(_x + 25, _y + 40);
        Aufgabe10.crc2.lineTo(_x + 5, _y + 40);
        Aufgabe10.crc2.lineTo(_x + 5, _y + 90);
        Aufgabe10.crc2.quadraticCurveTo(_x + 10, _y + 105, _x + 40, _y + 80);
        Aufgabe10.crc2.lineTo(_x + 25, _y + 75);
        Aufgabe10.crc2.lineTo(_x + 55, _y + 70);
        Aufgabe10.crc2.lineTo(_x + 50, _y + 100);
        Aufgabe10.crc2.lineTo(_x + 45, _y + 85);
        Aufgabe10.crc2.quadraticCurveTo(_x, _y + 130, _x - 45, _y + 85);
        Aufgabe10.crc2.lineTo(_x - 50, _y + 100);
        Aufgabe10.crc2.lineTo(_x - 55, _y + 70);
        Aufgabe10.crc2.lineTo(_x - 25, _y + 75);
        Aufgabe10.crc2.lineTo(_x - 40, _y + 80);
        Aufgabe10.crc2.quadraticCurveTo(_x - 10, _y + 105, _x - 5, _y + 90);
        Aufgabe10.crc2.lineTo(_x - 5, _y + 40);
        Aufgabe10.crc2.lineTo(_x - 25, _y + 40);
        Aufgabe10.crc2.lineTo(_x - 30, _y + 30);
        Aufgabe10.crc2.lineTo(_x - 5, _y + 30);
        Aufgabe10.crc2.fillStyle = "rgb(21, 30, 30)";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.strokeStyle = "transparent";
        Aufgabe10.crc2.stroke();
    }
    function chest(_x, _y) {
        //part4
        Aufgabe10.crc2.fillStyle = "rgb(109, 77, 35)";
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x, _y + 50);
        Aufgabe10.crc2.lineTo(_x + 60, _y + 50);
        Aufgabe10.crc2.lineTo(_x + 60, _y);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.strokeStyle = "transparent";
        Aufgabe10.crc2.stroke();
        //part3
        Aufgabe10.crc2.fillStyle = "rgb(89, 63, 29)";
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x + 110, _y + 100);
        Aufgabe10.crc2.lineTo(_x + 60, _y + 50);
        Aufgabe10.crc2.lineTo(_x + 60, _y);
        Aufgabe10.crc2.lineTo(_x + 110, _y + 50);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.strokeStyle = "transparent";
        Aufgabe10.crc2.stroke();
        //part1
        Aufgabe10.crc2.fillStyle = "rgb(130, 89, 36)";
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x, _y + 50);
        Aufgabe10.crc2.lineTo(_x + 40, _y + 100);
        Aufgabe10.crc2.lineTo(_x + 40, _y + 50);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.strokeStyle = "transparent";
        Aufgabe10.crc2.stroke();
        //part2
        Aufgabe10.crc2.fillStyle = "rgb(142, 100, 45)";
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x + 40, _y + 50);
        Aufgabe10.crc2.lineTo(_x + 110, _y + 50);
        Aufgabe10.crc2.lineTo(_x + 110, _y + 100);
        Aufgabe10.crc2.lineTo(_x + 40, _y + 100);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.strokeStyle = "transparent";
        Aufgabe10.crc2.stroke();
        //part5 
        Aufgabe10.crc2.fillStyle = "rgb(114, 81, 39)";
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x + 110, _y + 50);
        Aufgabe10.crc2.lineTo(_x + 160, _y + 10);
        Aufgabe10.crc2.lineTo(_x + 105, _y - 40);
        Aufgabe10.crc2.lineTo(_x + 60, _y);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.strokeStyle = "transparent";
        Aufgabe10.crc2.stroke();
        // Deckel 3D - vorne        
        Aufgabe10.crc2.fillStyle = "rgb(142, 100, 45)";
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x + 110, _y + 50);
        Aufgabe10.crc2.quadraticCurveTo(_x + 150, _y + 50, _x + 160, _y + 10);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.strokeStyle = "transparent";
        Aufgabe10.crc2.stroke();
        // Deckel 3D - hinten        
        Aufgabe10.crc2.fillStyle = "rgb(99, 72, 36)";
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x + 60, _y);
        Aufgabe10.crc2.quadraticCurveTo(_x + 100, _y, _x + 105, _y - 40);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.strokeStyle = "transparent";
        Aufgabe10.crc2.stroke();
    }
    function bigSeaGrass(_x, _y) {
        Aufgabe10.crc2.fillStyle = "#336633";
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.quadraticCurveTo(_x - 15, _y - 30, _x, _y - 75);
        Aufgabe10.crc2.quadraticCurveTo(_x + 15, _y - 120, _x + 5, _y - 145);
        Aufgabe10.crc2.quadraticCurveTo(_x - 15, _y - 205, _x + 25, _y - 240);
        Aufgabe10.crc2.quadraticCurveTo(_x + 5, _y - 190, _x + 30, _y - 145);
        Aufgabe10.crc2.quadraticCurveTo(_x + 50, _y - 105, _x + 35, _y - 60);
        Aufgabe10.crc2.quadraticCurveTo(_x + 25, _y - 30, _x + 40, _y);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.strokeStyle = "transparent";
        Aufgabe10.crc2.stroke();
    }
    function smallSeaGrass(_x, _y) {
        Aufgabe10.crc2.fillStyle = "#339933";
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.quadraticCurveTo(_x + 15, _y - 25, _x, _y - 55);
        Aufgabe10.crc2.quadraticCurveTo(_x - 10, _y - 75, _x + 5, _y - 95);
        Aufgabe10.crc2.quadraticCurveTo(_x + 20, _y - 120, _x, _y - 150);
        Aufgabe10.crc2.quadraticCurveTo(_x + 40, _y - 125, _x + 25, _y - 90);
        Aufgabe10.crc2.quadraticCurveTo(_x + 15, _y - 70, _x + 30, _y - 50);
        Aufgabe10.crc2.quadraticCurveTo(_x + 45, _y - 25, _x + 35, _y);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.strokeStyle = "transparent";
        Aufgabe10.crc2.stroke();
    }
    function einstein(_x, _y) {
        /*let gradient: CanvasGradient = crc2.createLinearGradient(100, 600, 300, 700);
        gradient.addColorStop(0, "#cc9933");
        gradient.addColorStop(1, "#b28f4a");
        
        crc2.fillStyle = gradient;*/
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x + 20, _y - 15);
        Aufgabe10.crc2.lineTo(_x + 70, _y - 10);
        Aufgabe10.crc2.lineTo(_x + 75, _y);
        Aufgabe10.crc2.lineTo(_x + 70, _y + 20);
        Aufgabe10.crc2.lineTo(_x + 30, _y + 30);
        Aufgabe10.crc2.lineTo(_x, _y + 20);
        Aufgabe10.crc2.lineTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x + 30, _y + 10);
        Aufgabe10.crc2.lineTo(_x + 75, _y);
        Aufgabe10.crc2.lineTo(_x + 70, _y + 20);
        Aufgabe10.crc2.lineTo(_x + 30, _y + 30);
        Aufgabe10.crc2.lineTo(_x + 30, _y + 10);
        Aufgabe10.crc2.fillStyle = "rgb(166, 166, 166)";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.strokeStyle = "rgb(102, 102, 102)";
        Aufgabe10.crc2.stroke();
    }
    function zweistein(_x, _y) {
        /*let gradient: CanvasGradient = crc2.createLinearGradient(300, 700, 300, 500);
        gradient.addColorStop(0, "#cc9933");
        gradient.addColorStop(1, "#b28f4a");
        
        crc2.fillStyle = gradient;*/
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x + 15, _y - 10);
        Aufgabe10.crc2.lineTo(_x + 60, _y - 15);
        Aufgabe10.crc2.lineTo(_x + 75, _y);
        Aufgabe10.crc2.lineTo(_x + 80, _y + 20);
        Aufgabe10.crc2.lineTo(_x + 60, _y + 40);
        Aufgabe10.crc2.lineTo(_x + 15, _y + 45);
        Aufgabe10.crc2.lineTo(_x, _y + 30);
        Aufgabe10.crc2.lineTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x + 15, _y + 20);
        Aufgabe10.crc2.lineTo(_x + 55, _y + 15);
        Aufgabe10.crc2.lineTo(_x + 75, _y);
        Aufgabe10.crc2.lineTo(_x + 80, _y + 20);
        Aufgabe10.crc2.lineTo(_x + 60, _y + 40);
        Aufgabe10.crc2.lineTo(_x + 55, _y + 15);
        Aufgabe10.crc2.lineTo(_x + 15, _y + 20);
        Aufgabe10.crc2.lineTo(_x + 15, _y + 45);
        Aufgabe10.crc2.lineTo(_x, _y + 30);
        Aufgabe10.crc2.fillStyle = "rgb(140, 140, 140)";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.strokeStyle = "rgb(102, 102, 102)";
        Aufgabe10.crc2.stroke();
    }
    function bubbles(_x, _y, _r) {
        Aufgabe10.crc2.fillStyle = "rgb(206, 220, 226, 0.6)";
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.arc(_x, _y, _r, 0, 2 * Math.PI);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.strokeStyle = "transparent";
        Aufgabe10.crc2.stroke();
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Aufgabe10.js.map