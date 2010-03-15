/*
   TileMapper : a javascript tool for drawing using a tile based system
   --------------------------------------------

   Copyright (c) 2010, Sarah Frisk. All rights reserved.

*/


var TileMap = null;

function Tile_Map()
{
	this.tile_width = null;
	this.tile_height = null;
	this.map_width = null;
	this.map_height = null;
	this.map_source = new Image();
	this.total_tiles = null
	this.tile_passable = null;
	
	this.load = function (t_width,t_height,map_width,map_height,src)
	{
		this.tile_width = t_width;
		this.tile_height = t_height;
		this.map_width = map_width;
		this.map_height = map_height;
		this.total_tiles = map_width * map_heightl
		this.map_source.src = src;
		this.tile_passable = new Array[map_width][map_height];
		for (var x = 0; x < this.map_width; x++)
		{
			for (var y = 0; y < this.map_height; y++)
			{
				this.tile_passable[x][y] = 0;
			}
		}
	};
	this.get_coords = function(id)
	{
		//id is the tile id number
		x = Math.floor(id / this.map_width);
		y = this.total_tiles - (x * this.map_width);
		return [x,y];
	}
}