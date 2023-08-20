document.getElementById('calculate').addEventListener('click',function(){
    const totalIncome = document.getElementById('total-income').value;   
    const totalIncomeAmount = parseFloat(totalIncome);
    
    const foodExpenses = document.getElementById('food-expensive').value;
    const foodExpensesAmount = parseFloat(foodExpenses);

    const rentExpenses = document.getElementById('rent-expensive').value;
    const rentExpensesAmount = parseFloat(rentExpenses);

    const clothExpenses = document.getElementById('cloth-expensive').value;
    const clothExpensesAmount = parseFloat(clothExpenses);

    const totalExpensesAmount = foodExpensesAmount + rentExpensesAmount + clothExpensesAmount ;

    const totalExpensesFeild = document.getElementById('total-expenses');
    const totalExpensesString = totalExpensesFeild.innerText;
    const totalExpenses = parseFloat(totalExpensesString);
    // console.log(totalExpenses);
    const total = totalExpensesAmount + totalExpenses;
    // console.log(total);
    
    totalExpensesFeild.innerText = total; 
    // return total;

    const totalBalanceFeild = document.getElementById('total-balance');
    const totalBalanceString = totalBalanceFeild.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    const balanceFeild = totalIncomeAmount + totalBalance;
    const balance = balanceFeild - total;
    totalBalanceFeild.innerText = balance;
})
document.getElementById('saving').addEventListener('click',function(){
    const savingInputFeild = document.getElementById('saving-input');
    const savingInputString = savingInputFeild.value;
    const savingAmount = parseFloat(savingInputString);

    const savingAmountFeild = document.getElementById('saving-amount');
    const savingAmountString = savingAmountFeild.innerText;
    const preSavingAmount = parseFloat(savingAmountString);

    const totalBalanceFeild = document.getElementById('total-balance');
    const totalBalanceString= totalBalanceFeild.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    const saving = totalBalance / 100 * savingAmount ;
    savingAmountFeild.innerText = saving ;

    const reaminingBalanceFeild = document.getElementById('reamining-balance');
    const reaminingBalanceString = reaminingBalanceFeild.innerText;
    const reaminingBalance  = parseFloat(reaminingBalanceString);

    const remaing = totalBalance - saving ;

    reaminingBalanceFeild.innerText = remaing;

})