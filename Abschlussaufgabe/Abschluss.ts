namespace AbschlussAufgabe {
    window.addEventListener("load", init);

    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let imgData: ImageData;
    let breite: number = <number>(window.innerWidth);
    let hoehe: number = <number>(window.innerHeight);

    //export let movingObjects: MovingObject[] = [];

    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        //canvas.addEventListener("click", insertFood);

        //Hintergrund 
        environment();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        if (breite < hoehe) {
            canvas.style.setProperty("height", 0.95 * hoehe + "px");
        } else if (hoehe < breite) {
            canvas.style.setProperty("width", 0.95 * breite + "px");
        }

    }

}//namespace