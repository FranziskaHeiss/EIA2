namespace AbschlussAufgabe {
    
    export function environment(): void {

        background();
   
    }

    function background(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 700);
        gradient.addColorStop(0, "#80c1ff");
        gradient.addColorStop(1, "#e6f3ff");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 854, 480);

    }

    


}//namespace