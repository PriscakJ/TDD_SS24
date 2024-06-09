describe('Find Spaceship', function() {
	beforeEach(function() {
		spaceship = new Spaceship();
	});
	it('should return "Spaceship lost forever" if the map is empty', function(){
		const map ='';
		expect(spaceship.findSpaceship(map)).toBe("Spaceship lost forever");
	})

});

