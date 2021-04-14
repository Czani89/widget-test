describe("Radio bill", function () {
  describe("Set Radio-bill Values", function () {
    it("should show you the  bill for one sms(0,75)", function () {
      let radBill = radioBill();
      radBill.setTextCall("sms");
      assert.equal(0.0, radBill.radCallsTotal());
      assert.equal(0.75, radBill.radSmsTotal());
      assert.equal(0.75, radBill.radTotal());
    });
    it("should show you the  bill for one call(2,75)", function () {
      let radBill = radioBill();
      radBill.setTextCall("call");
      assert.equal(2.75, radBill.radCallsTotal());
      assert.equal(0.0, radBill.radSmsTotal());
      assert.equal(2.75, radBill.radTotal());
    });
    it("should show you the  bill for one calls and one sms made", function () {
      let radBill = radioBill();

      radBill.setTextCall("call");
      radBill.setTextCall("sms");

      assert.equal(2.75, radBill.radCallsTotal());
      assert.equal(0.75, radBill.radSmsTotal());
      assert.equal(3.5, radBill.radTotal());
    });
  });
  describe("Set Radio-bill classes", function () {
    it("should show 'warning' when bill is greater or equal to 30", function () {
      let radBill = radioBill();
      let radBill2 = radioBill();

      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");

      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");

      assert.equal(38.5, radBill.radTotal());
      assert.equal("warning", radBill.setClass());

      assert.equal(30.25, radBill2.radTotal());
      assert.equal("warning", radBill2.setClass());
    });
    it("should show 'danger' when bill is greater or equal to 50", function () {
      let radBill = radioBill();
      let radBill2 = radioBill();

      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");
      radBill.setTextCall("call");

      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("call");
      radBill2.setTextCall("sms");
      radBill2.setTextCall("sms");
      radBill2.setTextCall("sms");
      radBill2.setTextCall("sms");
      radBill2.setTextCall("sms");

      assert.equal(60.5, radBill.radTotal());
      assert.equal("danger", radBill.setClass());

      assert.equal(50.5, radBill2.radTotal());
      assert.equal("danger", radBill2.setClass());
    });
  });
});
