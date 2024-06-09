describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});



	it('should return 1 for an string of "1"', function() {
		expect(calculator.add('1')).toEqual(1);
	});

	it('should return 3 for an string of "1,2"', function() {
		expect(calculator.add('1,2')).toEqual(3);
	});
	
	it('should return 28 for an string of "1,27"', function() {
		expect(calculator.add('1,27')).toEqual(28);
	});

	it('should return 53 for an string of "15,17,21"', function() {
		expect(calculator.add('15,17,21')).toEqual(53);
	});


});
