namespace L09_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        background();
        sand();


        /*for (let i: number = 0; i < 100; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            drawDavidStar(x, y);
        }*/
    }

    function background(): void {
        crc2.fillStyle = "rgba(0,153,204)";
        crc2.fillRect(0, 0, 1000, 700);
    }

    function sand(): void {  
    
        crc2.fillStyle = "rgb(255,204,51)";
        
        crc2.beginPath();
        crc2.moveTo(0, 550);
        crc2.quadraticCurveTo(120, 500, 300, 580);
        crc2.quadraticCurveTo(400, 625, 500, 635);
        crc2.quadraticCurveTo(630, 640, 700, 600);
        crc2.quadraticCurveTo(855, 500, 1000, 500);
        crc2.lineTo(1000, 700);
        crc2.lineTo(0, 700);
        crc2.closePath();
        crc2.strokeStyle = "rgb(255,204,51)";
        crc2.stroke();     
        crc2.fill();
    }

    
    
    /*<canvas id="myCanvas" width="1000" height="700" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>

<script>

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
        ctx.moveTo(0, 550);
        ctx.quadraticCurveTo(120, 500, 300, 580);
        ctx.quadraticCurveTo(400, 625, 500, 635);
        ctx.quadraticCurveTo(630, 640, 700, 600);
        ctx.quadraticCurveTo(855, 500, 1000, 500);
        ctx.lineTo(1000, 700);
        ctx.lineTo(0, 700);
        ctx.closePath();        
        ctx.stroke();   


ctx.beginPath();
        ctx.moveTo(550, 635);
        ctx.quadraticCurveTo(560, 600, 550, 570); 
        ctx.quadraticCurveTo(540, 540, 555, 510);
        ctx.quadraticCurveTo(540, 500, 540, 570);
        ctx.stroke();   
</script> 
*/   
    
    
}