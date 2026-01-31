//any data type
var value:any='Yash Kumar';
value=100;
value=true;
console.log(value);


//unknown data type
var data:unknown="Yash kumar";
data=100;
data=true;
data='yash'
if(typeof data=='string'){
    console.log(data.toLocaleUpperCase())
}
console.log(data);