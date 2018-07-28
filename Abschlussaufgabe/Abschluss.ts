/*Aufgabe: Abschlussaufgabe
  Name: Franziska Heiﬂ
  Matrikel: 257745
  Datum: 28.07.18
    
  Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */

namespace AbschlussAufgabe {
    window.addEventListener("load", init);

    //Variablen definieren 
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let imgData: ImageData;

    export let movingObjects: MovingObject[] = [];
    export let collectables: Star[] = [];

    let plane: Paperplane = new Paperplane();

    export let score: number = 0;
    let node: HTMLDivElement;
    let writeScore: boolean = false;

    let canvasClick: HTMLCanvasElement;

    //init zeigt zu Beginn nur die Startseite an 
    export function init(): void {
        document.getElementById("start").addEventListener("click", startGame);
        document.getElementById("game").style.display = "none";
        document.getElementById("gameover").style.display = "none";
    }

    //Funktion blendet die Startseite aus und zeigt das Spiel an
    function startGame(_event: Event): void {

        document.getElementById("interface").style.display = "none";
        document.getElementById("game").style.display = "block";

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        //Hintergrund 
        environment();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //Wolken 
        for (let b: number = 0; b < 10; b++) {
            let clouds: Cloud = new Cloud();
            movingObjects.push(clouds);
        }

        //Stern
        let stars: Star = new Star();
        collectables.push(stars);

        animate();

        //EventListener f¸r die Fliegerbewegung 
        canvasClick = <HTMLCanvasElement>document.getElementsByTagName("canvas")[0];
        canvasClick.addEventListener("mousedown", accelerateUp);
        canvasClick.addEventListener("touchstart", accelerateUp);
        function accelerateUp(): void {
            plane.gravity = -0.1;
        }

        canvasClick.addEventListener("mouseup", accelerateDown);
        canvasClick.addEventListener("touchend", accelerateDown);
        function accelerateDown(): void {
            plane.gravity = 0.05;
        }
    }//init-Funktion 

    function animate(): void {

        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0); // die Zahlen bestimmen den Ankerpunkt des Hintergrundes

        moveObjects();
        drawObjects();
        plane.newPos();
    }//animate-Funktion 

    function moveObjects(): void {

        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].checkPosition();
            movingObjects[i].move();
            plane.checkPosition();
        }

        for (let a: number = 0; a < collectables.length; a++) {
            collectables[a].checkPosition();
            collectables[a].move();
        }
    }//movingObjects-Funktion 

    function drawObjects(): void {

        plane.draw();

        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }

        for (let a: number = 0; a < collectables.length; a++) {
            collectables[a].draw();
        }
    }//drawObjects-Funktion

    //ertstellt den Stern neu, wenn dieser eingesammelt wurde 
    export function createStar(): void {
        let stars: Star = new Star();
        collectables.push(stars);
    }

    //blendet die Game Over Seite ein und zeigt den persˆnlichen Score an 
    export function gameOver(): void {

        document.getElementById("interface").style.display = "none";
        document.getElementById("game").style.display = "none";
        document.getElementById("gameover").style.display = "block";

        if (!writeScore) {
            node = <HTMLDivElement>document.getElementById("yourscore");
            let content: string = "";
            content = "Your score: " + score;
            node.innerHTML += content;
            writeScore = true;
        }
    }
}//namespace