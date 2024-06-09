function Spaceship() { }

Spaceship.prototype.findSpaceship = function (map) {
    const rows = map.split('\n');
    const numberOfRows = rows.length;

    let spaceshipPosition = null; 

    if (numberOfRows > 6) {
        return "Too many rows"};

	if (map != '' && numberOfRows<6){
		return "Too few rows"};
	

    return spaceshipPosition ? spaceshipPosition : "Spaceship lost forever";
};