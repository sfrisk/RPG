var Board = function(radius) {
	this.width = document.body.clientWidth;
	this.height = document.body.clientHeight;
	this.center = [Math.floor(this.width/2), Math.floor(this.height/2)];
	this.ctx = null;
	this.canvas_id = 'canvas';
	this.radius = radius;
	this.cell_height = Math.sin(1/12*Math.PI)*radius*2;
	this.cell_hwidth = Math.cos(1/12*Math.PI)*radius*0.92;
	this.selected = [-1,-1];
	
	this.generateHTML = function(parent) {
		parent.innerHTML = '<canvas id="'+this.canvas_id+'" width="'+this.width+'" height="'+this.height+'"></canvas>';
		this.ctx = $(this.canvas_id).getContext("2d");
	};
	
	this.clear = function() {
		this.ctx.clearRect(0, 0, this.width, this.height);
	};
	
	this.set_selected = function(new_val) {
		this.selected = new_val;
	};
	
	this.generateGrid = function() {
		var s = this.radius;
		var h = this.cell_height;
		var r = this.cell_hwidth;
		
		for (var x = 0; x < 20; x++) {
			for (var y = 0; y < 20; y++) {
				this.drawHex(r+x*(2*r)+(y%2*r), r+y*(h+s), s, (this.selected[0] == x && this.selected[1] == y && [255, 0, 0] || [40, 40, 40]));
			}
		}
	};
	
	this.drawHex = function(x, y, r, color) {
		this.ctx.beginPath();
		this.ctx.fillStyle = 'rgb('+color[0]+', '+color[1]+', '+color[2]+')';
		this.ctx.moveTo(x+Math.cos(0.5*Math.PI)*r, y+Math.sin(0.5*Math.PI)*r);
		for (var v = 1; v < 7; v++) {
			this.ctx.lineTo(x+Math.cos((v/3+0.5)*Math.PI)*r, y+Math.sin((v/3+0.5)*Math.PI)*r); 
		}
		this.ctx.fill();
	};
};

var Game = function() {
	this.board = new Board(15);
	
	this.init = function(parent) {
		this.board.generateHTML(parent);
	};
};

function draw() {
	game.board.clear();
	game.board.generateGrid();
}

function $(id) {
	return document.getElementById(id);
};

var game = null;

function init() {
	game = new Game();
	game.init($('content'));
	document.onmousemove = getMouseXY;
	return setInterval(draw, 10);
};