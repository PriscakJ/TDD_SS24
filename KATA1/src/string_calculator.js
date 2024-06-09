// StringCalculator.js
function StringCalculator() {}
StringCalculator.prototype.add = function(string_numbers) {
	//
	let result = 0
	let delimiiter = ','

	if (!string_numbers.includes(delimiiter)) {
		if (string_numbers.length > 0)
		result = +string_numbers
	}
	
	else {
		let numbers = string_numbers.split(delimiiter)
		numbers.forEach(number => {
			result = result + +number
		})
		
	} 
	return result 
};
