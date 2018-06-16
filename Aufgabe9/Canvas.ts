namespace L09_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        
        background();
        sand();
        chest();
        anchor();
        
        for (let i: number = 0; i < 7; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            fish(x, y);
        }
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

    function fish(_x: number, _y: number): void {

        crc2.fillStyle = "rgb(255,0,0)";
        
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x + 30, _y + 30, _x + 60, _y);
        crc2.lineTo(_x + 80, _y + 14);
        crc2.quadraticCurveTo(_x + 65, _y - 5, _x + 80, _y - 20);
        crc2.lineTo(_x + 60, _y - 5);
        crc2.quadraticCurveTo(_x + 28, _y - 35, _x, _y);
        crc2.strokeStyle = "rgb(255,0,0)";
        crc2.stroke();
        crc2.fill();
        
    }

    
    function anchor(): void {
        crc2.fillStyle = "rgb(0,0,0)";

        crc2.beginPath();
        crc2.moveTo(50, 50);
        crc2.lineTo(50, 80);
        crc2.quadraticCurveTo(35, 100, 20, 80);
        crc2.lineTo(15, 85);
        crc2.quadraticCurveTo(50, 115, 90, 85);
        crc2.lineTo(85, 80);
        crc2.quadraticCurveTo(70, 100, 55, 80);
        crc2.lineTo(55, 50);
        crc2.lineTo(60, 50);
        crc2.lineTo(60, 45);
        crc2.lineTo(55, 45);
        crc2.lineTo(55, 40);
        crc2.lineTo(50, 40);
        crc2.lineTo(50, 45);
        crc2.lineTo(45, 45);
        crc2.lineTo(45, 50);
        crc2.closePath();
        crc2.strokeStyle = "rgb(0,0,0)";
        crc2.stroke();
        crc2.fill();
     }

    function chest(): void {
           
        //part4
        crc2.fillStyle = "rgb(109, 77, 35)";
        
        crc2.beginPath();
        crc2.moveTo(700, 560);
        crc2.lineTo(700, 610);
        crc2.lineTo(750, 610);
        crc2.lineTo(750, 560);
        crc2.closePath();
        crc2.fill();
        
        crc2.strokeStyle = "transparent";        
        crc2.stroke();
        
        //part3
        crc2.fillStyle =  "rgb(89, 63, 29)";
        
        crc2.beginPath();
        crc2.moveTo(800, 660);
        crc2.lineTo(750, 610);
        crc2.lineTo(750, 560);
        crc2.lineTo(800, 610);
        crc2.closePath();
        
        crc2.fill();
        
        crc2.strokeStyle = "transparent";        
        crc2.stroke();
        
        //part1
        crc2.fillStyle = "rgb(130, 89, 36)";
        
        crc2.beginPath();
        crc2.moveTo(700, 560);
        crc2.lineTo(700, 610);
        crc2.lineTo(750, 660);
        crc2.lineTo(750, 610);
        crc2.closePath();
        crc2.fill();
    
        crc2.strokeStyle = "transparent";        
        crc2.stroke();
        
        
        //part2
        crc2.fillStyle = "rgb(142, 100, 45)";
        
        crc2.beginPath();
        crc2.moveTo(750, 610);
        crc2.lineTo(800, 610);
        crc2.lineTo(800, 660);
        crc2.lineTo(750, 660);
        crc2.closePath();
        crc2.fill();
        
        crc2.strokeStyle = "transparent";        
        crc2.stroke();
    
        //part5 
        crc2.fillStyle =  "rgb(114, 81, 39)";
        
        crc2.beginPath();
        crc2.moveTo(800, 610);
        crc2.lineTo(825, 570);
        crc2.lineTo(775, 520);
        crc2.lineTo(750, 560);
        crc2.closePath();
        
        crc2.fill();
        
        crc2.strokeStyle = "transparent";        
        crc2.stroke();

        // Deckel 3D - vorne        
        crc2.fillStyle =  "rgb(142, 100, 45)";
        
        crc2.beginPath();
        crc2.moveTo(800, 610);
        crc2.quadraticCurveTo(830, 600, 825, 570);
        crc2.closePath();
        
        crc2.fill();
        
        crc2.strokeStyle = "transparent";        
        crc2.stroke();
        
        // Deckel 3D - hinten        
        crc2.fillStyle =  "rgb(99, 72, 36)";
        
        crc2.beginPath();
        crc2.moveTo(750, 560);
        crc2.quadraticCurveTo(780, 550, 775, 520);
        crc2.closePath();
        
        crc2.fill();
        
        crc2.strokeStyle = "transparent";
        crc2.stroke();
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
            ctx.quadraticCurveTo(540, 540, 555, 51);
            ctx.quadraticCurveTo(540, 500, 540, 570);
            ctx.stroke();   
    </script> 
      

function chest(): void {
           
        //part4
        crc2.fillStyle = "rgb(109, 77, 35)";
        
        crc2.beginPath();
        crc2.moveTo(700, 500);
        crc2.lineTo(700, 550);
        crc2.lineTo(750, 550);
        crc2.lineTo(750, 500);
        crc2.closePath();
        crc2.fill();
        
        crc2.strokeStyle = "transparent";        
        crc2.stroke();
        
        //part3
        crc2.fillStyle =  "rgb(89, 63, 29)";
        
        crc2.beginPath();
        crc2.moveTo(800, 600);
        crc2.lineTo(750, 550);
        crc2.lineTo(750, 500);
        crc2.lineTo(800, 550);
        crc2.closePath();
        
        crc2.fill();
        
        crc2.strokeStyle = "transparent";        
        crc2.stroke();
        
        //part1
        crc2.fillStyle = "rgb(130, 89, 36)";
        
        crc2.beginPath();
        crc2.moveTo(700, 500);
        crc2.lineTo(700, 550);
        crc2.lineTo(750, 600);
        crc2.lineTo(750, 550);
        crc2.closePath();
        crc2.fill();
    
        crc2.strokeStyle = "transparent";        
        crc2.stroke();
        
        
        //part2
        crc2.fillStyle = "rgb(142, 100, 45)";
        
        crc2.beginPath();
        crc2.moveTo(750, 550);
        crc2.lineTo(800, 550);
        crc2.lineTo(800, 600);
        crc2.lineTo(750, 600);
        crc2.closePath();
        crc2.fill();
        
        crc2.strokeStyle = "transparent";        
        crc2.stroke();
    
        //part5 
        crc2.fillStyle =  "rgb(114, 81, 39)";
        
        crc2.beginPath();
        crc2.moveTo(800, 550);
        crc2.lineTo(825, 510);
        crc2.lineTo(775, 460);
        crc2.lineTo(750, 500);
        crc2.closePath();
        
        crc2.fill();
        
        crc2.strokeStyle = "transparent";        
        crc2.stroke();

        // Deckel 3D - vorne        
        crc2.fillStyle =  "rgb(142, 100, 45)";
        
        crc2.beginPath();
        crc2.moveTo(800, 550);
        crc2.quadraticCurveTo(830, 540, 825, 510);
        crc2.closePath();
        
        crc2.fill();
        
        crc2.strokeStyle = "transparent";        
        crc2.stroke();
        
        // Deckel 3D - hinten        
        crc2.fillStyle =  "rgb(99, 72, 36)";
        
        crc2.beginPath();
        crc2.moveTo(750, 500);
        crc2.quadraticCurveTo(780, 490, 775, 460);
        crc2.closePath();
        
        crc2.fill();
        
        crc2.strokeStyle = "transparent";
        crc2.stroke();
    }
    
    
    
    var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20, 50);
ctx.quadraticCurveTo(50, 80, 80, 50);
ctx.lineTo(100, 64);
ctx.quadraticCurveTo(85, 45, 100, 30);
ctx.lineTo(80, 45);
ctx.quadraticCurveTo(48, 15, 20, 50);
//ctx.stroke();*/
    
    }