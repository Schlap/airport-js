function Airport() {

this.planes = [];

}

function Plane(name) {
  this.name = name;
}

Airport.prototype.land = function(plane) {
  
  if(this.planes.indexOf(plane)==-1)
  this.planes.push(plane); 
else
  return false
  
};

Airport.prototype.takeOff = function(plane) {
  this.planes.pop(plane);
};