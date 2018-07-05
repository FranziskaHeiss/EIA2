/*  Aufgabe: Aufgabe 11: Inheritance: Seaworld
    Name: Franziska Heiﬂ
    Matrikel: 257745
    Datum: 28.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst und Sofia Gschwend erarbeitet*/

namespace Vorbereitung {
    
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let stars: DavidStar[] = [];
    let n: number = 15;

    //let rects: Rect[] = [];
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        canvas.addEventListener("click", insertNewObject);

        for (let i: number = 0; i < n; i++) {
            let star: DavidStar = new DavidStar("#2BFF34");
            stars.push(star);

            let rect: Rect = new Rect("#E8D848");
            stars.push(rect);
        }

        animate();
    }

    function insertNewObject(_event: MouseEvent): void {
        let randomObject: number = Math.floor(Math.random() * 3);
        let newPositionX: number = _event.clientX;
        let newPositionY: number = _event.clientY;

        switch (randomObject) {
            case 0:
                let star: DavidStar = new DavidStar("#28B2AA");
                star.x = newPositionX;
                star.y = newPositionY;
                stars.push(star);
                break;

            case 1:
                let rect: Rect = new Rect("#FF8721");
                rect.x = newPositionX;
                rect.y = newPositionY;
                stars.push(rect);
                break;

            case 2:
                let blueDavidStar: DavidStarBlue = new DavidStarBlue("#D331FF");
                blueDavidStar.x = newPositionX;
                blueDavidStar.y = newPositionY;
                stars.push(blueDavidStar);
                break;
        }
    }

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
}