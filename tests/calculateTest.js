describe("Calculate bill", function () {
  describe("Values", function () {
    it("should show you the  bill for sms(0,75)", function () {
      var callB = calcBill();
      callB.calculateBill("sms");
      assert.equal(0.75, callB.bTotal());
    });
    it("should show you the  bill for call(2,75)", function () {
      var callB = calcBill();
      callB.calculateBill("call");
      assert.equal(2.75, callB.bTotal());
    });
    it("should show you the  bill for call(2,75) and sms(0.75)", function () {
      var callB = calcBill();
      callB.calculateBill("call, sms");
      assert.equal(3.5, callB.bTotal());
    });
    it("should show you the total bill for a string of calls and sms", function () {
      var callB = calcBill();
      callB.calculateBill("call, sms, call, sms, call, sms, call, sms");
      assert.equal(14, callB.bTotal());
    });
  });
  describe("Classes", function () {
    it("should return 'warning' for total greater than 20", function () {
      var callB = calcBill();

      callB.calculateBill(
        "call, sms, call, sms, call, sms, call, sms, call, sms, call, sms"
      );

      assert.equal(21, callB.bTotal());
      assert.equal("warning", callB.setCalcClass());
    });
    it("should return 'danger' for total greater than 30", function () {
      var callB = calcBill();

      callB.calculateBill(
        "call, sms, call, sms, call, sms, call, sms, call, sms, call, sms,  sms, call, sms, call, sms, call, sms"
      );

      assert.equal(32.25, callB.bTotal());
      assert.equal("danger", callB.setCalcClass());
    });
  });
});
