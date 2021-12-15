class Ground{
    constructor(x,y,w,h){
        var opcao = {
            isStatic: true
        }
     this.body = Bodies.rectangle(x,y,w,h,opcao);
     this.w = w;
     this.h = h;
     World.add(world,this.body);
    }
    display(){
        push();
        fill(127);
        stroke(255);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
    }
}