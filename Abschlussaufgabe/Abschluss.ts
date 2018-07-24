namespace AbschlussAufgabe {
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let imgData: ImageData;

    export let movingObjects: MovingObject[] = [];

    let plane: Paperplane = new Paperplane();
    movingObjects.push(plane);
    
    let canvasClick: HTMLCanvasElement;
    

    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //canvas.addEventListener("click", insertFood);

        //Hintergrund 
        environment();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        for (let b: number = 0; b < 5; b++) {
            let clouds: Cloud = new Cloud();
            movingObjects.push(clouds);
        }

        animate();

        canvasClick = <HTMLCanvasElement>document.getElementsByTagName("canvas")[0];
        canvasClick.addEventListener("mousedown", accelerate);
        canvasClick.addEventListener("touchstart", accelerate);
        console.log(canvasClick);
        function accelerate(): void {
            plane.gravity = -0.1;
            console.log("test");
        }
        
        canvasClick.addEventListener("mouseup", accelerate2);
        canvasClick.addEventListener("touchend", accelerate2);
        console.log(canvasClick);
        function accelerate2(): void {
            plane.gravity = 0.05;
            console.log("test2");
        }      
        
    }

    function animate(): void {

        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0); // die Zahlen bestimmen den Ankerpunkt des Hintergrundes

        moveObjects();
        drawObjects();
        newPosition();
    }

    // moveObjects-Funktion
    function moveObjects(): void {

        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].move();
        }
    }

    //drawObjects-Funktion
    function drawObjects(): void {

        for (let i: number = 0; i < movingObjects.length; i++) {
            movingObjects[i].draw();
        }
    }

    function newPosition(): void {
        plane.newPos();
    }



}//namespace