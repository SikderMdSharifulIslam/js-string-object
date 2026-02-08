//1. slice(start, end-excluded); --> kete dibe partial akta portion
//2. split(''); 
    // --> quation o na dile pura ta array te diye dibe akshathe
    // --> quatation er moddhe kisu na likhle single character wise array banabe, 
    // --> r quatation er moddhe comma, character, space egulo diye sperator set korte pari. 
    // --> Ei separator gulo pelei split kore array te pathay dibe
//3. join() --> array theke string e convert kora jay


const capital = "Dhaka";
console.log(capital.slice(0, 2)); //Dh

console.log(capital.split()); //[ 'Dhaka' ]
console.log(capital.split('')); //[ 'D', 'h', 'a', 'k', 'a' ]


const cities = "Dhaka, Barishal, Natore, Rajshahi";

console.log(cities.split(',')); //[ 'Dhaka', ' Barishal', ' Natore', ' Rajshahi' ]

const city = [ 'Dhaka', ' Barishal', ' Natore', ' Rajshahi' ];
console.log(city.join()); //by default comma diye join kore. Output: Dhaka, Barishal, Natore, Rajshahi
console.log(city.join('-')); //Dhaka- Barishal- Natore- Rajshahi
console.log(city.join('|')); //Dhaka| Barishal| Natore| Rajshahi