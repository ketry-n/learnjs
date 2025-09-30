console.log('hello world!');
var num = 1; // don't use var anymore 
let num2 = 2; 
console.log(num2, num);
num = 3.5;
console.log(typeof num); 
num = 3;
console.log(typeof num);
let text = 'Ketryn'; 
console.log(typeof text); 
let bool = true;
console.log(typeof bool); 
bool = false; 
console.log(typeof bool); 
let nothing;
console.log(typeof nothing);
nothing = undefined; 
nothing = null; 
console.log(typeof nothing);
let array = [1, 2, 3, 4, 'sad', true, 3.5];
console.log(typeof array);
let obj = {
    name: 'Ketryn',
    age: 26,
    cats: ['Loki'],
    data: {
        phone: '12345678',
        email: 'ketryn.parkonen@tptlive.ee'
    }
};

function hello() {
    console.log('hello');
}

console.log(typeof hello);