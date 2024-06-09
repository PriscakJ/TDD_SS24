// StringCalculator.js
function Spaceship() { }
Spaceship.prototype.findSpaceship = function (map) {

	const rows = map.split('\n');

	let spaceshipPosition = null; 

	return spaceshipPosition ? spaceshipPosition : "Spaceship lost forever";
};