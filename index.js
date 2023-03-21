function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};
saturdayFun();

const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}
mondayWork();

function wrapAdjective( symbol ="*") {
    const innerFunction = function (msg = "Special") {
      return `You are ${symbol}${msg}${symbol}!`;
    };
    return innerFunction;
  }

wrapAdjective("%")("a dedicated programmer");