const chalk = require('chalk')
const program = require('commander')

const createPassword = require('./createPassword')
const savePassword = require('./savePassword')



program.version("first")
    .description('Password generator')

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save password to pass.txt')
    .option('-nn, --no-numbers', 'without numbers')
    .option('-ns, --no-symbols', 'without symbols')
    .parse()

const { length, save, numbers, symbols } = program.opts()
const generatedPassword = createPassword(length, numbers, symbols)

if (save) {
    savePassword(generatedPassword)
}

console.log(chalk.blue("Generated password: ") + chalk.bold(generatedPassword));
