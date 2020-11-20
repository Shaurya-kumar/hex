class Box{
constructor(x,y,w,h){

var options={

isStatic:false,
restitution:0,
friction:0.4,
density:0.5

}

this.width = w;
this.height = h;

this.body = Bodies.rectangle(x,y,w,h,options);

World.add(world,this.body);

}
display(){

var pos = this.body.position;

push();
translate(pos.x,pos.y);
rectMode(CENTER);
fill("red");
rect(0,0,this.width,this.height);
pop();




}


}