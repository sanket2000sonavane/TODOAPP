function calculateInvestment(investment) {
    var initialAmount = investment.initialAmount, annualContribution = investment.annualContribution, expectedReturn = investment.expectedReturn, duration = investment.duration;
    if (initialAmount < 0) {
        return "Initial amount should be greater than 0.";
    }
    if (duration <= 0) {
        return "No valid amount of years.";
    }
    if (expectedReturn < 0) {
        return " Expected return must be at least zero.";
    }
    var total = initialAmount;
    var totalContributions = 0;
    var totalInterrestEarned = 0;
    var annualResults = [];
    for (var i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInterrestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;
        annualResults.push({
            year: "Year ".concat(i + 1),
            totalAmount: total,
            totalInterrestEarned: totalInterrestEarned,
            totalContributions: totalContributions,
        });
    }
    return annualResults;
}
function printResults(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
        var yearEndResults = results_1[_i];
        console.log(yearEndResults.year);
        console.log("Total: ".concat(yearEndResults.totalAmount.toFixed(0)));
        console.log("Total Contributions: ".concat(yearEndResults.totalContributions.toFixed(0)));
        console.log("Total Interest Earned: ".concat(yearEndResults.totalInterrestEarned.toFixed(0)));
        console.log('-----------------------------------------------------------');
    }
}
var inputData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedReturn: 0.08,
    duration: 10,
};
var results = calculateInvestment(inputData);
printResults(results);
