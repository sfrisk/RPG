function checkKey(e){
     switch (e.keyCode) {
        case down: //down key
            game.board.down();
            break;
        case up: //up key
            game.board.up();
            break;
        case left: //left key
            game.board.left();
            break;
        case right: //right key
            game.board.right();
            break;
            }      
}

if ($.browser.mozilla) {
    $(document).keypress (checkKey);
} else {
    $(document).keydown (checkKey);
}
