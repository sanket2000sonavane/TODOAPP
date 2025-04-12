const user= {
    name: "tony",
    email: "a@b.com",
    isActive: true
}

//Even when email is not defined in a object we are able to pass to the function
function createUser({name: string, isPaid: boolean}): void{
    return console.log({newUser})
}
let newUser = {name: "Tony", isPaid: true, email: "a@b"}

createUser(newUser)

// Function taking input as a object and returning object
function userCreation():{name:string, isPaid: Boolean}{
    return {name:"jack", isPaid: false};
}

//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
type User= {
    readonly _id: number,
    name: string,
    email: string,
    isActive: boolean
    carddetails? : CardDetails 
}
 
type cardnum={
    cardnum: number
}

type carddate={
    date: number
}
type CardDetails = cardnum & carddate & {
    cardcvv: number
}

function isUserActive(user: User){
    return console.log(user)
}

isUserActive({_id: 12432, name: "Nick", email: "", isActive: true, carddetails: {cardnum: 123, cardcvv: 344, date: 212}})





