var left = 37;
var up = 38;
var right = 39;
var down = 40;
var attack = 122;
var attacked = 90;
var stop = 0;


var RUN = 0;
var STOP = 1;

var ENTER = 13;

if ($.browser.mozilla) {
    attack = 122;
} else {
		attack = 90;
}