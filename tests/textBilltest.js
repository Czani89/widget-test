describe("Text bill", function () {
  describe("Set Text-bill values", function () {
    it("should show you the  bill for sms(0,75)", function () {
      let textB = textBill();
      textB.setCall("sms");
      assert.equal(0.0, textB.callsTotal());
      assert.equal(0.75, textB.smsTotal());
      assert.equal(0.75, textB.total());
    });
    it("should show you the  bill for call(2,75)", function () {
      let textB = textBill();
      textB.setCall("call");
      assert.equal(2.75, textB.callsTotal());
      assert.equal(0.0, textB.smsTotal());
      assert.equal(2.75, textB.total());
    });
    it("should show you the  bill for sms and call", function () {
      let textB = textBill();
      textB.setCall("call");
      textB.setCall("sms");
      assert.equal(2.75, textB.callsTotal());
      assert.equal(0.75, textB.smsTotal());
      assert.equal(3.5, textB.total());
    });
  });
  describe("Set Text-bill values", function () {
    it("should show 'warning' when bill is greater or equal to 30", function () {
      let textB = textBill();
      let textB2 = textBill();

      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");

      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");

      assert.equal(38.5, textB.total());
      assert.equal("warning", textB.setTextClass());

      assert.equal(30.25, textB2.total());
      assert.equal("warning", textB2.setTextClass());
    });
    it("should show 'danger' when bill is greater or equal to 50", function () {
      let textB = textBill();
      let textB2 = textBill();

      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");
      textB.setCall("call");

      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("call");
      textB2.setCall("sms");
      textB2.setCall("sms");
      textB2.setCall("sms");
      textB2.setCall("sms");
      textB2.setCall("sms");

      assert.equal(60.5, textB.total());
      assert.equal("danger", textB.setTextClass());

      assert.equal(50.5, textB2.total());
      assert.equal("danger", textB2.setTextClass());
    });
  });
});
