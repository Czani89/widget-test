function textBill() {
  var textCallTotal = 0;
  var textSmsTotal = 0;

  function setCall(call) {
    if (call === "call") {
      textCallTotal += 2.75;
    }
    if (call === "sms") {
      textSmsTotal += 0.75;
    }
  }
  function callsTotal() {
    return textCallTotal;
  }
  function smsTotal() {
    return textSmsTotal;
  }
  function total() {
    return textCallTotal + textSmsTotal;
  }

  function setTextClass() {
    if (total() >= 30 && total() < 50) {
      return "warning";
    } else if (total() >= 50) {
      return "danger";
    }
  }

  return {
    setCall,
    callsTotal,
    smsTotal,
    total,
    setTextClass,
  };
}
