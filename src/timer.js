function Timer()
{
	clock = new Date();
	reset();
};

Timer.prototype.getTimer = function()
{
	return this.clock.getTime();
};

Timer.prototype.reset = function()
{
	this.stopwatch_start = this.clock.getTime();
};

Timer.prototype.stopwatch = function(ms)
{
	if(this.getTimer() > this.stopwatch_start + ms)
	{
		this.stopwatch_start = this.getTimer();
		return true;
	}
	else
	{
		return false;
	}
};