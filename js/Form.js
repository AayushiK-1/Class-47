class Form{
    constructor(){
       this.button = createButton('Play');
    }
    hide() {
        this.button.hide();
    }
    display() {
        this.button.position(displayWidth/2+30,displayHeight/2);
        //this.button.style('width', '200px');
        //this.button.style('height', '40px');
        //this.button.style
       this.button.style('background', 'lavender');

      

        this.button.mousePressed(() => {
            this.button.hide();
        });
        
    }
}