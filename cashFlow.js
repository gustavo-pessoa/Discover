cashFlow = {
    incomes: [125, 50, 41, 60, 600],
    expenses: [20, 69, 85, 44, 500],
}

function sum(items) {
    let total = 0;

    for(let value of items) {
        total += value;
    }
    return total;
}

function balance() {
   const incomesTotal = sum(cashFlow.incomes);
   const expensesTotal = sum(cashFlow.expenses);

   balance = incomesTotal - expensesTotal;

   let status = "Your balance is negative";

   if (balance > 0) {
       status = "Your balance is positive";
   } 

   console.log(balance, status);
}

balance();
