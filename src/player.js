function Player(src)
{
	this.name = null;
	this.life = null;
	this.money = null;
	this.attack = null;
	this.defence = null;
	this.location = [1,1];//location on map of Player
	this.sprite = new Sprite(src);
	
	//("library/images/players/sprite_test.json");	
}