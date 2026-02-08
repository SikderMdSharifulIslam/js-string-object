// toLowerCase() -> convert any into lowercase
// toUpperCase() -> CONVERT ANY INTO UPPERCASE
// trim() -> to detete before-after white space of any word or sentence but do not delete middle space


const a = "water";
const b = "WAter";
const c = "  water is pani.   "
const d = "water is pani."

console.log(a.toLocaleLowerCase());
console.log(a.toLocaleUpperCase());
console.log(c.trim());

if(a.toLocaleLowerCase() ===  b.toLocaleLowerCase())
    console.log("matched water!");

if(c.trim() === d.trim())
    console.log("c & d matched");
else 
    console.log('c & d not matched');