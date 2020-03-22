const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const pattern = {
        10: '.',
        11: '-',
        '**********': ' '
    }
    
    let arrStr = expr.match(/.{1,10}/g);

    let str = arrStr.map(sym => {
        return sym.replace(/(10)|(11)|(\*+)/g, (matchP) => {
            return pattern[matchP];
        })
    })

	let tempStr = str.map(sym => {
        return sym.replace(/0+/g, '');
    })

	let outStr = tempStr.map(sym => {
			return sym.replace(/(\.|\-)+/g, (matchMT) => {
        		return MORSE_TABLE[matchMT]
    		});
    }).join('');

    return outStr;
}

module.exports = {
    decode
}
