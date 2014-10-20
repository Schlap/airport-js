describe('Airport', function () {

  beforeEach(function(){

    airport = new Airport
    plane = new Plane('James')

  });


  it('is empty', function () {

    expect(airport.planes).toEqual([])

  });

  it('can hold a planes', function () {
     jumbo = new Plane
     boeing = new Plane
     airport.land(jumbo)
     airport.land(boeing)
     expect(airport.planes).toEqual([jumbo, boeing])

  });

  it('can allow plane to takeoff', function () {
    airport.land(plane)
    airport.takeOff(plane)
    expect(airport.planes).toEqual([])

  });

  it('does not land the same plane twice', function () {
    airport.land(plane)
    airport.land(plane)
    expect(airport.planes).toEqual([plane])
    });

  it('reports if the same plane lands twice', function () {
    airport.land(plane)
    expect(airport.land(plane)).toEqual('This plane has already landed')

  });

  it('chooses which plane takes off', function () {
    jumbo = new Plane('jumbo')
    boeing = new Plane('boeing')
    airport.land(jumbo)
    airport.land(boeing)
    airport.takeOff(jumbo)
    expect(airport.planes).toEqual([boeing])


  });


  describe('Plane', function () {

    it('can have a name', function () {

      expect(plane.name).toEqual('James')

    });


  });

 

});

