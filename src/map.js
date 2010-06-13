function Map(mapfile)
{
	this.cell_width = null;
	this.cell_height = null;
	this.map_width = null;
	this.map_height = null;
	this.source = null;
	this.walkable = null;
	this.terrain = null;

	this.init(mapfile);
};

Map.prototype.init = function(mapfile)
{
	var map = this;
	$.getJSON(mapfile, function(json){
		map.cell_width = json.CellWidth;
		map.cell_height = json.CellHeight;
		map.map_width = json.MapWidth;
		map.map_height = json.MapHeight;
		map.source = json.MapSource;
		map.walkable = json.Walkable;
		map.terrain = json.TerrainLayer;
	});

};

Map.prototype.assignJSON = function(json)
{

	map.cell_width = json.CellWidth;
	map.cell_height = json.CellHeight;
	map.map_width = json.MapWidth;
	map.map_height = json.MapHeight;
	map.source = json.MapSource;
	map.walkable = json.Walkable;
	map.terrain = json.TerrainLayer;

};