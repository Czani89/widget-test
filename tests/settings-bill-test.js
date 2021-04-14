describe("Settings bill with factory functions", function () {
  describe("set values", function () {
    it("should set call cost", function () {
      let settingBill = setBilling();
      settingBill.setCall(1.75);
      assert.equal(1.75, settingBill.callSet());

      let settingBill2 = setBilling();
      settingBill2.setCall(2.75);
      assert.equal(2.75, settingBill2.callSet());
    });
    it("should set sms cost", function () {
      let settingBill = setBilling();
      settingBill.setSms(0.75);
      assert.equal(0.75, settingBill.smsSet());

      let settingBill2 = setBilling();
      settingBill2.setSms(0.85);
      assert.equal(0.85, settingBill2.smsSet());
    });
    it("should set call and sms cost", function () {
      let settingBill = setBilling();

      settingBill.setCall(1.75);
      settingBill.setSms(0.75);

      assert.equal(1.75, settingBill.callSet());
      assert.equal(0.75, settingBill.smsSet());

      let settingBill2 = setBilling();

      settingBill2.setCall(2.75);
      settingBill2.setSms(0.85);

      assert.equal(2.75, settingBill2.callSet());
      assert.equal(0.85, settingBill2.smsSet());
    });
    it("should set warning level cost", function () {
      let settingBill = setBilling();
      settingBill.setWarning(30);
      assert.equal(30, settingBill.warningSet());

      let settingBill2 = setBilling();
      settingBill2.setWarning(50);
      assert.equal(50, settingBill2.warningSet());
    });
    it("should set critical level cost", function () {
      let settingBill = setBilling();
      settingBill.setCritical(30);
      assert.equal(30, settingBill.criticalSet());

      let settingBill2 = setBilling();
      settingBill2.setCritical(50);
      assert.equal(50, settingBill2.criticalSet());
    });
    it("should set warning and critical level cost", function () {
      let settingBill = setBilling();

      settingBill.setWarning(30);
      settingBill.setCritical(50);

      assert.equal(30, settingBill.warningSet());
      assert.equal(50, settingBill.criticalSet());
    });
  });
  describe("use values", function () {
    it("should return a a call cost cost of 5.25 when 3 calls are made", function () {
      let settingBill = setBilling();

      settingBill.setSms(0.75);
      settingBill.setCall(1.75);
      settingBill.setCritical(15);

      settingBill.makeCall();
      settingBill.makeCall();
      settingBill.makeCall();

      assert.equal(0.0, settingBill.smssTotals());
      assert.equal(5.25, settingBill.callsTotals());
      assert.equal(5.25, settingBill.phoneBillTotal());
    });
    it("should return a total cost cost of 2.25 when 3 sms's are made", function () {
      let settingBill = setBilling();

      settingBill.setSms(0.75);
      settingBill.setCall(1.75);
      settingBill.setCritical(15);

      settingBill.makeSms();
      settingBill.makeSms();
      settingBill.makeSms();

      assert.equal(2.25, settingBill.smssTotals());
      assert.equal(0.0, settingBill.callsTotals());
      assert.equal(2.25, settingBill.phoneBillTotal());
    });
    it("should return a total cost cost of 2.25 when 3 sms's, 5.25 when 3 calls are made and the phone bill total to 7.50", function () {
      let settingBill = setBilling();

      settingBill.setSms(0.75);
      settingBill.setCall(1.75);
      settingBill.setCritical(15);

      settingBill.makeSms();
      settingBill.makeSms();
      settingBill.makeSms();

      settingBill.makeCall();
      settingBill.makeCall();
      settingBill.makeCall();

      assert.equal(2.25, settingBill.smssTotals());
      assert.equal(5.25, settingBill.callsTotals());
      assert.equal(7.5, settingBill.phoneBillTotal());
    });
  });
  describe("set classes", function () {
    it("should return warning when warning level cost is reached", function () {
      let settingBill = setBilling();

      settingBill.setSms(0.75);
      settingBill.setCall(1.75);
      settingBill.setWarning(10);
      settingBill.setCritical(15);

      settingBill.makeSms();
      settingBill.makeSms();
      settingBill.makeSms();

      settingBill.makeCall();
      settingBill.makeCall();
      settingBill.makeCall();
      settingBill.makeCall();
      settingBill.makeCall();

      assert.equal("warning", settingBill.warnings());
    });
    it("should return danger when warning level cost is reached", function () {
      let settingBill = setBilling();

      settingBill.setSms(0.75);
      settingBill.setCall(2.75);
      settingBill.setWarning(10);
      settingBill.setCritical(15);

      settingBill.makeSms();
      settingBill.makeSms();
      settingBill.makeSms();
      settingBill.makeSms();
      settingBill.makeSms();
      settingBill.makeSms();

      settingBill.makeCall();
      settingBill.makeCall();
      settingBill.makeCall();
      settingBill.makeCall();
      settingBill.makeCall();

      assert.equal("danger", settingBill.warnings());
    });
  });
});
