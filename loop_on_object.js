const mobile = {
    brand: 'samsung',
    price: 2600,
    color: 'black',
    camera: '12mp'
}

// for_of loop chalai array er moddhe
// for_in loop chalai object er moddhe
for (const prop in mobile){
    console.log(prop); //property print hobe
    console.log(mobile[prop]); //values print hobe
}

// another way
const keys = Object.keys(mobile); //keys er moddhe akta array ache
console.log(keys);

for (const key of keys){
    console.log(key, mobile[key]);
}