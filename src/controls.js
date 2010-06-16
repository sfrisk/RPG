function checkKey(e){ //trigger walking animation?
	//	alert("keypress");
	var Player = game.board.player;
	var map = game.board.map.walkable;
     switch (e.keyCode) {
        case down: //down key
						//game.board.down();
						Player.moveDown(map);
						break;
        case up: //up key
						//game.board.up();
						Player.moveUp(map);
						break;
        case left: //left key
						//game.board.left();
						Player.moveLeft(map)
						break;
        case right: //right key
						Player.moveRight(map);
						break;
				case attack:
						///uh, do something attacky
						Player.attack = true;
						game.board.attack();
						break;
				case ENTER:
						game.switchState();
						break;
            }  
    	switch (e.which){ //for FireFox
				case attack:
					///uh, do something attacky
					game.board.player.attack = true;
					game.board.attack();
					break;
			}
}

function Stop(e){
	//call whatever it is I'm calling to stop animation
	switch (e.which){
		case attacked:
			game.board.player.attack = false;
			//game.board.player.sprite.moving = false;
			game.board.halt();
			break;
	}

}

if ($.browser.mozilla) {
    $(document).keypress (checkKey);
} else {
    $(document).keydown (checkKey);
}

//keydown is calling the function 4 times? stay with keypress
$(document).keyup(Stop);