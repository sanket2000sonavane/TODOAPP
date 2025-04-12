type user = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

function newUser(newuser:user | Admin)  {
    return console.log(newuser)
}

newUser({name: "jackk", id:123})
newUser({username: "tony", id: 1212})


function getDId(id: string | number){
    if (typeof id === "string"){
        console.log(id.toUpperCase())

    }
    console.log(id)
}

getDId("sdf")
getDId(1)


const data: (string | number | boolean)[] = ['12', 12, true]
console.log(data)
let  seattypes: "aisle" | "middle" | "window"

console.log(seattypes="aisle")
export{}