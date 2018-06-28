namespace Aufgabe11 {
     //links
    export class BubblesTwo extends BubblesOne {
        
        constructor() {
            super();        
        }
        
        setRandomPosition(): void {
            this.x = Math.random() * (200 - 250) + 250; //Math.random()* (max - min) + min 
            this.y = Math.random() * 550;
            this.radius = Math.random() * 10;
            }
        
        move(): void {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 540;
            }    
        }   
   }
}