import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
let welcome_msg = "\n     <== COUNT DOWN TIMER ==>\n";
let closing_msg = "   <== TIMER ENDS ==>";
async function welcome(msg) {
    let anim = chalkAnimation.rainbow(msg);
    return new Promise((resolve) => {
        setTimeout(() => {
            anim.stop();
            resolve();
        }, 1000);
    });
}
var target_dateTime;
async function start_question() {
    var answers = await inquirer.prompt([
        {
            name: "time",
            type: "input",
            message: "Set Timer in Milliseconds:",
            validate: valid,
        },
    ]);
    target_dateTime = Date.now() + parseInt(answers.time);
}
async function valid(input) {
    if (input) {
        if (Number.isInteger(parseFloat(input))) {
            return true;
        }
        else {
            return "Enter Valid Number";
        }
    }
    else {
        return "Enter Some Number";
    }
}
async function operation() {
    return new Promise((resolve) => {
        let current_dateTime = Date.now();
        let timer_Time = target_dateTime - current_dateTime;
        if (timer_Time <= 0) {
            // Welcome message when the timer ends
            welcome(closing_msg).then(() => {
                resolve();
            });
        }
        else {
            const seconds = Math.floor((timer_Time / 1000) % 60);
            const minutes = Math.floor((timer_Time / 1000 / 60) % 60);
            const hours = Math.floor((timer_Time / 1000 / 3600) % 24);
            console.log(`Time remaining: ${hours}:${minutes}:${seconds}`);
            setTimeout(async () => {
                await operation();
                resolve();
            }, 1000);
        }
    });
}
async function again() {
    do {
        await welcome(welcome_msg);
        await start_question();
        await operation();
        var again_ask = await inquirer.prompt({
            type: "input",
            name: "again_asking",
            message: "Are you want to set Timer again? (Y|N)",
        });
    } while (again_ask.again_asking == "Y" || again_ask.again_asking == "y");
    process.exit();
}
again();
//# sourceMappingURL=index2.js.map