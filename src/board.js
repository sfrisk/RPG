function Board(cell_width){

	//this.map = new Map("library/maps/test_map.json");
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
	
	this.map = new Map("library/maps/test_map.json");
	
	this.width = document.body.clientWidth;
	this.height = document.body.clientHeight;
	this.center = [Math.floor(this.width/2), Math.floor(this.height/2)];
	
	this.selected = [1,1];

	this.player = new Player("library/images/players/sprite_test.json");

};


Board.prototype.passable = function(x,y){
		return [0,1][this.map.terrain[y][x]];
	};
	
	
Board.prototype.clear = function() {
		this.ctx.clearRect(0,0,this.width,this.height);
};
	
Board.prototype.set_selected = function(new_val){
	this.selected = new_val;
};
	
Board.prototype.generateGrid = function() {
	for (var x = 0; x < this.map.terrain[0].length; x++){
		for (var y = 0; y < this.map.terrain.length; y++){
			this.drawMap(x,y);
		}
	}
	this.drawSprite((this.selected[0] * (this.map.cell_width)) - (this.map.cell_width/4),(this.selected[1] * (this.map.cell_width )) - 10,this.character);
};
	
Board.prototype.draw = function(){
		this.clear();
		this.generateGrid();
};
	
Board.prototype.drawMap = function(x,y)
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
	
Board.prototype.drawSprite = function(x,y,src)
{
	//console.log(src);
	draw =  this.player.sprite.drawInfo(x,y);
	//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
	this.ctx.drawImage(draw[0],draw[1],draw[2],draw[3],draw[4],draw[5],draw[6],draw[3],draw[4]);
	//this.ctx.drawImage(x,y,src);
};
	
Board.prototype.up = function()
{
	if(this.map.walkable[this.selected[1]-1][this.selected[0]] == 0)
	{
		this.set_selected([this.selected[0], this.selected[1] - 1]);
	}
	this.player.sprite.changeFace(up);
	this.draw();
};
	
Board.prototype.down = function()
{
	if(this.map.walkable[this.selected[1]+1][this.selected[0]] == 0)
	{
		this.set_selected([this.selected[0], this.selected[1] + 1]);
	}
	this.player.sprite.changeFace(down);
	this.draw();
};
	
Board.prototype.right = function()
{
	if(this.map.walkable[this.selected[1]][this.selected[0] + 1] == 0)
	{
		this.set_selected([this.selected[0]+1,this.selected[1]]);
	}
	this.player.sprite.changeFace(right);
	this.draw();
};
	
Board.prototype.left = function()
{
	if(this.map.walkable[this.selected[1]][this.selected[0]-1] == 0)
	{
		this.set_selected([this.selected[0] - 1, this.selected[1]]);
	}
	this.player.sprite.changeFace(left);
	this.draw();	
};
	
Board.prototype.attack = function()
{
	this.player.sprite.changeFace(attack);
	this.draw();
};	

Board.prototype.halt = function()
{
	this.player.sprite.changeFace(stop);
	this.draw();
}