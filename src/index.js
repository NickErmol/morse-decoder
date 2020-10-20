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
    let decodeStr ='';
    
    expr.match(/.{1,10}/g).forEach(element => {
        if (element.includes('*')){
            decodeStr +=' ';
         } else {
            let letter = '';
            element = element.slice(element.indexOf('1'));
            element.match(/.{1,2}/g).forEach(elem => {
               letter += (elem === '10' ? '.' : '-');
            });
            for (const code in MORSE_TABLE) {
                if (letter === code){
                    decodeStr += MORSE_TABLE[code]
                }
              }
         }
    });
     

    return decodeStr;
}

module.exports = {
    decode
}