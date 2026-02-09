function classLogger(constructor:Function){
    console.log(constructor.name);
    
};
@classLogger
class CustomMath{
    value1:number;
    value2:number;
    constructor(x:number,y:number){
        this.value1=x;
        this.value2=y;
    }
}

var c1=new CustomMath(10,20);