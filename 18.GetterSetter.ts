class EmpInfo{
    _name:string="Yash";
    _email:string="yk@gmail.com";
    get name():string{
        return "Mr."+this._name;
    }
    set email(val:string){
        this._email="emp_"+val;
    }
}

var emp1=new EmpInfo();
console.log(emp1.name);
emp1.email="yashkumar@gmail.com";
console.log(emp1._email);
