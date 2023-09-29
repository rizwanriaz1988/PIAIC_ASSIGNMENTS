#! /usr/bin/env node
import inquirer from "inquirer";
const mainQuestions = [
    {
        type: "list",
        name: "questions",
        message: "Select Operation",
        choices: ["Add Customer", "Make Transaction", "View Balance", "Exit"]
    }
];
const addCustomerQuestions = [
    {
        type: "input",
        name: "custFirstName",
        message: "Enter First Name:"
    },
    {
        type: "input",
        name: "custLastName",
        message: "Enter Last Name:"
    },
    {
        type: "list",
        name: "custGender",
        message: "Select Gender:",
        choices: ["Male", "Female", "Transgender"]
    },
    {
        type: "input",
        name: "custAge",
        message: "Enter Age:",
        validate: validNumber
    },
    {
        type: "input",
        name: "custMobile",
        message: "Enter Mobile Number:"
    },
    {
        type: "number",
        name: "custBalance",
        message: "Enter Initial Balance:",
        validate: validNumber
    },
];
const againAskQuestions = [
    {
        type: "confirm",
        name: "askAgain",
        message: "Are you want to run again?"
    }
];
function validNumber(input) {
    if (input) {
        if (isNaN(input)) {
            return "Enter Valid Age";
        }
        else {
            return true;
        }
    }
    else {
        return "Enter Some Value";
    }
}
async function againAsking() {
    const response = await inquirer.prompt(againAskQuestions);
    return response.askAgain;
}
class customerDetail {
    constructor(_custFirst, _custLast, _custGender, _custAge, _custMobile, _custBalance) {
        this.custFirst = _custFirst;
        this.custLast = _custLast;
        this.custGender = _custGender;
        this.custAge = _custAge;
        this.custMobile = _custMobile;
        this.custAccountNum = this.accountNumber();
        this.custBalance = _custBalance;
    }
    accountNumber() {
        // return Math.floor(Math.random()*899999999999999) + 100000000000000 
        return Math.floor(Math.random() * 899) + 100;
    }
}
const customerList = [];
async function questioning() {
    await inquirer.prompt(mainQuestions)
        .then(async (ansu) => {
        if (ansu.questions === "Add Customer") {
            await addCustomer();
        }
        else if (ansu.questions === "Make Transaction") {
            await custTransaction();
        }
        else if (ansu.questions === "View Balance") {
            await customerBalance();
        }
        else if (ansu.questions === "Exit") {
            process.exit();
        }
    });
}
async function addCustomer() {
    await inquirer.prompt(addCustomerQuestions)
        .then((ans) => {
        const customer = new customerDetail(ans.custFirstName, ans.custLastName, ans.custGender, ans.custAge, ans.custMobile, ans.custBalance);
        customerList.push(customer);
        console.log(customerList);
    });
}
async function custTransaction() {
    await inquirer.prompt([
        {
            type: "input",
            name: "custAccNum",
            message: "Enter Customer AC/No"
        }
    ]).then(async (ac) => {
        if (customerList.length > 0) {
            const accountNum = customerList.find((x) => x.custAccountNum === parseInt(ac.custAccNum));
            const balance = accountNum.custBalance;
            if (balance) {
                await inquirer.prompt([
                    {
                        type: "list",
                        name: "selectMode",
                        message: "Select Transaction Type",
                        choices: ["Debit", "Credit"]
                    },
                    {
                        type: "number",
                        name: "transactionAmount",
                        message: "Enter Amount",
                    }
                ]).then((mode) => {
                    if (mode.selectMode === "Debit") {
                        const remaining = accountNum.custBalance - parseInt(mode.transactionAmount);
                        if (remaining >= 0) {
                            accountNum.custBalance = remaining;
                        }
                        else {
                            console.log("Transaction Unsuccessful\nNot Enough Balance");
                        }
                    }
                    else if (mode.selectMode === "Credit") {
                        if (parseInt(mode.transactionAmount) > 100) {
                            accountNum.custBalance = accountNum.custBalance + parseInt(mode.transactionAmount) - 1;
                        }
                        else {
                            accountNum.custBalance = accountNum.custBalance + parseInt(mode.transactionAmount);
                        }
                    }
                });
            }
            else {
                console.log("Enter Correct Account Number");
            }
        }
        else {
            console.log("Enter Customer First!!!");
        }
    });
}
async function customerBalance() {
    await inquirer.prompt([
        {
            type: "input",
            name: "custAccNum",
            message: "Enter Customer AC/No"
        }
    ]).then(async (ac) => {
        if (customerList.length > 0) {
            const accountNum = customerList.find((x) => x.custAccountNum === parseInt(ac.custAccNum));
            const balance = accountNum.custBalance;
            if (balance) {
                console.log(balance);
            }
            else {
                console.log("Enter Correct Account Number");
            }
        }
        else {
            console.log("Enter Customer First!!!");
        }
    });
}
async function main() {
    do {
        await questioning();
    } while (await againAsking());
}
main();
//# sourceMappingURL=index.js.map