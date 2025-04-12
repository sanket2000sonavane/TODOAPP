//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces

interface user {
    readonly id: number
    name: string,
    userid:  number

    startTrial: () => string,
    endTrial(): number,
    getcoupon:(name: string) => number
}
interface user {
    googleId: number
}

interface admin extends user {
    role: "fullaccess" | "noaccess"
}
const Jack: user | admin ={id: 12334, name: "newuser", userid: 123, googleId: 198, role: "fullaccess",
    startTrial() {
        console.log("start trial")
        return "started"
    },
    endTrial(){
        console.log("end trial")
        return 2
    },
    getcoupon(name: string, user?: string){
        return 100
    }
}

//JavaScript evaluates each argument to console.log(...) from left to right.
console.log(Jack, Jack.startTrial(), Jack.endTrial(), Jack.getcoupon("chris"))