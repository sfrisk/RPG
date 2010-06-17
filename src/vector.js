function Vector()
{
	this.x = 0;
	this.y = 0;
	this.z = 0;
};

Vector.prototype.set = function(x,y,z)
{
	this.x = x;
	this.y = y;
	this.z = z;
};

Vector.prototype.setVector = function(vector)
{
	this.x = vector.x;
	this.y = vector.y;
	this.z = vector.z;
};

Vector.prototype.getX = function()
{
	return this.x;
};

Vector.prototype.setX = function(x)
{
	this.x = x;
}

Vector.prototype.getY = function()
{
	return this.y;
};

Vector.prototype.setY = function(y)
{
	this.y = y;
}

Vector.prototype.getZ = function()
{
	return this.z;
}

Vector.prototype.setZ = function(z)
{
	this.z = z;
}
Vector.prototype.move = function(mx,my,mz)
{
	this.x += mx;
	this.y += my;
	this.z += mz;
};

Vector.prototype.addVector = function(vector)
{
	this.x += vector.x;
	this.y += vector.y;
	this.z += vector.z;
};

Vector.prototype.subVector = function(vector)
{
	this.x -= vector.x;
	this.y -= vector.y;
	this.z -= vector.z;
};

Vector.prototype.multVector = function(vector)
{
	this.x *= vector.x;
	this.y *= vector.y;
	this.z *= vector.z;
};

Vector.prototype.divVector = function(vector)
{
	this.x /= vector.x;
	this.y /= vector.y;
	this.z /= vector.z;
};

Vector.prototype.dist2D = function(vector)
{
	return Math.sqrt((vector.x-this.x)*(vector.x-this.x) + (vector.y-this.y)*(vector.y-this.y));
};

Vector.prototype.length = function()
{
	return Math.sqrt((this.x*this.x) + (this.y*this.y) + (this.z*this.z));
};

Vector.prototype.dotProduct = function(vector)
{
	return ((this.x*vector.x) + (this.y*vector.y) + (this.z*vector.z));
};

Vector.prototype.crossProduct = function(vector)
{
	v = new Vector();
	nx = (this.y*vector.z) - (this.z*vector.y);
	ny = (this.z*vector.y) - (this.x*vector.z);
	nz = (this.x*vector.y) - (this.y*vector.x);
	v.setVector(nx,ny,nz);
	return v;
};

Vector.prototype.normal = function()
{
	length = null;
	v = new Vector();
	if(this.length() == 0)
		length = 0;
	else
		length = 1/this.length();
	nx = this.x * length;
	ny = this.y * length;
	nz = this.z * length;
	v.setVector(nx,ny,nz);
	return v;
};