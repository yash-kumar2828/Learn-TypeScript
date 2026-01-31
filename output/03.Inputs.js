"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInfo() {
    const nameInput = document.getElementById("username");
    const name = nameInput.value;
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value;
    console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}`);
}
//# sourceMappingURL=03.Inputs.js.map