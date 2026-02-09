const city = 'Dhaka';
let reverse = '';

for(const i of city){
    // console.log(i);
    reverse = i + reverse;
    // console.log(reverse);
}

let rev = '';

for(let i = 0; i<city.length; i++)
{
    const letter = city[i];
    rev = letter + rev;
}

// console.log(rev);

// shortcut
console.log(city.split('')); //[ 'D', 'h', 'a', 'k', 'a' ]
console.log(city.split('').reverse()); //[ 'a', 'k', 'a', 'h', 'D' ]
console.log(city.split('').reverse().join('')); //akahD

// shortcut
const sentence = "Sikder Md. Shariful Islam";
const reversed = sentence.split('').reverse().join('');
// console.log(reversed);