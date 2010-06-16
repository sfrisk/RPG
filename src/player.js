function Player(src, location)
{ //player = more complicated Sprite?
	this.name = null;
	this.life = null;
	this.money = null;
	this.attack = null;
	this.defence = null;
	this.location = location;//location on map of Player
	this.sprite = new Sprite(src);
	
	//("library/images/players/sprite_test.json");	
}