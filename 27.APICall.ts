type APIType={
    status:string,
    method:string
}

async function apiCallHandling():Promise<APIType>{
    const result=await fetch('https://dummyjson.com/test');
    const data=await result.json();
    return data;
}

apiCallHandling().then((data)=>{
    console.log(data);
});
