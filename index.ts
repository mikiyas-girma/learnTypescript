const table : {
    name: string;
    unitPrice?: number
} = {
    name: "Table",
};



// table.discount =10;  // this shows an error saying discount is not defined on object table


// creating type aliases in typescript

// type Product = {
//     name: string;
//     unitPrice?: number;
//     purchase: Purchase;
// };

let table: Product = {
    name: "Table",
    purchase: (quantity) =>
        console.log(`Purchased ${quantity} tables`),
    
};

table.purchase(5);

let chair: Product = {
    name : "chair",
    unitPrice: 40
};

// type alias can extend another object notation  aka intersection type

// type DiscountedProduct = Product & { discount: number };

// type alias can be used to represent a function
// type Purchase = (quantity: number) => void;


// Creating interfaces using interface keyword

// interface Product {
//     name: string;
//     unitPrice?: number;
// }


// interface can extend another interface with extends keyword

interface DiscountedProduct extends Product {
    discount: number;
}

// an interface can also be used to represent a function

interface Purchase {(quantity: number): void}

// an interface can be added to another interface in this case Purchase interface to Product interface

interface Product {
    name: string;
    unitPrice?: number;
    purchase: Purchase;
}

// creating classes in typescript

class Product {
    name = "";
    unitPrice = 0;
}

// another method of adding types to class properties is in constructor

class Product1 {
    name;
    unitPrice;

    constructor(name: string, unitPrice: number) {
        this.name = name;
        this.unitPrice = unitPrice;
    }
}

// the properties don't need to defined if the parameters defined in constructor are defined as public

class Product2 {
    constructor(public name: string, public unitPrice: number) {
        this.name = name;
        this.unitPrice = unitPrice;
    }
}

// creating enumerations in typescript
// FIY enumerations allow us to declare meaningful set of friendly names that a variable can set to.

enum Level {
    low,
    medium,
    high
}

console.log(Level.low)





