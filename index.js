function changeToGiveBack(price, paid) {
    change = paid - price;
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


    if (change === 0) {
        console.log('The exact amount was paid');
    } else if (price > paid) {
        console.log("They did not pay enough money");
    } else {
        let statement = "You must give back ";
        for (let key in billsBack) {
            if (billsBack[key] > 0) {
                statement += `'${[key]}' X ${billsBack[key]}, `
            }
        } console.log(statement.slice(0, -2));
    }
};


changeToGiveBack(3.75, 50);