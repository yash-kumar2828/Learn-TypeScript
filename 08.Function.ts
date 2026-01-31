function fruits():string{
    return 'Apple';
}

function simple():boolean{
    return true;
}

function complex():number | string | boolean{
    let data=10;
    let fullName='Yash Kumar';
    let type='age';
    if(type=='age'){
        return data;
    }else{
        return fullName;
    }
}

function anything():any{
    return
}

console.log(fruits());
console.log(simple());
console.log(complex());
console.log(anything());