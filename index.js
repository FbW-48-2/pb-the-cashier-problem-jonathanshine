// The Cashier Problem

// This function is designed to tell a cashier the change to give back in the least amount of bills and coins possible (with a theoretically endless supply of money in the cash register - must be nice!)

// The function takes two parameters, the price of the item(s) and the amount of money given as payment

function changeToGiveBack(price, paid) {
    // We first need to find the total amount of money to be given back a change, which we find by subtracting the price of purchase from the amount of money given
    change = paid - price;

    // The object 'billsBack' acts as a template for the denominations of coins and bills in Euros that are available to give back. Each denomination is initially set to 0, which can then be incremented by one depending on conditional statements later in the function
    let billsBack = 
    {'200 Euro': 0,
    '100 Euro': 0,
    '50 Euro': 0,
    '20 Euro': 0,
    '10 Euro': 0,
    '5 Euro': 0,
    '1 Euro': 0,
    '0.50 Cent': 0,
    '0.20 Cent': 0,
    '0.10 Cent': 0,
    '0.05 Cent': 0,
    '0.02 Cent': 0,
    '0.01 Cent': 0};

    // To start determining which bills should be returned, I used while statements. We will target the variable 'change' which tells us the total amount of money to be paid back. The value of 'change' will then be modified if the given condition is met. We will start with the biggest denomination (200 Euro bill) checking if the amount of 'change' is greater than the given denomination, and if so subtracting the denomination as many times as possible from 'change' (as long as the while condition holds true). Eventually the value of 'change' will be below 200, meaning we can no longer subtract 200 from 'change,' so the function moves on to the next denomination, the 100 Euro bill, repeating the entire process instead using the new denomination. This goes on through all the denominations down to 0.01 Cents.

    // *** As Javascript has some funny issues with small numbers (when they have several decimal places), I had to adjust the conditions in the while statements to use the number one decimal place under the denominations actual value. This ensures that the code is running properly, maybe not the best workaround, but it works ***
    
    while (change > 199.99) {
        change -= 200;
        billsBack['200 Euro'] += 1;  
    };
    while (change > 99.99) {
        change -= 100;
        billsBack['100 Euro'] += 1;
    };
    while (change > 49.99) {
        change -= 50;
        billsBack['50 Euro'] += 1;
    };
    while (change > 19.99) {
        change -= 20;
        billsBack['20 Euro'] += 1;
    };
    while (change > 9.99) {
        change -= 10;
        billsBack['10 Euro'] += 1;
    };
    while (change > 4.99) {
        change -= 5;
        billsBack['5 Euro'] += 1;
    };
    while (change > 0.99) {
        change -= 1;
        billsBack['1 Euro'] += 1;
    };
    while (change > 0.49) {
        change -= 0.50;
        billsBack['0.50 Cent'] += 1;
    };
    while (change > 0.19) {
        change -= 0.20;
        billsBack['0.20 Cent'] += 1;
    };
    while (change > 0.09) {
        change -= 0.10;
        billsBack['0.10 Cent'] += 1;
    };
    while (change > 0.049) {
        change -= 0.05;
        billsBack['0.05 Cent'] += 1;
    };
    while (change > 0.019) {
        change -= 0.02;
        billsBack['0.02 Cent'] += 1;
    };
    while (change > 0.0099) {
        change -= 0.01;
        billsBack['0.01 Cent'] += 1;
    };

    
    // The while statements will modify the template to include the number of the bills that need to be given back, but it also includes denominations that are not needed. This next block of code is designed to log only the bills needed to be returned in an easily read message logged to the console.
    
    if (change === 0) {
        // The first statement checks if the exact amount was paid, therefore requiring no change to be given back
        console.log('The exact amount was paid');
    
    } else if (price > paid) {
        // This else/if will tell the cashier if the customer didn't give enough money for the purchase
        console.log("They did not pay enough money");
    
    } else {
        
        // In this last block of code we create the message to be logged as a string with the variable 'statement'
        let statement = "You must give back ";
        
        for (let key in billsBack) {
           // This for/in loop iterates through the object 'billsBack' to look at the number associated with each denomination. 
            
           if (billsBack[key] > 0) {
                // This if statement, paired with the enclosing for/in loop, will check the value of each of the keys of the object 'billsBack.' If the value is greater than 0 it will add and assign a template literal of the key:value pair to the variable 'statement'
                statement += `'${[key]}' X ${billsBack[key]}, `
            };
        }; 
        
        // This last line will log the modified variable 'statement' to the console, but it uses the slice method for a little cosmetic upgrade, trimming off one character of whitespace and the comma at the end of the 'statement' string
        console.log(statement.slice(0, -2));
    };
};


changeToGiveBack(3.75, 100);