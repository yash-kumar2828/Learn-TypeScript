function getInfo(){
    const nameInput = document.getElementById("username") as HTMLInputElement;
    const name:string = nameInput.value;
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const email:string = emailInput.value;
    const phoneInput = document.getElementById("phone") as HTMLInputElement;
    const phone:string = phoneInput.value;

    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`);
}