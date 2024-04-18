#! /usr/bin/env node

import inquirer from "inquirer";

//Declare a constant 'answer' and assign it to the result of inquirer.prompt function

const answers: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the words: "
    },
]);

const words = answers.Sentence.trim().split(" ")

//print the array of words to the console
console.log(words);

//print the number of words of the sentence to the console
console.log(`Your sentence word count is: ${words.length}`);

//print the number of characters of the sentence to the console 
console.log(`The number of characters in the sentence is: ${answers.Sentence.length}`);


