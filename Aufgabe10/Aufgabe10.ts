/*  Aufgabe: Aufgabe 10: Classes: OO Seaworld
    Name: Franziska Heiﬂ
    Matrikel: 257745
    Datum: 24.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst erarbeitet*/

namespace Aufgabe10 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let fishGroup: Fish[] = [];
    let bubbleGroupOne: BubblesOne[] = [];
    let bubbleGroupTwo: BubblesTwo[] = [];
    let n: number = 8;

    let imgData: ImageData;


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");


        //Hintergrund 
        environment();

        //rechts
        for (let b: number = 0; b < 20; b++) {
            let bubbles: BubblesOne = new BubblesOne();
            bubbles.x = Math.random() * (730 - 760) + 760;           
            bubbles.y = Math.random() * 550;
            bubbles.radius = Math.random() * 10;
            bubbleGroupOne.push(bubbles);
        }

        //links
        for (let b: number = 0; b < 20; b++) {
            let bubbles: BubblesTwo = new BubblesTwo();
            bubbles.x = Math.random() * (200 - 250) + 250;
            bubbles.y = Math.random() * 550;
            bubbles.radius = Math.random() * 10;
            bubbleGroupTwo.push(bubbles);
        }

        for (let i: number = 0; i < n; i++) {
            let fish: Fish = new Fish();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            fishGroup.push(fish);
        }

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        animate();

    }


    function animate(): void {

        window.setTimeout(animate, 10);

        crc2.putImageData(imgData, 0, 0); // die Zahlen bestimmen den Ankerpunkt des Hintergrundes

        moveObjects();
        drawObjects();
    }

    
    // moveObjects-Funktion
    function moveObjects(): void {

        for (let i: number = 0; i < fishGroup.length; i++) {
            fishGroup[i].move();
        }

        for (let i: number = 0; i < bubbleGroupOne.length; i++) {
            bubbleGroupOne[i].moveBubbles();
        }

        for (let i: number = 0; i < bubbleGroupTwo.length; i++) {
            bubbleGroupTwo[i].moveBubbles();
        }
    }

    
    //drawObjects-Funktion
    function drawObjects(): void {
        
        for (let i: number = 0; i < fishGroup.length; i++) {
            fishGroup[i].draw();
        }
        for (let i: number = 0; i < bubbleGroupOne.length; i++) {
            bubbleGroupOne[i].drawBubbles();
        }

        for (let i: number = 0; i < bubbleGroupTwo.length; i++) {
            bubbleGroupTwo[i].drawBubbles();
        }
    }


    function environment(): void {

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

    function background(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "#63cfc6");
        gradient.addColorStop(1, "#003d66");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 1000, 700);

    }

    function sand(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(300, 700, 300, 500);
        gradient.addColorStop(0, "#cc9933");
        gradient.addColorStop(1, "#b28f4a");

        crc2.fillStyle = gradient;

        crc2.beginPath();
        crc2.moveTo(0, 550);
        crc2.quadraticCurveTo(120, 500, 300, 580);
        crc2.quadraticCurveTo(400, 625, 500, 635);
        crc2.quadraticCurveTo(630, 640, 700, 600);
        crc2.quadraticCurveTo(855, 500, 1000, 500);
        crc2.lineTo(1000, 700);
        crc2.lineTo(0, 700);
        crc2.closePath();
        crc2.strokeStyle = "rgb(204,153,51)";
        crc2.stroke();
        crc2.fill();
    }

    function anchor(_x: number, _y: number): void {

        //crc2.setTransform(1, 0.5, -0.5, 1, 200, 500);

        crc2.beginPath();
        crc2.arc(_x, _y, 12, 0, 2 * Math.PI);
        crc2.lineWidth = 7;
        crc2.closePath();
        crc2.strokeStyle = "rgb(21, 30, 30)";
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(_x - 5, _y + 10);
        crc2.lineTo(_x + 5, _y + 10);
        crc2.lineTo(_x + 5, _y + 30);
        crc2.lineTo(_x + 30, _y + 30);
        crc2.lineTo(_x + 25, _y + 40);
        crc2.lineTo(_x + 5, _y + 40);
        crc2.lineTo(_x + 5, _y + 90);
        crc2.quadraticCurveTo(_x + 10, _y + 105, _x + 40, _y + 80);
        crc2.lineTo(_x + 25, _y + 75);
        crc2.lineTo(_x + 55, _y + 70);
        crc2.lineTo(_x + 50, _y + 100);
        crc2.lineTo(_x + 45, _y + 85);
        crc2.quadraticCurveTo(_x, _y + 130, _x - 45, _y + 85);
        crc2.lineTo(_x - 50, _y + 100);
        crc2.lineTo(_x - 55, _y + 70);
        crc2.lineTo(_x - 25, _y + 75);
        crc2.lineTo(_x - 40, _y + 80);
        crc2.quadraticCurveTo(_x - 10, _y + 105, _x - 5, _y + 90);
        crc2.lineTo(_x - 5, _y + 40);
        crc2.lineTo(_x - 25, _y + 40);
        crc2.lineTo(_x - 30, _y + 30);
        crc2.lineTo(_x - 5, _y + 30);
        crc2.fillStyle = "rgb(21, 30, 30)";
        crc2.fill();
        crc2.closePath();
        crc2.strokeStyle = "transparent";
        crc2.stroke();
    }

    function chest(_x: number, _y: number): void {

        //part4
        crc2.fillStyle = "rgb(109, 77, 35)";

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 50);
        crc2.lineTo(_x + 60, _y + 50);
        crc2.lineTo(_x + 60, _y);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();

        //part3
        crc2.fillStyle = "rgb(89, 63, 29)";

        crc2.beginPath();
        crc2.moveTo(_x + 110, _y + 100);
        crc2.lineTo(_x + 60, _y + 50);
        crc2.lineTo(_x + 60, _y);
        crc2.lineTo(_x + 110, _y + 50);
        crc2.closePath();

        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();

        //part1
        crc2.fillStyle = "rgb(130, 89, 36)";

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y + 50);
        crc2.lineTo(_x + 40, _y + 100);
        crc2.lineTo(_x + 40, _y + 50);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();


        //part2
        crc2.fillStyle = "rgb(142, 100, 45)";

        crc2.beginPath();
        crc2.moveTo(_x + 40, _y + 50);
        crc2.lineTo(_x + 110, _y + 50);
        crc2.lineTo(_x + 110, _y + 100);
        crc2.lineTo(_x + 40, _y + 100);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();

        //part5 
        crc2.fillStyle = "rgb(114, 81, 39)";

        crc2.beginPath();
        crc2.moveTo(_x + 110, _y + 50);
        crc2.lineTo(_x + 160, _y + 10);
        crc2.lineTo(_x + 105, _y - 40);
        crc2.lineTo(_x + 60, _y);
        crc2.closePath();

        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();

        // Deckel 3D - vorne        
        crc2.fillStyle = "rgb(142, 100, 45)";

        crc2.beginPath();
        crc2.moveTo(_x + 110, _y + 50);
        crc2.quadraticCurveTo(_x + 150, _y + 50, _x + 160, _y + 10);
        crc2.closePath();

        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();

        // Deckel 3D - hinten        
        crc2.fillStyle = "rgb(99, 72, 36)";

        crc2.beginPath();
        crc2.moveTo(_x + 60, _y);
        crc2.quadraticCurveTo(_x + 100, _y, _x + 105, _y - 40);
        crc2.closePath();

        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();
    }

    function bigSeaGrass(_x: number, _y: number): void {

        crc2.fillStyle = "#336633";

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 15, _y - 30, _x, _y - 75);
        crc2.quadraticCurveTo(_x + 15, _y - 120, _x + 5, _y - 145);
        crc2.quadraticCurveTo(_x - 15, _y - 205, _x + 25, _y - 240);
        crc2.quadraticCurveTo(_x + 5, _y - 190, _x + 30, _y - 145);
        crc2.quadraticCurveTo(_x + 50, _y - 105, _x + 35, _y - 60);
        crc2.quadraticCurveTo(_x + 25, _y - 30, _x + 40, _y);
        crc2.closePath();
        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();

    }

    function smallSeaGrass(_x: number, _y: number): void {

        crc2.fillStyle = "#339933";

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x + 15, _y - 25, _x, _y - 55);
        crc2.quadraticCurveTo(_x - 10, _y - 75, _x + 5, _y - 95);
        crc2.quadraticCurveTo(_x + 20, _y - 120, _x, _y - 150);
        crc2.quadraticCurveTo(_x + 40, _y - 125, _x + 25, _y - 90);
        crc2.quadraticCurveTo(_x + 15, _y - 70, _x + 30, _y - 50);
        crc2.quadraticCurveTo(_x + 45, _y - 25, _x + 35, _y);
        crc2.closePath();

        crc2.fill();

        crc2.strokeStyle = "transparent";
        crc2.stroke();

    }

    function einstein(_x: number, _y: number): void {

        /*let gradient: CanvasGradient = crc2.createLinearGradient(100, 600, 300, 700);
        gradient.addColorStop(0, "#cc9933");
        gradient.addColorStop(1, "#b28f4a");
        
        crc2.fillStyle = gradient;*/

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 20, _y - 15);
        crc2.lineTo(_x + 70, _y - 10);
        crc2.lineTo(_x + 75, _y);
        crc2.lineTo(_x + 70, _y + 20);
        crc2.lineTo(_x + 30, _y + 30);
        crc2.lineTo(_x, _y + 20);
        crc2.lineTo(_x, _y);
        crc2.lineTo(_x + 30, _y + 10);
        crc2.lineTo(_x + 75, _y);
        crc2.lineTo(_x + 70, _y + 20);
        crc2.lineTo(_x + 30, _y + 30);
        crc2.lineTo(_x + 30, _y + 10);
        crc2.fillStyle = "rgb(166, 166, 166)";
        crc2.fill();
        crc2.closePath();
        crc2.strokeStyle = "rgb(102, 102, 102)";
        crc2.stroke();

    }

    function zweistein(_x: number, _y: number): void {

        /*let gradient: CanvasGradient = crc2.createLinearGradient(300, 700, 300, 500);
        gradient.addColorStop(0, "#cc9933");
        gradient.addColorStop(1, "#b28f4a");
        
        crc2.fillStyle = gradient;*/

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 15, _y - 10);
        crc2.lineTo(_x + 60, _y - 15);
        crc2.lineTo(_x + 75, _y);
        crc2.lineTo(_x + 80, _y + 20);
        crc2.lineTo(_x + 60, _y + 40);
        crc2.lineTo(_x + 15, _y + 45);
        crc2.lineTo(_x, _y + 30);
        crc2.lineTo(_x, _y);
        crc2.lineTo(_x + 15, _y + 20);
        crc2.lineTo(_x + 55, _y + 15);
        crc2.lineTo(_x + 75, _y);
        crc2.lineTo(_x + 80, _y + 20);
        crc2.lineTo(_x + 60, _y + 40);
        crc2.lineTo(_x + 55, _y + 15);
        crc2.lineTo(_x + 15, _y + 20);
        crc2.lineTo(_x + 15, _y + 45);
        crc2.lineTo(_x, _y + 30);
        crc2.fillStyle = "rgb(140, 140, 140)";
        crc2.fill();
        crc2.closePath();
        crc2.strokeStyle = "rgb(102, 102, 102)";
        crc2.stroke();

    }
  
}      