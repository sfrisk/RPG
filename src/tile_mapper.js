/*
   TileMapper : a javascript tool for drawing using a tile based system
   --------------------------------------------

   Copyright (c) 2010, Sarah Frisk. All rights reserved.

*/



var TileMap = function()
{
	this.url = null;
	this.tile_width = null;
	this.tile_height = null;
	this.map_width = null;
	this.map_height = null;
	this.map_source = new Image();
	this.total_tiles = null;
	this.walkable = null; //the matrix that tells us where we can walk
	this.layer_one = null; //first terain layer
	this.layer_two = null; //the second terrain layer (includes transparent things?)
	this.ajax = null;
	
	
	//possibility of loading information from an xml file?  
	this.upload = function()
	{
		
		this.ajax = new XMLHttpRequest();
		this.ajax.open("GET", this.url, true);
		this.ajax.onreadystatechange = function () {
			if (this.ajax.readyState == 4 && this.ajax.status == 200)
			{
				//DO WORK
			}
		}
		this.ajax.send(null);
	}

	this.getY = function(position)
	{
		return Math.floor(position/this.map_width) - 1;
	}
	
	this.getYPixels = function(position)
	{
		return this.getY(position) * this.tile_height;
	}
	
	this.getX = function(position)
	{
		return (this.total_tiles - (this.getY(position) * this.map_width)) - 1;
	}
	
	this.getXPixels = function(position)
	{
		return this.getX(position) * this.tile_width;
	}

	this.drawMap = function(position, y, x)
	{
		//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
		ctx.drawImage(this.map_source, this.getXPixels(position) * this.tile_width, this.getYPixels(position) * this.tile_height, this.tile_width, this.tile_height, y * (this.tile_height),x * (this.tile_width), this.tile_width, this.tile_width);
	}
	
	
	
}