type resiltType={
    name:string,
    id:number,
    email:string
}

function complexLogic():Promise<resiltType>{
    return new Promise((resolved)=>{
        setTimeout(() => {
            resolved({
                name:'Yash',
                id:20,
                email:'yk@gmail.com'
            });
        }, 2000);
    })
}

complexLogic().then((data)=>{
    console.log(data);
})