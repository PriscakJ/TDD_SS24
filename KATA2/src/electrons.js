// StringCalculator.js
function ElectronFinder() {}
ElectronFinder.prototype.findElectrons = function(electron_array) {
	// check type of array
	if(!Array.isArray(electron_array)) {
		return "electron_array is not an array!";
	}
	// check size of array
	length = electron_array.length;
	if(length > 6 || length < 4) {
		return "array size not valid"
	}
	// check type of values of array
	for (let i = 0; i < electron_array.length; i++) {
        if (typeof electron_array[i] !== 'number') {
            return "array values not of valid type";
        }
    }
	// check values between 1-6
	for (let i = 0; i < electron_array.length; i++) {
        if (electron_array[i] < 1 || electron_array[i] > 6) {
            return "array values not valid";
        }
    }
    // check for uneven numbers and add uneven to array
    let uneven_array = [];
    for (let i = 0; i < electron_array.length; i++) {
        if (electron_array[i] % 2 !== 0) {
            uneven_array.push(electron_array[i]);
        }
    }

    if (uneven_array.length > 0) {
        // calculate electrons with uneven array
        let sum = 0;
        uneven_array.forEach(element => {
            sum += (element - 1);
        });
        return sum;
    } else {
        return "all numbers are even";
    }

};
