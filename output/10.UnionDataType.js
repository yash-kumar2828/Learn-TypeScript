"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var studentData = 'Yash';
studentData = 20;
studentData = [];
function fruitsData() {
    var item1 = 1;
    if (item1 > 1) {
        return ['Banana', 'apple'];
    }
    else {
        return 'Litchi';
    }
}
console.log(fruitsData());
function studentInfo(name) {
    if (typeof name == 'string') {
        return 'student name is ' + name;
    }
    if (typeof name == 'number') {
        return 'student number is ' + name;
    }
}
console.log(studentInfo(7631));
console.log(studentInfo('yash'));
//# sourceMappingURL=10.UnionDataType.js.map