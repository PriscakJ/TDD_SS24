function Spaceship() { }

Spaceship.prototype.findSpaceship = function (map) {
    const rows = map.split('\n');
    const numberOfRows = rows.length;

    let spaceshipPosition = null; 
	let xCount = 0;

    if (numberOfRows > 6) {
        return "Too many rows"};

	if (map != '' && numberOfRows<6){
		return "Too few rows"};

	for (let row of rows) {
		for (let char of row) {
			if (char === 'X') {
				xCount++;
			}
		}
		}
	if (map != '' && xCount != 1){
		return "Count of spaceship incorrect";
	}	

	//ToDo 6
	for (let y = 0; y < rows.length; y++) {
        for (let x = 0; x < rows[y].length; x++) {
            if (rows[y][x] === 'X') {
                xCount++;
                spaceshipPosition = [x, numberOfRows - y - 1];
            }
        }
    }

    if (xCount === 0) {
        return "Spaceship lost forever";
    }

    return spaceshipPosition ? spaceshipPosition : "Spaceship lost forever";
};