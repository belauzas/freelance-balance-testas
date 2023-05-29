
function table(account) {
    let table = '';
    for (const month of data.js)
        // if (typeof account.month !== 'number') {
        //     account.month = 0;
        // }
        // if (typeof account.income !== 'number') {
        //     account.income = 0;
        // }
        // if (typeof account.expense !== 'number') {
        //     account.expense = 0;
        // }
table += <div class="table-row">
            <div class="cell">${account.month}</div>
            <div class="cell">${account.income}</div>
            <div class="cell">${account.expense}</div>
        </div>;
}
console.log (table);
return table;

// function yearlyIncome(account, income) {
//     let sumIncome = 0;
//     for (let i=0; i < account.length; i++){
//         sumIncome += income[i];
//         console.log(income[i])
//     }
// }
// return 0;