interface collegeType{
    name:string,
    location:string,
    students:number,
    branch:number|undefined
}

let collegeData:Partial<collegeType>={
    name:'IIT Delhi',
    location:'Delhi',
    students:600,
}
console.log(collegeData);


function getCollegeData(data:Partial<collegeType>){
    return data
}
let collegeData2=getCollegeData({name:'IIT Bombay',location:'Bombay'});

console.log(collegeData2);


function getCollegeData2(data:Required<collegeType>){
    return data
}

let collegeData3=getCollegeData2({name:'IIT Bombay',location:'Bombay',students:200,branch:2});

console.log(collegeData3);

var collegeData4:Readonly<collegeType>={
    name:'IIT Delhi',
    location:'Delhi',
    students:200,
    branch:8
}

console.log(collegeData4);


var collegeData5:Pick<collegeType,'name'|'location'>={
    name:'IIT Delhi',
    location:'Delhi'
}
console.log(collegeData5);

var collegeData6:Omit<collegeType,'branch'|'students'>={
    name:'IIT Delhi',
    location:'Delhi',
}
console.log(collegeData6);

type APIstatus="loading" | "error" | "pending" |   "success";
var APICall:Exclude<APIstatus,"pending">="success";
APICall="loading";
APICall="error";
console.log(APICall);

var APICall2:Extract<APIstatus,"error"|"success">="error";
console.log(APICall2);

type RandomType=string|number|undefined|null|string[];
var randomData:NonNullable<RandomType>="Hello";
console.log(randomData);

type SiteRole= 'Admin'|'User'|'Guest';
var siteRoleOption:SiteRole='Admin';
var roleName:Record<SiteRole,string>={
    Admin:'Yash',
    User:'YashKumar',
    Guest:'Yash Kumar'
}

console.log(roleName);










