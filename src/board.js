function Board(cell_width, tile_type){
	this.game = game;
	this.width = document.body.clientWidth;
	this.height = document.body.clientHeight;
	this.center = [Math.floor(this.width/2), Math.floor(this.height/2)];
	this.cell_width = cell_width;
	this.selected = [1,1];	
	this.map_tiles = new Image();
	this.map_tiles.src = "library/images/basic_map.png";
	this.character = new Image();
	this.character.src = "library/images/link.png";
	this.canvas = document.getElementById("canvas");
	this.ctx = this.canvas.getContext("2d");
	this.map = [
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1],
		[1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1],
		[1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
		[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1],
		[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
	];
	
};

Board.prototype.passable = function(x,y){
		return [0,1][this.map[y][x]];
	};
	
Board.prototype.generateHTML = function(parent) 
{
	//parent.innerHTML = '<canvas id="canvas" width="'+this.width+'" height="'+this.height+'"></canvas>'
	//this.ctx = canvas.getContext("2d");
	//this.ctx = $(this.canvas_id).getContext("2d");
	//this.ctx = $('#'+this.canvas_id)[0].getContext("2d");
};
	
Board.prototype.clear = function() {
		this.ctx.clearRect(0,0,this.width,this.height);
};
	
Board.prototype.set_selected = function(new_val){
	this.selected = new_val;
};
	
Board.prototype.generateGrid = function() {
	for (var x = 0; x < this.map[0].length; x++){
		for (var y = 0; y < this.map.length; y++){
			this.drawMap(x,y);
		}
	}
	this.drawSprite((this.selected[0] * (this.cell_width)) - (this.cell_width/4),(this.selected[1] * (this.cell_width )) - 10,this.character);
};
	
Board.prototype.draw = function(){
		this.clear();
		this.generateGrid();
};
	
Board.prototype.drawMap = function(x,y)
{
	this.ctx.drawImage(this.map_tiles, this.map[x][y] * this.cell_width, 0 * this.cell_width, this.cell_width, this.cell_width, y * (this.cell_width),x * (this.cell_width), this.cell_width, this.cell_width);
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
	if(this.map[this.selected[1]-1][this.selected[0]] == 0)
	{
		this.set_selected([this.selected[0], this.selected[1] - 1]);
	}
	this.character.src = "library/images/link_back.png";
	this.draw();
};
	
Board.prototype.down = function()
{
	if(this.map[this.selected[1]+1][this.selected[0]] == 0)
	{
		this.set_selected([this.selected[0], this.selected[1] + 1]);
	}
	this.character.src = "library/images/link.png";
	this.draw();
};
	
Board.prototype.right = function()
{
	if(this.map[this.selected[1]][this.selected[0] + 1] == 0)
	{
		this.set_selected([this.selected[0]+1,this.selected[1]]);
	}
	this.character.src = "library/images/link_right.png";
	this.draw();
};
	
Board.prototype.left = function()
{
	if(this.map[this.selected[1]][this.selected[0]-1] == 0)
	{
		this.set_selected([this.selected[0] - 1, this.selected[1]]);
	}
	this.character.src = "library/images/link_left.png";
	this.draw();	
}
	