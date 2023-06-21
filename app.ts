interface IResult {
    sub: string,
    repetition: Number
}

let dic: { [index: number]: IResult } = {}

dic[0] = { sub: "wke", repetition: 1 }

console.log(dic[0])


interface Dictionary<Number> {
    [sub: string]: Number
}

