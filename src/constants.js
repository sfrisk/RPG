var left = 37;
var up = 38;
var right = 39;
var down = 40;
var attack = 0;
var stop = 0;

if ($.browser.mozilla) {
    attack = 122;
} else {
    $(document).keydown (checkKey);
		attack = 90;
}