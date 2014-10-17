describe('Airport', function () {

  beforeEach(function(){

    airport = new Airport
    plane = new Plane

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

  xit('can not land the same plane twice', function(){
    airport.land(plane)
    airport.land(plane)
    expect(airport.planes).toEqual('This plane has already landed')

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



});

