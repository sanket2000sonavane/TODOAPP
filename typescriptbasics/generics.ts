// https://www.typescriptlang.org/docs/handbook/2/generics.html
function iOne(val : number | boolean): number | boolean{
    return val
}

function iTwo(val : any): any {
    return val
}

//Generics functions
function ithree<Type>(val : Type): Type{
    return val
}

function iFour<T>(val : T): T{
    return val
}

interface user {
    name: string,
    id: number
}

console.log(iFour<user>({name: "sam", id:123}))
console.log(iFour("jack"))
console.log(iFour(534))


function searchProduct<T>(values: T[]): T{
    const myindex = 2
    return values[myindex]
}

const searchproductarrowfunction = <T,>(values: T[]): T => {
    const myindex = 3
    return values[myindex]
}

console.log(searchProduct(["first", "second", "Third", "four"]))
console.log(searchproductarrowfunction(["first", "second", "Third", "four"]))


//Generic Classes

console.log("---------------")
interface quiz {
    name: string,
    id: number
}

interface course {
    name: string,
    author: string
}

class sellCourse <T> {
    public cart: T[] = []

    addToCart(product : T){
        this.cart.push(product)
    }

}


// Create an instance for quiz type
const quizCart = new sellCourse<quiz>();
quizCart.addToCart({ name: "TypeScript Quiz", id: 101 });

console.log(quizCart.cart);  

// Create another instance for course type
const courseCart = new sellCourse<course>();
courseCart.addToCart({ name: "React", author: "Jack" });
courseCart.addToCart({ name: "TypeScript Quiz", author: "Jackma"});


console.log(courseCart.cart);  

//Narrowing


interface User {
    name : string,
    id: number
}

interface Admin {
    name: string,
    id: number,
    isAdmin: boolean
}

function userOrAdmin(account : User | Admin){

    if ("isAdmin" in account){
        console.log("account is Admin")
    }
    else{
        console.log("account is User")
    }
}

userOrAdmin({name: "sam", id: 123, isAdmin: true})

export{}