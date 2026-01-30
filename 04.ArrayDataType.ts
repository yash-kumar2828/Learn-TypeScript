var numbers:number[] = [1, 2, 3, 4, 5]; 
var fruits:Array<string> = ["Apple", "Banana", "Cherry"]; 
fruits.push("Chilli");
numbers.push(6);

var collegeName:ReadonlyArray<string> = ['Oxford','Cambridge','Harvard'];
console.log("Numbers:", numbers);
console.log("Fruits:", fruits);
console.log("Colleges:", collegeName);