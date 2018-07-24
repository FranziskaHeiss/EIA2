namespace AbschlussAufgabe {
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let imgData: ImageData;
    //let breite: number = <number>(window.innerWidth);
    //let hoehe: number = <number>(window.innerHeight);

    export let movingObjects: MovingObject[] = [];

    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //canvas.addEventListener("click", insertFood);

        //Hintergrund 
        environment();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        /*if (breite > hoehe) {
            canvas.style.setProperty("height", 0.95 * hoehe + "px");
        } else if (hoehe > breite) {
            canvas.style.setProperty("width", 0.95 * breite + "px");
        }*/

        /*for (let i: number = 0; i < 1; i++) {*/
        let flieger: Papierflieger = new Papierflieger();
        movingObjects.push(flieger);
        
        for (let b: number = 0; b < 5; b++) {
            let wolken: Wolke = new Wolke();
            movingObjects.push(wolken);
        }
            
        animate();
    }

    function animate(): void {

        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0); // die Zahlen bestimmen den Ankerpunkt des Hintergrundes

        moveObjects();
        drawObjects();
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

}//namespace