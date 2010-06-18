function Sprite(src, location, grid)
{
	this.src = src; //this is the location of the Json file
	this.location = location; // grid location
	this.grid = grid; //size of grid
	this.position = [this.location[0]*grid,this.location[1]*grid];
	this.velocity = [0,0];
	this.trigger = false;
	this.image = new Image();
	// this.imageLoaded = false;
	//this.position = new Vector(); // this will be our screen location
	//this.setPosXY(this.location[0] * this.grid, this.location[1] * this.grid);
	//this.velocity = new Vector();
	// this.state = 0;
	 this.moving = false;
	 this.direction = 0;
	// this.width = 1;
	// this.height = 1;
	// this.curframe = 0;
	// this.totalframes = 1;
	 this.animdir = 1;
	// this.animcolumns = 1;
	// this.framestart = 0;
	// this.frametimer = 0;
	 this.animcolumns = 1;
	// this.animstartx = 0;
	// this.animstarty = 0;
	// this.directionAngle = 0;
	// this.moveAngle = 0;
	// //rotation?
	// //scaling?
	// //clolor?
	// this.movetimer = 16;
	// this.movestart = 0;
	// this.collidable = true;
	// this.collisionMethod = COLLISION_RECT;


	this.attack = false;
	this.direction = 0; //this is the direction we're facing
	//this.image = new Image();
	this.init();
};

Sprite.prototype.init = function()
{
	var sprite = this;
		$.getJSON(sprite.src, null, function(json){
			sprite.image.src = json.Source;
			//sprite.width = json.SpriteWidth; //width of a sprite cell
			//sprite.height = json.SpriteHeight; //height of sprite cell
			sprite.setSize(json.SpriteWidth,json.SpriteHeight);
			sprite.setColumns(json.Width);
			sprite.down = json.Down; //the location of the sprites facing down (could be an array of arrays for animation)
			sprite.left = json.Left;
			sprite.up = json.Up;
			sprite.right = json.Right;

			sprite.curframe = 0;
			sprite.face = 0;
			
		});
		
};

Sprite.prototype.setLocation = function(x,y)
{
	this.location = [x,y];
};

Sprite.prototype.checkEqual = function()
{

	if(this.location[0]*this.grid == this.position[0] && this.location[1]*this.grid == this.position[1])
		return true;
	else
		return false;
}


//screen position
Sprite.prototype.setX = function(x)
{
	this.position[0] = x;
}
Sprite.prototype.setY = function(y)
{
	this.position[1] = y;
}

//velocity
Sprite.prototype.setVelocity = function(x,y)
{
	this.velocity = [x,y];
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
	this.anicolumns = value;
};


Sprite.prototype.draw = function(x,y,ctx)
{
	image = this.image;
	width = this.width;
	height = this.height;
	//sx = this.direction[0] * width;
	sx = this.curframe * width;
	sy = this.direction * height;

	dx = this.position[0] - this.getWidth()/3;
	dy = this.position[1] - this.getHeight()/3;
	//console.log([image,sx, sy, width, height, dx, dy]);
	//return [image,sx, sy, width, height, dx, dy];
	ctx.drawImage(image,sx,sy,width,height,dx,dy,width,height);
}

Sprite.prototype.animate = function()
{


	if (this.curframe < this.getColumns()-1)
	{
		this.curframe ++;
	}
	else
	{
		this.curframe = 1;
	}
	
	if (this.moving = false)
	{
		this.curframe = 0;
	}
}

//smoother moving by velocity
Sprite.prototype.move = function()
{

	if(this.checkEqual() == true)
	{
		if(this.moving == false)
		{
			this.velocity = [0,0];
			this.curframe = 0;
		}
	}

	else
	{
		//no movement timer -- update at cpu clock speed
		//this.setX(this.position[0] + this.velocity[0]);
		//this.setY(this.position[1] + this.velocity[1]);	
		this.position[0] += this.velocity[0];
		this.position[1] += this.velocity[1];	
		this.animate();	
	}
	
	
}


//Move by grid
Sprite.prototype.moveUp = function(map)
{

		if(map[this.location[1]-1][this.location[0]] == 0 && this.checkEqual() == true)
		{
			this.setLocation(this.location[0], this.location[1] - 1);
			this.velocity=[0,-4];
			this.moving = true;
			this.changeDirection(UP);
		}
		
	
	
};

Sprite.prototype.moveDown = function(map)
{
	
		if(map[this.location[1]+1][this.location[0]] == 0 && this.checkEqual() == true)
		{
			this.setLocation(this.location[0], this.location[1]+1);
			this.velocity=[0,4];
			this.moving = true;
			this.changeDirection(DOWN);
		}
		

};

Sprite.prototype.moveLeft = function(map)
{

		if(map[this.location[1]][this.location[0]-1] == 0 && this.checkEqual() == true)
		{
			this.setLocation(this.location[0]-1,this.location[1]);
			this.velocity=[-4,0];
			this.moving = true;
			this.changeDirection(LEFT);
		}
		

	
};

Sprite.prototype.moveRight = function(map)
{

		if(map[this.location[1]][this.location[0]+1] == 0 && this.checkEqual() == true)
		{
			this.setLocation(this.location[0]+1,this.location[1]);
			this.velocity=[4,0];
			this.moving = true;
			this.changeDirection(RIGHT);
		}
		


};



Sprite.prototype.changeDirection = function(direction)
{
	switch (direction){
		case DOWN:
			this.direction = DOWN;
			this.curframe = 0;
			break;
		case UP:
			this.direction = UP;
			this.curframe = 0;
			break;
		case LEFT:
			this.direction = LEFT;
			this.curframe = 0;
			break;
		case RIGHT:
			this.direction = RIGHT;
			this.curframe = 0;
			break;	
	}
	// if (this.attack == false)
	// {	
	// 	this.direction[1] = 0;
	// 	//console.log(this.direction);
	// }
	// if (this.attack == true)
	// {
	// 	this.direction[1] = 1;
	// 	//console.log(this.direction);
	// }
};
