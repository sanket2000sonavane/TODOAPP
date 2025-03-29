type InvestmentData = {
    initialAmount : number;
    annualContribution : number;
    expectedReturn : number;
    duration : number;
};

type InvestmentResult = {
    year : string;
    totalAmount : number;
    totalContributions : number;
    totalInterrestEarned : number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(investment: InvestmentData): CalculationResult {
    const {initialAmount, annualContribution, expectedReturn, duration} = investment;

    if (initialAmount < 0){
        return "Initial amount should be greater than 0."
    }

    if (duration <= 0){
        return "No valid amount of years."
    }

    if (expectedReturn < 0){
        return " Expected return must be at least zero."
    }

    let total = initialAmount;
    let totalContributions = 0;
    let totalInterrestEarned = 0;

    const annualResults: InvestmentResult[] = [];

    for (let i = 0; i <  duration; i++){
        total = total * (1 + expectedReturn);
        totalInterrestEarned = total - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        total = total + annualContribution;

        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInterrestEarned: totalInterrestEarned,
            totalContributions: totalContributions,
        })
    }

    return annualResults;
}

function printResults(results: CalculationResult): void {
    if(typeof results === 'string'){
        console.log(results);
        return;
    }

    for (const yearEndResults of results) {
        console.log(yearEndResults.year);
        console.log(`Total: ${yearEndResults.totalAmount.toFixed(0)}`)
        console.log(`Total Contributions: ${yearEndResults.totalContributions.toFixed(0)}`)
        console.log(`Total Interest Earned: ${yearEndResults.totalInterrestEarned.toFixed(0)}`)
        console.log('-----------------------------------------------------------')
        
    }
    
}

let inputData: InvestmentData = {
    initialAmount : 5000,
    annualContribution : 500,
    expectedReturn : 0.08,
    duration : 10,
};
const results = calculateInvestment(inputData)

printResults(results)