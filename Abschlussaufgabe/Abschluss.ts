namespace AbschlussAufgabe {
    window.addEventListener("load", init);

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


    export function init(): void {
        document.getElementById("start").addEventListener("click", startGame);
        document.getElementById("game").style.display = "none";
        document.getElementById("gameover").style.display = "none";
    }

    function startGame(_event: Event): void {

        document.getElementById("interface").style.display = "none";
        document.getElementById("game").style.display = "block";

        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");

        //Hintergrund 
        environment();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let b: number = 0; b < 10; b++) {
            let clouds: Cloud = new Cloud();
            movingObjects.push(clouds);
        }

        //for (let i: number = 0; i < 2; i++) {
        let stars: Star = new Star();
        collectables.push(stars);


        animate();

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
    }// init-Funktion 

    function animate(): void {

        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0); // die Zahlen bestimmen den Ankerpunkt des Hintergrundes

        moveObjects();
        drawObjects();
        newPosition();
    }// animate-Funktion 

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
    }// movingObjects-Funktion 

    function drawObjects(): void {

        plane.draw();

        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }

        for (let a: number = 0; a < collectables.length; a++) {
            collectables[a].draw();
        }
    }//drawObjects-Funktion

    export function createObjects(): void {
        let stars: Star = new Star();
        collectables.push(stars);
    }

    function newPosition(): void {
        plane.newPos();
    }// newPosition-Funktion 


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