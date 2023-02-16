

// calculate button

function getInput(InputId) {
    const getInput = document.getElementById(InputId);
    const InputString = getInput.value;
    const Input = parseFloat(InputString);
    return Input;
}


document.getElementById('calculate-button').addEventListener('click', function () {
    const Income = getInput('Income');
    const Food = getInput('Food');
    const Rent = getInput('Rent');
    const Clothes = getInput('Clothes');

    const TotalExpenses = Food + Rent + Clothes;
    const Balance = Income - TotalExpenses;
    if(TotalExpenses>Income){
        alert("First earn that much you Fohir");
        return;
    }
    if(isNaN(Income) || isNaN(Food) || isNaN(Rent) || isNaN(Clothes)) {
        alert("Input Valid Number you illiterate");
        return;
    }

    const getExpenses = document.getElementById('total-expenses');
    const getBalance = document.getElementById('balance');
    getExpenses.innerText = TotalExpenses;
    getBalance.innerText = Balance;


});
document.getElementById('save-btn').addEventListener('click', function () {

    const Income = getInput('Income');
    const Food = getInput('Food');
    const Rent = getInput('Rent');
    const Clothes = getInput('Clothes');

    const TotalExpenses = Food + Rent + Clothes;
    const Balance = Income - TotalExpenses;

    const SaveParcent = getInput('save-input');
    const Saving = Income * SaveParcent/100;

    if(isNaN(SaveParcent)) {
        alert("Input Valid Number you illiterate");
        return;
    }

    const TotalSaving = document.getElementById('s-amount')
    const Remaining = document.getElementById('r-balance')

  const RemainingBalance = Balance - Saving;

    TotalSaving.innerText= Saving;

    Remaining.innerText = RemainingBalance;

});

document.getElementById('reset-btn').addEventListener('click', function () {
    
    const income = document.getElementById('Income');
    const Food = document.getElementById('Food');
    const rent = document.getElementById('Rent');
    const Clothes = document.getElementById('Clothes');
    const save = document.getElementById('save-input');
    
    income.value = '';
    Food.value = '';
    rent.value = '';
    Clothes.value = '';
    save.value = '';

    const expenses = document.getElementById('total-expenses');
    const balance = document.getElementById('balance');
    const savings = document.getElementById('s-amount');
    const Remaining = document.getElementById('r-balance');

    expenses.innerText = '0';
    balance.innerText = '0';
    savings.innerText = '0';
    Remaining.innerText = '0';


});

