/*  Aufgabe: Aufgabe 11: Inheritance: Seaworld
    Name: Franziska Heiﬂ
    Matrikel: 257745
    Datum: 28.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst, Anna Lotz und Sofia Gschwend erarbeitet*/

namespace Aufgabe11 {

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let movingObjects: MovingObjects[] = [];
    let n: number = 8;


    let canvas: HTMLCanvasElement;
    let imgData: ImageData;


    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", insertFood);

        //Hintergrund 
        environment();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        //rechts
        for (let b: number = 0; b < 20; b++) {
            let bubbles: BubbleOne = new BubbleOne();
            movingObjects.push(bubbles);
        }

        //links
        for (let b: number = 0; b < 20; b++) {
            let bubbles: BubbleTwo = new BubbleTwo();
            movingObjects.push(bubbles);
        }


        for (let i: number = 0; i < n; i++) {
            let fish: Fish = new Fish();
            movingObjects.push(fish);
        }


        animate();

    }

    function insertFood(_event: MouseEvent): void {
        
        let newPositionX: number = _event.clientX;
        let newPositionY: number = _event.clientY;

        
        for (let i: number = 0; i < 4; i++) {
            let flakes: Flake = new Flake(newPositionX, newPositionY);
            movingObjects.push(flakes);
            newPositionX += Math.random() * 60; 
            newPositionX -= Math.random() * 60; 
            newPositionY += Math.random() * 30;         
        } 
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