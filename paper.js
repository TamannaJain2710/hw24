class Paper {
	constructor(){
       
		var options={
			isStatic:false,
			'density':1.5,
            'friction': 1.0,
            'restitution':0.5
        }
        
		this.body= Bodies.circle(150,450,20,options);
		World.add(world,this.body);
        
	}
	display(){		
		push();
		translate(this.body.position.x, this.body.position.y);
		rotate(this.body.angle);
		ellipseMode(RADIUS)
		fill(255)
		ellipse(0,0,20,20)	
		pop();
				
	}

}