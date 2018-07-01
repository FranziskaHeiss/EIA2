/*  Aufgabe: Aufgabe 11: Inheritance: Seaworld
    Name: Franziska Hei�
    Matrikel: 257745
    Datum: 28.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst und Sofia Gschwend erarbeitet*/
var Vorbereitung;
(function (Vorbereitung) {
    window.addEventListener("load", init);
    let stars = [];
    let n = 15;
    //let rects: Rect[] = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Vorbereitung.crc2 = canvas.getContext("2d");
        console.log(Vorbereitung.crc2);
        canvas.addEventListener("click", insertNewObject);
        for (let i = 0; i < n; i++) {
            let star = new Vorbereitung.DavidStar("#2BFF34");
            stars.push(star);
            let rect = new Vorbereitung.Rect("#E8D848");
            stars.push(rect);
        }
        animate();
    }
    function insertNewObject(_event) {
        let randomObject = Math.floor(Math.random() * 3);
        let newPositionX = _event.clientX;
        let newPositonY = _event.clientY;
        switch (randomObject) {
            case 0:
                let star = new Vorbereitung.DavidStar("#28B2AA");
                star.x = newPositionX;
                star.y = newPositonY;
                stars.push(star);
                break;
            case 1:
                let rect = new Vorbereitung.Rect("#FF8721");
                rect.x = newPositionX;
                rect.y = newPositonY;
                stars.push(rect);
                break;
            case 2:
                let blueDavidStar = new Vorbereitung.DavidStarBlue("#D331FF");
                blueDavidStar.x = newPositionX;
                blueDavidStar.y = newPositonY;
                stars.push(blueDavidStar);
                break;
        }
    }
    function animate() {
        window.setTimeout(animate, 10);
        Vorbereitung.crc2.clearRect(0, 0, Vorbereitung.crc2.canvas.width, Vorbereitung.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(Vorbereitung || (Vorbereitung = {}));
//# sourceMappingURL=Animation.js.map