describe('Find Spaceship', function() {
    let spaceship;

    beforeEach(function() {
        spaceship = new Spaceship();
    });

    it('should return "Spaceship lost forever" if the map is empty', function(){
        const map = '';
        expect(spaceship.findSpaceship(map)).toBe("Spaceship lost forever");
    });

    it('should return "Too many rows" if rows > 6', function(){
        const map = "..........\n..........\n..........\n..........\n..........\n..........\n..........";
        expect(spaceship.findSpaceship(map)).toBe("Too many rows");
    });

    it('should return "Too few rows" if rows < 6', function(){
        const map = "..........\n..........\n..........\n..........";
        expect(spaceship.findSpaceship(map)).toBe("Too few rows");
    }); 

	it('should return "Too many or too few spaceships', function(){
        const map = ".........X\n..........\n..........\n....X.....\n..........\n..........";
        expect(spaceship.findSpaceship(map)).toBe("Count of spaceship incorrect");
    }); 
	it('should return "Spaceship found at [0,0]', function(){
        const map = "..........\n..........\n..........\n..........\n..........\nX.........";
        expect(spaceship.findSpaceship(map)).toEqual([0, 0]);
    }); 
});