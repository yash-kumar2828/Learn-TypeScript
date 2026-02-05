class Products{
    name:string;
    price:number;
    pId:number;
    isCart=false;
    isOrder=false;
    constructor(name:string,price:number,pId:number){
        this.name=name;
        this.price=price;
        this.pId=pId;

    }
    addToCart(){
        this.isCart=true;
    }
    buyProduct():string{
        if(this.isCart){
            return `product ${this.name} is ordered in ${this.price}`;
        }else{
            return `no product in cart `;
        }
    }
}

var product=new Products('Samsung',10000,101);
product.addToCart();
console.log(product.buyProduct());
