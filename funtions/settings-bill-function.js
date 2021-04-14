function setBilling() {
  let settingCall = 0;
  let settingSms = 0;
  let settingWarning = 0;
  let settingCritical = 0;
  let callsTotal = 0;
  let smsTotal = 0;

  function setCall(call) {
    settingCall = call;
  }
  function callSet() {
    return settingCall;
  }
  function setSms(sms) {
    settingSms = sms;
  }
  function smsSet() {
    return settingSms;
  }
  function setWarning(warning) {
    settingWarning = warning;
  }
  function warningSet() {
    return settingWarning;
  }
  function setCritical(critical) {
    settingCritical = critical;
  }
  function criticalSet() {
    return settingCritical;
  }

  function makeCall() {
    if (!criticalCheck()) {
      callsTotal += settingCall;
    }
  }
  function callsTotals() {
    return callsTotal;
  }
  function makeSms() {
    if (!criticalCheck()) {
      smsTotal += settingSms;
    }
  }
  function smssTotals() {
    return smsTotal;
  }
  function phoneBillTotal() {
    return smsTotal + callsTotal;
  }

  function criticalCheck() {
    return phoneBillTotal() >= criticalSet();
  }

  function warnings() {
    if (criticalCheck()) {
      return "danger";
    }
    if (phoneBillTotal() >= warningSet()) {
      return "warning";
    }
  }

  return {
    setCall,
    callSet,
    setSms,
    smsSet,
    setWarning,
    warningSet,
    setCritical,
    criticalSet,
    makeCall,
    callsTotals,
    makeSms,
    smssTotals,
    phoneBillTotal,
    warnings,
  };
}
