// string declaration
const county = 'Bangladesh';
const division = "Dhaka";
const district = `b.baria`;
const thana = new String('Mirpur'); //object create korbe [String: 'Mirpur']

console.log(thana);
console.log(typeof thana);


// array
const numbers = [54, 98, 78, 21, 65];
console.log(numbers.length);
console.log(numbers[1]);

// string is immutable (change kora jayna)
const capital = 'Dhaka';
console.log(capital.length); //5
console.log(capital[0]); //D

capital[0] = 'F'; // variable let diye hok ba const, string e assignment possible na

console.log(capital); //Dhaka
