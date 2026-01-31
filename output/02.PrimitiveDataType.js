"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var age = 21;
var fullName = "Yash Kumar";
var isLoggedIn = false;
console.log(age);
console.log(fullName);
console.log(isLoggedIn);
//Number Data Type
var num4 = 45;
var num5 = 3.14;
var total = num4 + num5;
console.log(total);
var oct = 0o00001;
var hexa = 0x00001;
var binary = 0b00001;
console.log(oct + 10);
console.log(hexa + 10);
console.log(binary + 10);
var item = 100;
var item2 = '100';
var convertItem2 = Number(item2);
console.log(convertItem2 + item);
var data = 30;
data = 'Yash Kumar';
console.log(data);
//String Data Type
var str = "Yash Kumar";
var str2 = 'Yash Kumar';
var str3 = `Yash Kumar`;
var age2 = 21;
var str4 = `My name is ${str3} and my age is ${age2}`;
console.log(str);
console.log(str2);
console.log(str3);
console.log(str4);
//boolean Data Type
var isLoggedIn2 = true;
var isLoggedIn3 = false;
console.log(isLoggedIn2);
console.log(isLoggedIn3);
//null and undefined Data Type
var n = null;
var u = undefined;
console.log(n);
n = 'Yash Kumar';
console.log(n);
console.log(u);
u = 'TypeScript';
console.log(u);
//bigint Data Type
var big1 = 9007199254741991n;
var big2 = 1234567890123456789012345678901234567890n;
console.log(big1);
console.log(big2);
var big3 = big1 + 1000n;
console.log(big3);
//symbol Data Type
var sym1 = Symbol("Yash");
var sym2 = Symbol("Kumar");
console.log(sym1);
console.log(sym2);
console.log(sym1 === sym2);
//# sourceMappingURL=02.PrimitiveDataType.js.map