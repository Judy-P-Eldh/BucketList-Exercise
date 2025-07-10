"use strict";
console.log("--- Dom-manipulering och interfaces ---");
let user = {
    firstName: "Pernilla",
    lastName: "Eldh",
    age: "48",
    greet: function () {
        console.log("Hej jag heter " + this.firstName);
    }
};
console.log(user.firstName);
user.greet();
//# sourceMappingURL=index.js.map