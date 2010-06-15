function checkKey(e){ //trigger walking animation?
	//	alert("keypress");
     switch (e.keyCode) {
        case down: //down key
						console.log("down");
						game.board.player.sprite.moving = true;
						game.board.down();
						break;
        case up: //up key
						console.log("up");
						game.board.player.sprite.moving = true;
						game.board.up();
						break;
        case left: //left key
						console.log("left");
						game.board.player.sprite.moving = true;
						game.board.left();
						break;
        case right: //right key
						console.log("right");
						game.board.player.sprite.moving = true;
						game.board.right();
						break;
				case attack:
						///uh, do something attacky
						game.board.player.sprite.moving = true;
						game.board.player.sprite.attack = true;
						game.board.attack();
						break;
            }  
    	switch (e.which){ //for mozzilla
				case attack:
				///uh, do something attacky
				game.board.player.sprite.moving = true;
				game.board.player.sprite.attack = true;
				game.board.attack();
				break;
			}
}

function Stop(e){
	//call whatever it is I'm calling to stop animation
	switch (e.which){
		case attacked:
			game.board.player.sprite.attack = false;
			//game.board.player.sprite.moving = false;
			game.board.halt();
			break;
	}
	//game.board.player.sprite.attack = false;
	game.board.player.sprite.moving = false;
	//game.board.halt();
	//alert("stop moving");
}

if ($.browser.mozilla) {
    $(document).keypress (checkKey);
} else {
    $(document).keydown (checkKey);
}

//keydown is calling the function 4 times? stay with keypress
$(document).keyup(Stop);