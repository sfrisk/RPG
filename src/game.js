function Game()
{
	this.board = new Board(15);
	this.element = $('content');
	//this.init();
	this.state = 0;
};	

Game.prototype.init = function()
{
	var game = this;
	
	setInterval("game.run()", 60);
	
	//setInterval("game.board.draw()", 75);
};

Game.prototype.run = function()
{
	var game = this;
	switch(game.state){
		case RUN:
			game.board.draw();
			break;
		case STOP:
			alert("Paused");
			game.state = RUN;
			break;
	}
}

Game.prototype.switchState = function()
{
	if(this.state == 1)
		this.state = 0;
	if(this.state == 0)
		this.state = 1;
}