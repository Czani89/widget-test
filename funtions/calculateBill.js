var callTotal = 0;
var smsTotal = 0;
var total = 0;
var billItems;
function calculateBill(bill) {
  billItems = bill.split(",");

  for (let i = 0; billItems.length; i++) {
    var billType = billItems[i].trim();
    if (billType === "call") {
      callTotal += 2.75;
    }
    if (billType === "sms") {
      smsTotal += 0.75;
    }
  }
  total = callTotal + smsTotal;

  return total;
}
