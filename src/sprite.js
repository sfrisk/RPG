function Sprite(src, location)
{
	this.src = src; //this is the location of the Json file
	this.location = location;
	
	this.image = new Image();
	// this.imageLoaded = false;
	// this.position = new Vector(); // this will be our new location
	// this.velocity = new Vector();
	// this.state = 0;
	// this.direction = 0;
	// this.width = 1;
	// this.height = 1;
	// this.curframe = 0;
	// this.totalframes = 1;
	// this.animdir = 1;
	// this.animcolumns = 1;
	// this.framestart = 0;
	// this.frametimer = 0;
	// this.animcolumns = 1;
	// this.animstartx = 0;
	// this.animstarty = 0;
	// this.faceAngle = 0;
	// this.moveAngle = 0;
	// //rotation?
	// //scaling?
	// //clolor?
	// this.movetimer = 16;
	// this.movestart = 0;
	// this.collidable = true;
	// this.collisionMethod = COLLISION_RECT;


	this.attack = false;
	this.face = [0,0]; //this is the direction we're facing
	//this.image = new Image();
	this.init();
};

Sprite.prototype.init = function()
{
	var sprite = this;
		$.getJSON(sprite.src, null, function(json){
			sprite.image.src = json.Source;
			sprite.sWidth = json.SpriteWidth; //width of a sprite cell
			sprite.sHeight = json.SpriteHeight; //height of sprite cell
			sprite.down = json.Down; //the location of the sprites facing down (could be an array of arrays for animation)
			sprite.left = json.Left;
			sprite.up = json.Up;
			sprite.right = json.Right;
			sprite.xoff = json.xOffset;
			sprite.yoff = json.yOffset;
			//figure out later what to do for attacks and stuff
			sprite.dAttack = json.Down_Attack;
			sprite.lAttack = json.Left_Attack;
			sprite.uAttack = json.Up_Attack;
			sprite.rAttack = json.Right_Attack;

			sprite.face = sprite.down;
		});
		
};

Sprite.prototype.setLocation = function(x,y)
{
	this.location = [x,y];
};


//screen position
Sprite.prototype.getPosition = function()
{
	return this.position;
};
Sprite.prototype.setPosition = function(vector)
{
	this.position = vector;
};
Sprite.prototype.setPosXY = function(x,y)
{
	this.position.set(x,y,0);
};
Sprite.prototype.getX = function()
{
	return this.position.getX();
};
Sprite.prototype.setX = function(x)
{
	this.position.setX(x);
};
Sprite.prototype.getY = function()
{
	return this.position.getY();
};
Sprite.prototype.setY = function(y)
{
	return this.position.setY(y);
}

//movement velocity
Sprite.prototype.getVelocity = function()
{
	return this.velocity;
}
Sprite.prototype.setVelocity = function(vector)
{
	this.velocity = vector;
}
Sprite.prototype.setVelXY = function(x,y)
{
	this.velocity.setX(x);
	this.velocity.setY(y);
}


//image size
Sprite.prototype.setSize = function(x,y)
{
	this.width = x;
	this.height = y;
};
Sprite.prototype.getWidth = function()
{
	return this.width;
};
Sprite.prototype.setWidth = function(width)
{ 
	this.width = width;
};
Sprite.prototype.getHeight = function()
{
	return this.height;
};
Sprite.prototype.setHeight = function(height)
{
	this.height = height;
};

Sprite.prototype.getVisible = function()
{
	return this.visible;
};
Sprite.prototype.setVisible = function(value)
{
	this.visible = value;
};

Sprite.prototype.getAlive = function()
{
	return this.alive;
};
Sprite.prototype.setAlive = function(value)
{
	this.alive = value;
};

Sprite.prototype.getState = function()
{
	return this.state;
};
Sprite.prototype.setState = function(value)
{
	this.state = value;
};

Sprite.prototype.getDirection = function()
{
	return this.direction;
};
Sprite.prototype.setDirection = function(value)
{
	this.direction = value;
}

Sprite.prototype.getColumns = function()
{
	return this.anicolumns;
};
Sprite.prototype.setColumns = function(value)
{
	this.animcolumns = value;
};

Sprite.prototype.getFrameTimer = function()
{
	return this.frametimer;
}
Sprite.prototype.setFrameTimer = function(value)
{
	this.frametimer = value;
}

Sprite.prototype.getCurrentFrame = function()
{
	return this.curframe;
};
Sprite.prototype.setCurrentFrame = function(value)
{
	this.curframe = value;
};

Sprite.prototype.getTotalFrames = function()
{
	return this.totalframes;
}
Sprite.prototype.setTotalFrames = function()
{
	this.totalframes = value;
}

Sprite.prototype.getAnimationDirection = function()
{
	return this.animdir;
}
Sprite.prototype.setAnimationDirection = function(value)
{
	this.animdir = value;
}

Sprite.prototype.isCollidable = function()
{
	return this.collidable;
}
Sprite.prototype.setCollidable = function(value)
{
	this.collidable = value;
}

	

Sprite.prototype.draw = function(x,y,ctx)
{
	image = this.image;
	sWidth = this.sWidth;
	sHeight = this.sHeight;
	sx = this.face[0] * sWidth;
	sy = this.face[1] * sHeight;
	dx = x + this.xoff;
	dy = y + this.yoff;
	//console.log([image,sx, sy, sWidth, sHeight, dx, dy]);
	//return [image,sx, sy, sWidth, sHeight, dx, dy];
	ctx.drawImage(image,sx,sy,sWidth,sHeight,dx,dy,sWidth,sHeight);
}

Sprite.prototype.animate = function()
{
	time = new Date;
	if (this.frametimer > 0)
	{
		if(time.getTime() > (this.framestart + this.frametimer))
		{
			//reset animation timer
			this.framestart = time.getTime();
			this.curframe += this.animdir;
			//keep frame within bounds
			if(this.curframe < 0)
				this.curframe = this.totalframes-1;
			if(this.curframe > this.totalframe-1)
				this.curframe = 0;
		}
	}
}

//smoother moving by velocity
Sprite.prototype.move = function()
{
	time = new Date;
	if(this.movetimer>0)
	{
		if(time.getTime() > (this.movestart + this.movetimer))
		{
			//reset move timer
			this.movestart = time.getTime();
			
			//move sprite by velocity amount
			this.setX(this.getX() + this.velocity.getX());
			this.setY(this.getY() + this.velocity.getY());
		}
	}
	else
	{
		//no movement timer -- update at cpu clock speed
		this.setX(this.getX() + this.velocity.getX());
		this.setY(this.getY() + this.velocity.getY());
	}
}


//Move by grid
Sprite.prototype.moveUp = function(map)
{
	if(map[this.location[1]-1][this.location[0]] == 0)
	{
		this.setLocation(this.location[0], this.location[1] - 1);
	}
	this.changeDirection(up);
};

Sprite.prototype.moveDown = function(map)
{
	if(map[this.location[1]+1][this.location[0]] == 0)
	{
		this.setLocation(this.location[0], this.location[1]+1);
	}
	this.changeDirection(down);
};

Sprite.prototype.moveLeft = function(map)
{
	if(map[this.location[1]][this.location[0]-1] == 0)
	{
		this.setLocation(this.location[0]-1,this.location[1]);
	}
	this.changeDirection(left);
};

Sprite.prototype.moveRight = function(map)
{
	if(map[this.location[1]][this.location[0]+1] == 0)
	{
		this.setLocation(this.location[0]+1,this.location[1]);
	}
	this.changeDirection(right);
};

Sprite.prototype.drawInfo = function(x,y)
{
	image = this.image;
	sWidth = this.sWidth;
	sHeight = this.sHeight;
	sx = this.face[0] * sWidth;
	sy = this.face[1] * sHeight;
	dx = x + this.xoff;
	dy = y + this.yoff;
	//console.log([image,sx, sy, sWidth, sHeight, dx, dy]);
	return [image,sx, sy, sWidth, sHeight, dx, dy];
};


Sprite.prototype.changeDirection = function(direction)
{
	switch (direction){
		case down:
			this.face = this.down;
			break;
		case up:
			this.face = this.up;
			break;
		case left:
			this.face = this.left;
			break;
		case right:
			this.face = this.right;
			break;	
	}
	if (this.attack == false)
	{	
		this.face[1] = 0;
		//console.log(this.face);
	}
	if (this.attack == true)
	{
		this.face[1] = 1;
		//console.log(this.face);
	}
};
