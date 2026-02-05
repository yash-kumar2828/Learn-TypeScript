let userData:number|string|boolean='Yash Kumar';
userData=true;

if(typeof userData=='boolean'){
    console.log('this is a boolean data type');  
}
else if(typeof userData=='string'){
    console.log('this is a string data type');  
}
else{
    console.log('this is a number data type');  
}

function checkDataType(data:string|number){
    if(typeof data=='number'){
        console.log('this is a number data type');
    }
    else{
        console.log('this is a string data type');
    }   
}
checkDataType(20);

class Product{

}

var p1=new Product();

class Order{

}
var o1=new Order();

function checkDetails(data:Order|Product){
    if(data instanceof Order){
        console.log('This is a Product');     
    }
    else{
        console.log('This is a Order');
        
    }
}


checkDetails(p1);
checkDetails(o1);

interface userData{
    name:string,
    city:string
}
interface userInfo{
    id:number,
    email:string
}
var userData1:userData|userInfo;
userData1={
    name:'Yash Kumar',
    city:'Vaishali'
}

var userData2:userData|userInfo;
userData2={
    id:21,
    email:'yk@gmail.com'
}

function checkUserIngo(data:userData|userInfo){
    if((data as userData).name!=undefined){
        console.log('this is a userData');
    }else{
        console.log('this is a userInfo');
        
    }
}
checkUserIngo(userData1);
checkUserIngo(userData2);


