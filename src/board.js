function Board(cell_width){

	//this.map = new Map("library/maps/test_map.json");
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
	
	this.map = new Map("library/maps/test_map.json");
	
	this.width = document.body.clientWidth;
	this.height = document.body.clientHeight;
	this.center = [Math.floor(this.width/2), Math.floor(this.height/2)];
	
	//this.player.location = [1,1];

	this.player = new Sprite("library/images/players/sprite_test.json", [1,1]);
	//this.enemy = new Sprite("library/images/players/enemy.json", [3,15]);
	//this.entities = [];
	
	
	
	this.count = 0;

};
	
	
Board.prototype.clear = function() {
		this.ctx.clearRect(0,0,this.width,this.height);
};
	
Board.prototype.set_selected = function(x,y){
	//this.player.location = new_val;
	this.player.setLocation(x,y);
};
	
Board.prototype.generateGrid = function() {
	for (var x = 0; x < this.map.terrain[0].length; x++){
		for (var y = 0; y < this.map.terrain.length; y++){
			this.drawTile(x,y);
		}
	}
	
	sx = this.player.getWidth() / 2;
	sy = this.player.getHeight() / 2;
	//this.drawSprite((this.player.location[0] * (this.map.cell_width)) - (this.map.cell_width/4),(this.player.location[1] * (this.map.cell_width )) - 10,this.player);
	//this.player.draw((this.player.location[0] * (this.map.cell_width)) - (this.map.cell_width/4),(this.player.location[1] * (this.map.cell_width )) -10,this.ctx);
	this.player.draw(this.player.location[0] * this.map.cell_width,this.player.location[1] * this.map.cell_width, this.ctx);
	
	//this.enemy.draw((this.enemy.location[0] * (this.map.cell_width)) - (this.map.cell_width/4),(this.enemy.location[1] * (this.map.cell_width )) - 10,this.ctx);
};
	
Board.prototype.draw = function(){
		this.clear();
		//if(this.count == 0)
		//	this.moveEntity(this.enemy);
		//this.count ++;
		//if(this.count > 5)
		//	this.count = 0;
		this.player.animate();
		this.generateGrid();
};
	
Board.prototype.drawTile = function(x,y)
{
	this.ctx.drawImage(this.map.map_tiles1, this.map.terrain[x][y] * this.map.cell_width, 0 * this.map.cell_width, this.map.cell_width, this.map.cell_width, y * (this.map.cell_width),x * (this.map.cell_width), this.map.cell_width, this.map.cell_width);
};
	
Board.prototype.drawRects = function(x,y,w,h,color)
{
	this.ctx.beginPath();
	this.ctx.fillStyle = 'rgb('+color[0]+', '+color[1]+', '+color[2]+')';
	this.ctx.rect(x,y,w,h);
	this.ctx.closePath();
	this.ctx.fill();
};
	

	//Enemy functions (temporary until I do something else)
Board.prototype.moveEntity = function(entity)
{
	
	loc = entity.location;
	i = Math.floor(Math.random()*4 + 1);
	if(i == 1 && this.map.walkable[loc[1]-1][loc[0]] == 0)
	{
		entity.location = [loc[0],loc[1]-1];
		entity.changeDirection(up);
	}
	if(i == 2 && this.map.walkable[loc[1]+1][loc[0]] == 0)
	{
		entity.location = [loc[0],loc[1]+1];
		entity.changeDirection(down);
	}
	if(i == 3 && this.map.walkable[loc[1]][loc[0]-1] == 0)
	{
		entity.location = [loc[0]-1,loc[1]];
		entity.changeDirection(left);
	}
	if(i == 4 && this.map.walkable[loc[1]-1][loc[0]+1] == 0)
	{
		entity.location = [loc[0]+1,loc[1]];
		entity.changeDirection(right);
	}
}
	
	
Board.prototype.attack = function()
{
	this.player.changeDirection(attack);
	//this.draw();
};	

Board.prototype.halt = function()
{
	this.player.changeDirection(stop);
	//this.draw();
}