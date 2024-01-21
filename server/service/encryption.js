// function stringToCodePoints(str) {
//     return Array.from(str, char => char.codePointAt(0));
// }

// function codePointsToString(codePoints) {
//     return String.fromCodePoint(...codePoints);
// }

// function modExp(base, modulus, exponent) {
//     if (modulus === 1) return 0;
//     let result = 1;
//     base = base % modulus;
//     while (exponent > 0) {
//         if (exponent % 2 === 1) {
//             result = (result * base) % modulus;
//         }
//         exponent = exponent >> 1;
//         base = (base * base) % modulus;
//     }
//     return result;
// }

// function encryptMessage(message) {
//     const modulus = process.env.MODULUS;
//     const key = process.env.SECRET_KEY;

//     const encryptedMessage = stringToCodePoints(message).map(charCode => modExp(charCode, modulus, key));
//     return encryptedMessage;
// }

// function decryptMessage(message) {
//     const modulus = process.env.MODULUS;
//     const key = process.env.SECRET_KEY;

//     const decryptedCodePoints = message.map(charCode => modExp(charCode, modulus, key));
//     return codePointsToString(decryptedCodePoints);
// }
const aes256 = require('aes256');

function encryptMessage(message) {
    const key = process.env.SECRET_KEY;
    let encryptedMessage = aes256.encrypt(key, message);
    return encryptedMessage;
}

function decryptMessage(message) {
    const key = process.env.SECRET_KEY;
    let decryptedMessage = aes256.decrypt(key, message)
    return decryptedMessage;
}

module.exports = {
    encryptMessage,
    decryptMessage,
};
