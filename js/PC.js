class PC{
    constructor(x,y,w,h){
        var options={

         friction:0.2,
         density:0.8

        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        World.add(this.body,world);
        this.w=10;
        this.h=30;
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