const alpha = 'abcdefgh'
const numbers = '01234'
const symbols = '@_-+='

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
    let chars = alpha
    hasNumbers ? (chars += numbers) : ""
    hasSymbols ? (chars += symbols) : ""

    let password = ""
    for (let i = 0; i < length; i++) {
        password += chars.charAt((Math.random() * chars.length))
    }

    return password
}

module.exports = createPassword