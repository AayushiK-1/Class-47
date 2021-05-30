class COVID{
    constructor(x,y,w,h){
        var options={
          restitution:1,
          friction:0.1,
          density:0.2
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(this.body,world);
        this.w=20;
        this.h=20;
    }
    display(){
        this.body.position.x=pos.x;
        this.body.position.y=pos.y;
  
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       rect(pos.x,pos.y,w,h);
       pop();
  
    }
    
}
function spawnCovid(){
    if(frameCount%50 === 0){
        
   }
}