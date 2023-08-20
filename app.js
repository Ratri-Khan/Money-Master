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
    // const totalExpenses = parseFloat(totalExpensesFeild);
    // console.log(totalExpenses);
    // const total = totalExpensesAmount + totalExpenses;
    // console.log(total);
    
    totalExpensesFeild.innerText = totalExpensesAmount; 

})
