var left = 37;
var up = 38;
var right = 39;
var down = 40;

var DOWN = 0;
var RIGHT = 1;
var UP = 2;
var LEFT = 3;

var attack = 122;
var attacked = 90;
var stop = 0;


var RUN = 0;
var STOP = 1;

var ENTER = 13;

var COLLISION_NONE = 0;
var COLLISION_RECT = 1; 
var COLLISION_DIST = 2;

if ($.browser.mozilla) {
    attack = 122;
} else {
		attack = 90;
}