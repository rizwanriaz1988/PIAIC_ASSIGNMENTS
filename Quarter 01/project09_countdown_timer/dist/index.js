import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
let welcome_msg = "\n     <== COUNT DOWN TIMER ==>\n";
let closing_msg = "   <== TIMER ENDS ==>";
var target_dateTime;
async function welcome(msg) {
    let anim = chalkAnimation.rainbow(msg);
    let strict = await new Promise((resolve, reject) => {
        setTimeout(() => {
            anim.stop();
            resolve();
        }, 1000);
    });
}
async function start_question() {
    // call of prompt
    var answers = await inquirer.prompt([
        {
            name: "time",
            type: "input",
            message: "Set Timer in Milliseconds:",
            validate: valid
        }
    ]);
    target_dateTime = Date.now() + parseInt(answers.time);
}
async function valid(input) {
    if (input) { //for empty     
        if (Number.isInteger(parseFloat(input)) == true) { //to check either number or not
            return true;
        }
        else {
            return "Enter Valid Number";
        }
    }
    else {
        return "Enter Some Number"; //for empty
    }
}
async function operation() {
    return new Promise((resolve, reject) => {
        let timer_closing = setInterval(() => {
            let current_dateTime = Date.now();
            let timer_Time = target_dateTime - current_dateTime;
            if (timer_Time <= 0) {
                clearInterval(timer_closing);
                resolve();
            }
            else {
                const seconds = Math.floor((timer_Time / 1000) % 60);
                const minutes = Math.floor((timer_Time / 1000 / 60) % 60);
                const hours = Math.floor((timer_Time / 1000 / 3600) % 24);
                console.log(`Time remaining: ${hours}:${minutes}:${seconds}`);
            }
        }, 1000);
        // resolve()
    });
}
async function again() {
    do {
        await welcome(welcome_msg);
        await start_question();
        await operation();
        await welcome(closing_msg);
        var again_ask = await inquirer.prompt({
            type: "input",
            name: "again_asking",
            message: "Are you want to set Timer again? (Y|N)"
        });
    } while (again_ask.again_asking == "Y" || again_ask.again_asking == "y");
    process.exit();
}
again();
//# sourceMappingURL=index.js.map