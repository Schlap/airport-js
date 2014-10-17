function Airport() {

this.planes = [];

}

function Plane(name) {
  this.name = name;
}

Airport.prototype.land = function(plane) {
  var notFound = -1
  if(this.planes.indexOf(plane)== notFound)
  this.planes.push(plane); 
else
  return 'This plane has already landed';
  
};

Airport.prototype.takeOff = function(plane) {
  this.planes.splice(plane, 1)

};