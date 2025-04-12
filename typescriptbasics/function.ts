//https://www.typescriptlang.org/docs/handbook/2/functions.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
function addFive(num: number): void{
    return console.log(num + 2);
}

function getUpper(name: string){
    return console.log(name.toLowerCase());
}

function signUpUser(name: string, Id: number, isPaid: boolean){
        return console.log((name + Id + isPaid));
}


// arrow function syntax
// Using fat arrow =>, we dropped the need to use the function keyword. 
// Parameters are passed in the parenthesis (),
//  and the function expression is enclosed within the curly brackets .
let loginuser = (name: string, Id: number, isPaid: boolean) => {
    return console.log((name + Id + isPaid));
}

//https://www.typescriptlang.org/docs/handbook/2/functions.html#never:~:text=Try-,never,-Some%20functions%20never
const handleError= (errmsg: string):never =>{
    throw new Error(errmsg);
}
addFive(5)
getUpper("hello world")
signUpUser("john", 123, true)
loginuser("Jack", 546, false)

export{}