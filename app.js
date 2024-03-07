const calculator = {
    add: (a, b) => a + b,
    subtract: (a ,b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => {
        if (a === 0 || b === 0) {
            throw new Error('You cannot divide by cero.');
        } else {
            return a / b
        }
        }
};

const capitalize = (word) => {
    const letterCap = word.charAt(0).toUpperCase();
    const wordCapitalize = letterCap.concat(word.slice(1,));
    return wordCapitalize;
};

const reverseString = (string) => {
    const stringReversed = string.split('').reverse().join('');
    return stringReversed;
};

const caesarCipher = (text, shift) => {
    let result = '';
    for (const char in text) {
        if (isChar(text[char])) {
            const newCharacter = letterCipher(text[char], shift);
            result = result + newCharacter
        } else {
            result = result + text[char];
        }
    }
    return result;
}

const caesarDecipher = (text, shift) => {
    return caesarCipher(text, -shift)
}

const isChar = (char) => {
    return (char >= 'A' && char <= 'Z') || 
    (char >= 'a' && char <= 'z')
}

const letterCipher = (char, shift) => {
    const isCapital = (char >= 'A' && char <= 'Z');

    char = char.charCodeAt(0) + shift;

    if (isCapital && char > 'Z'.charCodeAt(0)) {
        char = char - 26;
    } if (char > 'z'.charCodeAt(0)) {
        char = char - 26
    }

    return String.fromCharCode(char);
}

const analyzeArray = (array) => {
    if (array.length === 0) {
        return { 'average': undefined, 'min': undefined, 'max': undefined, 'length': 0 };
    }
    // Calculating average
    const sum = array.reduce((total, num) => {
        return total + num
    }, 0);

    const average = sum / array.length;

    // Minimum  and maximum

    const { min, max } = array.reduce((acc, num) => {
        return {
            min: num < acc.min ? num : acc.min,
            max: num > acc.max ? num : acc.max
        };
    }, { min: array[0], max: array[0] });

    const object = {'average': average,
                    'min': min,
                    'max': max,
                    'length': array.length};
    
    return object;
}

export {
    calculator,
    capitalize,
    reverseString,
    caesarCipher,
    analyzeArray
}
