function Airport() {

this.planes = []

}

function Plane() {}

Airport.prototype.land = function(plane) {
  this.planes.push(plane) 
  
};

Airport.prototype.takeOff = function(plane) {
  this.planes.pop(plane)
};