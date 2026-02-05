class Company{
    static name:string='Google';
    location:string='Noida';
    static getName(){
        return "Googles"
    }
}

var c1=new Company();
console.log(Company.name);
console.log(c1.location);

console.log(Company.getName());

