// concate

const first = "Sikder";
const last = "Shariful";

const fullName = first + " " + last;
console.log(fullName);

const FullName = first.concat(" ").concat(last);
const Full_Name = first.concat(" ",last); 
//answer same 2 ta way tei kora jay.
console.log(FullName);
console.log(Full_Name);

// includes
console.log(last.includes('x')); //true, false ans dibe based on finding. thakle true otherwsie false.