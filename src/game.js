function Game()
{
	this.board = new Board(15);
	this.element = $('content');
	this.init();
};	

Game.prototype.init = function()
{
	var game = this;
	//this.board.generateHTML(this.element)
	this.board.draw();
};
