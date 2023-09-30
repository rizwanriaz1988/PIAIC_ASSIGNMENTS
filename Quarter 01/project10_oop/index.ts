import inquirer from "inquirer";

const mainQuestions = [
    {
        type: "input",
        name: "yourName",
        message: "Enter Your Name",
    },
]
const miniQuestions = [
    {
        type: "list",
        name: "personalityType",
        message: "Select (1) if you like to meet people OR select (2) if you do not like to meet people",
        choices: ["1", "2"],
    }
];

class Person {
    personality: string;

    constructor() {
        this.personality = "Mystery";
    }

    personalityCheck(ask: string) {
        if (ask === "1") {
            this.personality = "Extrovert";
        } else if (ask === "2") {
            this.personality = "Introvert";
        } else {
            this.personality = "Unknown";
        }
    }
}

class Student extends Person{
    student:string

    constructor(_student:string){
        super();
        this.student = _student
    }

}

async function questioning() {
    await inquirer.prompt(miniQuestions).then((answer) => {
        const person1 = new Person();
        person1.personalityCheck(answer.personalityType);
        console.log(`You are ${person1.personality}`);
        
    })
    .then(async()=>{
        await inquirer.prompt(mainQuestions)
        .then((ans)=>{
            const student1 = new Student(ans.yourName);
            console.log(`Your name is ${student1.student}\nYou are ${student1.personality}`);
        })
    });
}

await questioning();
