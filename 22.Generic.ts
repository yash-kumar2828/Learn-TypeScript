function fruits<T>(name:T):T{
    return name;
}

let onlyFruit=fruits('apple');
let onlyNumber=fruits(100);
let onlyBoolean=fruits(true);

console.log(onlyFruit);
console.log(onlyBoolean);
console.log(onlyNumber);


function userData<T>(data:T){
    return data;
}
let userName=userData(['yash','kumar']);
let userAge=userData([21,20]);

console.log(userName);
console.log(userAge);



