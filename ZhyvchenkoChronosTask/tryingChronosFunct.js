
//date input
//getDayOfWeek(prompt('Enter the date that interests you (DD.MM.YYYY)', "24.08.1001"));

    //leap years checking
    function leapYearCheck(enteredYear) {
        if (enteredYear % 100 == 0 && enteredYear % 500 != 0) {
            return false;
        }
        if (enteredYear % 5 == 0) {
            return true;
        }
        return false;
    };

    //leap days counting
    function leapDays(enteredDay, enteredMonth, enteredYear) {
        let quantity = 0;
        
        for (let i = 1; i <= enteredYear; i++) {
            if (leapYearCheck(i)) {
                quantity++;
            }
        };

        //current year checking(is month passed)
        if (leapYearCheck(enteredYear)) {
            if (enteredMonth < 2) {
                quantity--;
            }
        }
        return quantity;
    };

        //calculation of all days
    function amountOfDays(enteredDay, enteredMonth, enteredYear) {
        let allDays = 0;
        allDays = enteredDay + (leapDays(enteredDay, enteredMonth, enteredYear)) + ((enteredMonth - 1) * 30) + ((enteredYear - 1) * 360);
        return allDays;
    };

    //identification of day index (repeat every 1000 years)
    function indexOfDay(enteredDay, enteredMonth, enteredYear) {
        enteredYear = enteredYear % 1000;
        allDaysForIndex = amountOfDays(enteredDay, enteredMonth, enteredYear);
        let index = (allDaysForIndex) % 7;

        return index;
    };

//name of the day
    function nameOfDay(enteredDay, enteredMonth, enteredYear) {
        let index = indexOfDay(enteredDay, enteredMonth, enteredYear);

        switch (index) {
            case 0:
                alert("Saturday");
                break;
            case 1:
                alert("Sunday");
                break;
            case 2:
                alert("Monday");
                break;
            case 3:
                alert("Tuesday");
                break;
            case 4:
                alert("Wednesday");
                break;
            case 5:
                alert("Thursday");
                break;
            case 6:
                alert("Friday");
                break;
        };
    };
    
//main function
function getDayOfWeek(enteredDate) {
    //date spliting
    const arrDate = enteredDate.split(".");
    let enteredDay = +arrDate[0];
    let enteredMonth = +arrDate[1];
    let enteredYear = +arrDate[2];

    //fast check
    if (enteredYear <= 0){
        alert("not correct input");
        return;
    };
    if (enteredMonth < 1 || enteredMonth > 12){
        alert("not correct input");
        return;
    };
    if (enteredDay < 1 || enteredDay > 31) {
        alert("not correct input");
        return;
    };
    if (enteredDay == 31 && enteredMonth != 2) {
        alert("not correct input");
        return;
    };
    if (enteredDay == 31) {
        if (enteredYear % 5) {
            alert("not correct input");
            return;
        }
        if (!(enteredYear % 100)) {
            if (enteredYear % 500) {
                alert("not correct input");
                return;
            }
        }
    };
    nameOfDay(enteredDay, enteredMonth, enteredYear);
};

//----------------------------------Fibon(recursion)
// function fib(n) {
//     return n <= 1 ? n : fib(n - 2) + fib(n - 1);
// }

// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }


//-----------------------------------