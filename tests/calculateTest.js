describe("Calculate bill", function () {
  it("should show you the  bill for sms(0,75)", function () {
    assert.equal(0.75, calculateBill("sms, sms"));
  });
});
