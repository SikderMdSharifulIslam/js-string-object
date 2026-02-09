const bottle = {
    brnad: 'apple',
    price: 45,
    color: 'white',
    isClean: false,
    bottleSize: [1, 2, 3],
    bottleName: {
        bottle_a: 'A',
        bottle_b: 'B'
    },
    taste: function(){
        console.log("Good");
    }
}

bottle.taste();

// object non-primitive
// object er moddhe key-value pair kore info rakha hoy and ekhane array, function (method bole), even object o rakha jay.
// object mainly akta powerful variable jar moddhe amra onk gulo information k key-value pair kore rakhte pari

// primitive mane single, direct value store kore amn kisu
// and non-primitive hosse complex