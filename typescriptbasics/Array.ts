const superhero: string[]= [
    "abc", "qwe"
]

const newsuperhero: Array<string>=[
    "spiderman"
]
superhero.push("ironman")
newsuperhero.push(...superhero)
console.log(superhero)
console.log(newsuperhero)
