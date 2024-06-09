
describe('Electron Finder', function() {
	beforeEach(function() {
		e_finder = new ElectronFinder();
	});

	it('should return "electron_array is not an array!" for an type other than array', function() {
		electron_array = "";
		expect(e_finder.findElectrons(electron_array)).toBe("electron_array is not an array!");
	});
	it('should return "array size not valid" if size of array not between 4-6', function() {
		electron_array = [1,2];
		expect(e_finder.findElectrons(electron_array)).toBe("array size not valid");
	});
	it('should return "array values not valid type" if array values are not number', function() {
		electron_array = ["a","b","c", "d"];
		expect(e_finder.findElectrons(electron_array)).toBe("array values not of valid type");
	});
	it('should return "array values not between 1-6" if array values are not numbers 1-6', function() {
		electron_array = [7,8,9,10,11];
		expect(e_finder.findElectrons(electron_array)).toBe("array values not valid");
	});
	it('should return "all numbers are even" if all array values are even numbers', function() {
		electron_array = [2,4,4,4];
		expect(e_finder.findElectrons(electron_array)).toBe("all numbers are even");
	});
	it('should return "[1,3,5] length = 3" for given array', function() {
		electron_array = [1,2,3,4,5];
		expect(e_finder.findElectrons(electron_array)).toEqual(3);
	});
	it('should return "6" for given array', function() {
		electron_array = [1,2,3,4,5];
		expect(e_finder.findElectrons(electron_array)).toEqual(6);
	});

});


/*
TODO LISTE

Steps:

- non array types should return -> 0
- if size of array not between 4-6 -> array not valid
- if array has non integer values -> array not valid
- if numbers(array values) are not between 1-6 -> array not valid
- if numbers are even -> 0
- [1,2,3,4,5] uneven numbers with electrons in hull are: [1,3,5]
- [3,5] number of electrons -> 6

*/
