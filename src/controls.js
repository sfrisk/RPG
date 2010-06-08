function checkKey(e){
     switch (e.keyCode) {
        case 40:
            game.board.down();
            break;
        case 38:
            game.board.up();
            break;
        case 37:
            game.board.left();
            break;
        case 39:
            game.board.right();
            break;
            }      
}

if ($.browser.mozilla) {
    $(document).keypress (checkKey);
} else {
    $(document).keydown (checkKey);
}
