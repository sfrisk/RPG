function Board(cell_width){

	//this.map = new Map("library/maps/test_map.json");
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
	
	this.map = new Map();
	this.map.src = "library/maps/test_map.json";
	this.map.init();
	
	this.width = document.body.clientWidth;
	this.height = document.body.clientHeight;
	this.center = [Math.floor(this.width/2), Math.floor(this.height/2)];
	
	this.selected = [1,1];

	this.character = new Image();
	this.character.src = "library/images/link.png";

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
	this.ctx.drawImage(src,x,y);
};
	
Board.prototype.up = function()
{
	if(this.map.walkable[this.selected[1]-1][this.selected[0]] == 0)
	{
		this.set_selected([this.selected[0], this.selected[1] - 1]);
	}
	this.character.src = "library/images/link_back.png";
	this.draw();
};
	
Board.prototype.down = function()
{
	if(this.map.walkable[this.selected[1]+1][this.selected[0]] == 0)
	{
		this.set_selected([this.selected[0], this.selected[1] + 1]);
	}
	this.character.src = "library/images/link.png";
	this.draw();
};
	
Board.prototype.right = function()
{
	if(this.map.walkable[this.selected[1]][this.selected[0] + 1] == 0)
	{
		this.set_selected([this.selected[0]+1,this.selected[1]]);
	}
	this.character.src = "library/images/link_right.png";
	this.draw();
};
	
Board.prototype.left = function()
{
	if(this.map.walkable[this.selected[1]][this.selected[0]-1] == 0)
	{
		this.set_selected([this.selected[0] - 1, this.selected[1]]);
	}
	this.character.src = "library/images/link_left.png";
	this.draw();	
}
	