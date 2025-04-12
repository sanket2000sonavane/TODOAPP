let rgb: [number, number, number] = [123, 255, 255]
console.log(rgb)
// but it can be updated using push , pop
rgb.push(231)
console.log(rgb)


//enums
enum seatchoice {
    first,
    second,
    third
}

const seat = seatchoice.first
console.log(seat)

const enum seatchoice2 {
    first= "aisle",
    second = 3,
    third
}

const seat2 = seatchoice2.first
console.log(seat2)