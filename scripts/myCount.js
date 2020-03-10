let myMoney = 1082;
let salaryInCarrefourOctober = (16 * 8 * 13);
let moneyForNow, moneyInTheEndOfNextWeek, moneyBeforeWeGoToHome, moneyAfterIReturnInWarsaw;

moneyForNow = myMoney - (333 + 107);

console.log('moneyForNow', moneyForNow);

moneyInTheEndOfNextWeek = moneyForNow - (200) + (500);
true ? moneyInTheEndOfNextWeek += 555 : 1 ;

console.log('moneyInTheEndOfNextWeek', moneyInTheEndOfNextWeek);

moneyBeforeWeGoToHome = moneyInTheEndOfNextWeek - 150 + 250;
true ? moneyBeforeWeGoToHome += 890 : 1 ;

console.log('moneyBeforeWeGoToHome',moneyBeforeWeGoToHome );

moneyAfterIReturnInWarsaw = moneyBeforeWeGoToHome - (100 + 100 + 300 + 200) + (salaryInCarrefourOctober - 800);

console.log('moneyAfterIReturnInWarsaw', moneyAfterIReturnInWarsaw);
