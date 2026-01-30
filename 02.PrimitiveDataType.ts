var age:number=21;
var fullName:string="Yash Kumar";
var isLoggedIn:boolean=false;

console.log(age);
console.log(fullName);
console.log(isLoggedIn);


//Number Data Type
var num4:number=45;
var num5:number=3.14;
var total:number=num4+num5;
console.log(total);

var oct:number=0o00001;
var hexa:number=0x00001;
var binary:number=0b00001;
console.log(oct+10);
console.log(hexa+10);
console.log(binary+10);

var item:number=100;
var item2='100';
var convertItem2:number=Number(item2);
console.log(convertItem2+item);

var data:number | string=30;
data='Yash Kumar';
console.log(data);

//String Data Type
var str:string="Yash Kumar";
var str2:string='Yash Kumar';
var str3:string=`Yash Kumar`;
var age2:number=21;
var str4:string=`My name is ${str3} and my age is ${age2}`;
console.log(str);
console.log(str2);
console.log(str3);
console.log(str4);

//boolean Data Type
var isLoggedIn2:boolean=true;
var isLoggedIn3:boolean=false;
console.log(isLoggedIn2);
console.log(isLoggedIn3);

//null and undefined Data Type
var n:null | string=null;
var u:undefined | string=undefined;
console.log(n);
n='Yash Kumar';
console.log(n);
console.log(u);
u='TypeScript';
console.log(u);


//bigint Data Type
var big1:bigint=9007199254741991n;
var big2:bigint=1234567890123456789012345678901234567890n;  
console.log(big1);
console.log(big2);
var big3:bigint=big1+1000n;
console.log(big3);

//symbol Data Type
var sym1:symbol=Symbol("Yash");
var sym2:symbol=Symbol("Kumar");
console.log(sym1);
console.log(sym2);
console.log(sym1===sym2);