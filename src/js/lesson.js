"use strict";

let startBtn = document.getElementById('start'),
        budgetValue = document.getElementsByClassName('budget-value')[0],
        dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
        levelValue = document.getElementsByClassName('level-value')[0],
        expensesValue = document.getElementsByClassName('expenses-value')[0],
        optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
        incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

        expensesItem = document.getElementsByClassName('expenses-item'),
        expensesBtn = document.getElementsByTagName('button')[0],
        optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

		incomeItem = document.querySelector('.choose-income'),
		checkSavings = document.querySelector('#savings'),
		
		sumValue = document.querySelector('.choose-sum'),
		percentValue = document.querySelector('.choose-percent'),

		yearValue = document.querySelector('.year-value'),
		monthValue = document.querySelector('.month-value'),
		dayValue = document.querySelector('.day-value');

let mony, time;

expensesBtn.disabled = true;
optionalExpensesBtn. disabled = true;
countBtn.disabled = true;

//* бюджета
startBtn.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
	mony = +prompt('Ваш бюджет на месяц?', '');

	while (isNaN(mony) || mony == "" || mony == null) {
        mony = +prompt('Ваш бюджет на месяц?', '');
    }

	appData.budget = mony;
	appData.timeData = time;
	budgetValue.textContent = mony.toFixed();

	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDay();

	expensesBtn.disabled = false;
	optionalExpensesBtn. disabled = false;
	countBtn.disabled = false;
});

//* обязательные расходы
expensesBtn.addEventListener('click', function() {
	let sum = 0;
	let resBudget = appData.budget;

	for (let i = 0; i < expensesItem.length; i++) {
		let a = expensesItem[i].value,
			b = expensesItem[++i].value;
	
		if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
			console.log('все верно');
			appData.expenses[a] = b;
			sum += +b;
		} else {
			i--;
		}
	}
	expensesValue.textContent = sum;
	resBudget -= sum; 
	appData.budget = resBudget;
	budgetValue.textContent = appData.budget.toFixed();
});

optionalExpensesBtn.addEventListener('click', function() {
	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let opt = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = opt;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + ', ';
	}
});

countBtn.addEventListener('click', function() {
	if (appData.budget != undefined) {
		appData.monyPerDay = (appData.budget / 30).toFixed();
		dayBudgetValue.textContent = appData.monyPerDay;

		if (appData.monyPerDay <= 100) {
			levelValue.textContent = 'Минимальный уровень достатка.';
		} else if (appData.monyPerDay > 100 && appData.monyPerDay <= 2000) {
			levelValue.textContent = 'Средний уровень достатка.';
		} else if (appData.monyPerDay > 2000) {
			levelValue.textContent = 'Высокий уровень достатка.';
		} else {
			levelValue.textContent = 'Произошла ошибка.';
		}
	} else {
		dayBudgetValue.textContent = 'Произошла ошибка.';
	}
});

incomeItem.addEventListener('input', function() {
	let items = incomeItem.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = + sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});
percentValue.addEventListener('input', function() {
	if (appData.savings == true) {
		let sum = + sumValue.value,
			percent = +percentValue.value;

		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;

		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

let appData = {
		budget: mony,
		expenses: {},
		optionalExpenses: {},
		income: [],
		timeData: time,
		savings: false,
};
