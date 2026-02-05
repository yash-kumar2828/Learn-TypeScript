type dataType={name:string,email:string};
type a= {name:string};
type b={email:string};
type c=a|b;
var empData:dataType={
    name:'Yash Kumar',
    email:'yk@gmail.com'
}

var studentData:dataType={
    name:'Yash Kumar',
    email:'yk@gmail.com'
}

console.log(studentData);
console.log(empData);

