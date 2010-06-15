function Sprite(src)
{
	this.src = src; //this is the location of the Json file
	this.moving = false; //this will determine later if we're having a walking animation
	this.face = null; //this is the direction we're facing
	this.image = new Image();
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
			//figure out later what to do for attacks and stuff
			sprite.face = sprite.down;
		});
		
};

Sprite.prototype.drawInfo = function()
{
	image = this.image;
	sWidth = this.sWidth;
	sHeight = this.sHeight;
	sx = this.face[0] * sWidth;
	sy = this.face[1] * sHeight;
	return [image,sx, sy, sWidth, sHeight];
}


Sprite.prototype.turnFace = function(direction)
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
		
}
