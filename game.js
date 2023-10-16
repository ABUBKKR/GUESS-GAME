#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import { exec } from 'child_process';
const textToConvert = "Number Guess Game!";
const command = `figlet ${textToConvert}`;
exec(command, (error, stdout) => {
    if (error) {
        console.error(`Error: ${error}`);
        return;
    }
    console.log(stdout);
});
const systemGeneratedNo = Math.floor(Math.random() * 50);
for (let i = 0; i < 20; i++) {
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: `Guess Any Number Between 0 to 50 (Chances Left: ${15 - i}): `
        }
    ]);
    const { userGuess } = answers;
    console.log("Your Guess is ", chalk.magenta(userGuess));
    if (userGuess === systemGeneratedNo) {
        console.log(chalk.green("Yesss! Your answer is correct"));
        break;
    }
    else if (userGuess < systemGeneratedNo) {
        console.log(chalk.yellow("Your guess is too low. Try again!"));
    }
    else if (userGuess > systemGeneratedNo) {
        console.log(chalk.red("Your guess is too high. Try again!"));
    }
}
console.log("The answer is ", systemGeneratedNo);
