interface CollegeDataType{
    name:string;
    displayTeacherName():void;
    getStudentList():string[];
}

class CollegeData implements CollegeDataType{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    displayTeacherName(): void {
        console.log('Yash','Kumar');
        
    }
    getStudentList(): string[] {
        return ['Yash','Kumar'];
    }
}

var college1=new CollegeData('SRC');
college1.displayTeacherName();
console.log(college1.getStudentList());
console.log(college1.name);
