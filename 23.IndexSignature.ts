type userDataType={
    name:string,
    id:number,
    mobile:number
    readonly[key:string]:number|string
};

var userData:userDataType={
    mobile:7631659415,
    id:10,
    marks:92,
    age:21,
    sem:6,
    name:'Yash Kumar'
};

console.log(userData);
