function radioBill() {
  var radioCallTotal = 0;
  var radioSmsTotal = 0;

  function setTextCall(bill) {
    if (bill === "call") {
      radioCallTotal += 2.75;
    }
    if (bill === "sms") {
      radioSmsTotal += 0.75;
    }
  }
  function radCallsTotal() {
    return radioCallTotal;
  }
  function radSmsTotal() {
    return radioSmsTotal;
  }
  function radTotal() {
    return radioCallTotal + radioSmsTotal;
  }
  function setClass() {
    if (radTotal() >= 30 && radTotal() < 50) {
      return "warning";
    } else if (radTotal() >= 50) {
      return "danger";
    }
  }

  return {
    setTextCall,
    radCallsTotal,
    radSmsTotal,
    radTotal,
    setClass,
  };
}
