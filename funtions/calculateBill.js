function calcBill() {
  var total = 0;

  function calculateBill(bill) {
    var billItems = bill.split(",");

    for (let i = 0; i < billItems.length; i++) {
      var billType = billItems[i].trim();
      if (billType === "call") {
        total += 2.75;
      }
      if (billType === "sms") {
        total += 0.75;
      }
    }
  }
  function bTotal() {
    return total;
  }

  return {
    calculateBill,
    bTotal,
  };
}
