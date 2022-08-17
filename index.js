import inquirer from 'inquirer';

async function askName() {
    const answers = await inquirer.prompt({
        name: "username",
        type: "input",
        default: () => 'User1',
        message: "Enter your name here > "
    })
    return answers.username
}

console.log(`Your name is ${await askName()}, right?`)
