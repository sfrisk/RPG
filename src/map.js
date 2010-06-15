function Map(src)
{
	this.src = src; //this is the location of the JSON file 
	this.init(this.src);
};

Map.prototype.init = function()
{
	var map = this;
	$.getJSON(map.src, null, function(json){
		map.cell_width = json.CellWidth;
		map.cell_height = json.CellHeight;
		map.map_width = json.MapWidth;
		map.map_height = json.MapHeight;
		map.map_tiles1 = new Image();	
		map.map_tiles1.src = json.MapSource;
		map.walkable = json.Walkable;
		map.terrain = json.TerrainLayer;
	});


//we're gonna have to put some other stuff here, scrollable maps, doors, etc

};
