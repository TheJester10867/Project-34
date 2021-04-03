class Monster {
  constructor(x,y,r){
	var options = { 
	  isStatic : false,
      density: 5, 
      frictionAir: 0
    }
	this.body=Bodies.circle(x, y, (r/5)-10, options);
	this.r=r;
	this.image=loadImage("monster1.png");
	World.add(world, this.body);
	}
	display()
	{
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()
			
	}
}
