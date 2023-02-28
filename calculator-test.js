
it('should calculate the monthly rate correctly', function () {
    const values = {
        amount: 10000,
        years: 10,
        rate: 4.5
    };
    expect(calculateMonthlyPayment(values)).toEqual ('103.64')
  });
  
//   This test does not run as expected
// My bad I put the wrong figures in ... day one stuff
  
  it("should return a result with 2 decimal places", function() {
    const values = {
        amount: 25798,
        years: 7,
        rate: 7.7
    };
    expect(calculateMonthlyPayment(values)).toBe ('398.25')
  });
  
