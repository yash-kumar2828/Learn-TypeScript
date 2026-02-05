interface Info{
    name:string,
    age:number,
    college:string
};
interface TeacherType extends Info {
    subject:string;
}

var studentObj:Info={
    name:'Yash',
    age:21,
    college:'SRC'
}

var teacherObj:TeacherType={
    name:'Yash',
    age:21,
    college:'SRC',
    subject:'Math'
}

var management:Info={
    name:'Yash',
    age:21,
    college:'SRC'
}

console.log(studentObj);
console.log(teacherObj);
console.log(management);


