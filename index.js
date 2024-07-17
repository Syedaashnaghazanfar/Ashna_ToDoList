#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlueBright("Hey there! What do you want to do from your list today?"));
let toDoList = ["Laundry", "Cooking", "Essentials Shopping", "Skincare", "Haircare", "Dusting House"];
async function myTodoList(toDoList) {
    let message1 = await inquirer.prompt([
        {
            name: "operationOnlist",
            type: "list",
            message: "Please select any one of the following operations",
            choices: [{ value: 'Add' }, { value: "Clear list" }, { value: "view list" }, { value: "Exit" }]
        }
    ]);
    if (message1.operationOnlist === "Add") {
        let add = await inquirer.prompt([
            {
                name: "Additiononlist",
                type: "input",
                message: "Enter the item you want to add in you list"
            }
        ]);
        toDoList.push(add.Additiononlist);
        console.log(chalk.blue(`Item ${add.Additiononlist} added to your list`));
        console.log(toDoList);
    }
    else if (message1.operationOnlist === "Clear list") {
        toDoList.splice(0, toDoList.length);
        console.log(chalk.red("Your todo list cleared!"));
        console.log(toDoList);
    }
    else if (message1.operationOnlist === "View list") {
        console.log(chalk.bgBlueBright("here are you list items"));
        console.log(toDoList);
    }
    else if (message1.operationOnlist === "Exit") {
        console.log(chalk.red("You have exited your list!"));
    }
}
myTodoList(toDoList);
