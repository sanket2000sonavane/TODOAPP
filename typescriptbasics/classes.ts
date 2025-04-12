class User {
    email: string
    name : string
    city : string= 'Pune'
    constructor(email: string, name: string){
        this.name=name;
        this.email=email;
    }
}
const newuser = new User("abc@abc.com", "Nick");

class User2 {

    readonly city : string= 'Pune'
    constructor(
        public email: string, 
        public name: string
    ){
        this.name=name;
        this.email=email;
    }

    get newEmail(): string{
        console.log(`new${this.email}`)
        return `new${this.email}`
    }

    protected course = 1;

    get coursecount(): number{
        console.log("in get function:",this.course)
        return this.course;
    }

    set coursecount(num: number){
        this.course = num
        console.log("in set function:",this.course)
    }
}

class subuser extends User2{
    changcourse(){
        this.course=90
        console.log(this.course)
    }
}
const newuser2 = new User2("abc@abc.com", "Nick");

const subuserobject = new subuser("giyiabc@abc.com", "jyfyf");


console.log(newuser2.coursecount)
newuser2.coursecount= 12
console.log(newuser2.coursecount)

console.log(newuser)
console.log(newuser2)
subuserobject.changcourse()
export{}





