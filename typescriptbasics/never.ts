//https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-never-type
interface circle {
    kind : "circle",
    radius : number
}

interface square {
    kind : "square"
    side : number
}

type shape = circle | square

function getshape(shape: shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck
    }
}

console.log(getshape({ kind: "circle", radius: 10 }))
console.log(getshape({ kind: "square", side: 10 }))