var studentData:string|number |[]='Yash';
studentData=20;
studentData=[];

function fruitsData():string | string[] | number{
    var item1=1;
    if(item1>1){
        return ['Banana','apple'];
    }else{
        return 'Litchi';
    }
}
console.log(fruitsData());


function studentInfo(name:string|number){
    if(typeof name=='string'){
        return 'student name is '+name;
    }
    if(typeof name=='number'){
        return 'student number is '+name;
    }
}

console.log(studentInfo(7631));
console.log(studentInfo('yash'));