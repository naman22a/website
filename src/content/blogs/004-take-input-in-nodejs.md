---
title: Getting User Input in JavaScript and Node.js ?
tags:
    - javascript
    - nodejs
date: 09-02-2023
excerpt: In this blog I will show you how to take input in javascript and nodejs
---

# 1) In JavaScript

This code will run in browser/client side javascript.

```js
const name = prompt('Enter your name');
console.log(name);
```

# 2) In Nodejs

This code will run on server side javascript.

## a) Synchronous Input using readline

```js
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Who are you?', (name) => {
    console.log(`Hey there ${name}!`);
    readline.close();
});
```

## b) Asynchronous input using Inquirer package

Install inquirer with

```shell
$ yarn add inquirer
```

or

```shell
$ npm i inquirer
```

Here is the sample code.

```js
import inquirer from 'inquirer';
// or
const inquirer = require('inquirer');

const main = async () => {
    await inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Who are you ?'
            }
        ])
        .then((answers) => {
            console.log(answers.name);
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log(
                    "Prompt couldn't be rendered in the current environment"
                );
            } else {
                console.error(error);
            }
        });
};
```
