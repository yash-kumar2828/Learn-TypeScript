class Auth{
    login(name:string,password:string){
        if(name && password){
            return 'login';
        }else{
            return 'not login';
        }
    }
}

class Student extends Auth{
    
    result(marks:number){
        if(marks>33){
            return 'Pass';
        }else{
            return 'Fail';
        }
    }
}

class Teacher extends Auth{
    subject(subject:string){
        return 'He teach'+subject;
    }
}

var s1=new Student();
console.log(s1.result(89));

var t1=new Teacher();
console.log(t1.login('Yash','7631'));

