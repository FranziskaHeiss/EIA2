namespace AbschlussAufgabe {
    
    export function environment(): void {

        background();
   
    }

    function background(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 500);
        gradient.addColorStop(0, "#63cfc6");
        gradient.addColorStop(1, "#003d66");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 720, 360);

    }

    


}//namespace