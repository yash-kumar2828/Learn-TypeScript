type personTA={name:string};
type personTB={age:number};
type personTC=personTA & personTB;
type x=string | number;

var personDataA:personTA={
    name:'yash Kumar'
}

var personDataB:personTB={
    age:21
}
var personDatac:personTC={
    name:'yash Kumar',age:21
}

console.log(personDataA);
console.log(personDataB);
console.log(personDatac);

