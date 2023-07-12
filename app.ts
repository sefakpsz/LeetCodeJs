/*
Elinde bir excel dökümanı var. her bir kolona bir yazı tekabul ediyor. Bir fonskiyon olsun kolon numarasını verince 
karşılık gelen String'i geri dönsün. Tablo şu şekilde gidiyor.

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...

Örnek 1:
Input: columnNumber = 1
Output: "A"

Örnek 2:
Input: columnNumber = 28
Output: "AB"

Örnek 3:
Input: columnNumber = 701
Output: "ZY"
*/

interface numberString {
    [key: string]: number
}

const library: Array<numberString> = [
    { 'A': 1 },
    { 'B': 2 },
    { 'C': 3 },
    { 'D': 4 },
    { 'E': 5 },
    { 'F': 6 },
    { 'G': 7 },
    { 'H': 8 },
    { 'I': 9 },
    { 'J': 10 },
    { 'K': 11 },
    { 'L': 12 },
    { 'M': 13 },
    { 'N': 14 },
    { 'O': 15 },
    { 'P': 16 },
    { 'Q': 17 },
    { 'R': 18 },
    { 'S': 19 },
    { 'T': 20 },
    { 'U': 21 },
    { 'V': 22 },
    { 'W': 23 },
    { 'X': 24 },
    { 'Y': 25 },
    { 'Z': 26 },
]


/*
8 --> 308 915 776
7 --> 11 881 376
6 --> 456 976
5 --> 17 576
4 --> 676
3 --> 26
2 --> 1
1 --> 0

Max value of letter is 'F' for eigth step
*/

const convertToTitle2 = (columnNumber: number): string => {
    const str = []

    const valueOfZ = 26

    const remainder = columnNumber % valueOfZ - 1
    str.push(library[remainder === -1 ? valueOfZ - 1 : remainder]) // as last letter

    columnNumber = columnNumber === valueOfZ ? columnNumber - valueOfZ : columnNumber - columnNumber % valueOfZ

    const divider = columnNumber / valueOfZ

    if (divider <= valueOfZ && divider !== 0) {
        str.push(library[divider - 1])
    }
    else if (
        divider > valueOfZ &&
        divider <= valueOfZ * valueOfZ + valueOfZ
    ) {
        let substractor = valueOfZ
        let firstLetter
        let middleLetter

        for (let i = 1;i <= valueOfZ;i++) {
            if (substractor * i > divider) {
                firstLetter = library[i - 1 - 1]
                substractor *= i - 1
                break
            } else if (i === substractor) {
                firstLetter = library[i - 1]
                substractor *= i
            }
        }

        middleLetter = library[divider - substractor - 1]

        str.push(middleLetter)
        str.push(firstLetter)
    }


    let result = ""
    str.reverse().forEach(s => result += JSON.stringify(s as any)[2])
    return result
}

const convertToTitle = (columnNumber: number): string => {
    if (columnNumber <= 26) {
        return JSON.stringify(library[columnNumber - 1])[2]
    }

    let value = (columnNumber - columnNumber % 26) / 26

    const valueOfSteps = [1, 26, 676, 17576, 456976, 11881376, 308915776]

    const valueOfFirstPlace = columnNumber % 26

    let startPoint = 0
    for (let index = 0;index < valueOfSteps.length;index++) {
        if (index === valueOfSteps.length - 1) {
            if (value > valueOfSteps[index]) {
                startPoint = valueOfSteps.length
                break
            }
        } else if (value >= valueOfSteps[index] && value < valueOfSteps[index + 1]) {
            startPoint = index + 1
            break
        }
    }

    let resultString = ""
    for (let index = startPoint;index >= 0;index--) {

        let compareValue = valueOfSteps[index - 1]

        let numberOfMultiply = 0

        for (let index = 1;index < 26;index++) {
            if (compareValue * index > value) {
                numberOfMultiply = index - 1
                break
            } else if (compareValue * index === value) {
                numberOfMultiply = index
                break
            }
        }

        value -= numberOfMultiply * compareValue
        if (numberOfMultiply !== 0)
            resultString += JSON.stringify(library[numberOfMultiply - 1])[2]
    }

    resultString += JSON.stringify(library[valueOfFirstPlace - 1])[2]

    return resultString
}

//console.log(convertToTitle(1)) //A
//console.log(convertToTitle(26)) //Z
//console.log(convertToTitle(27)) //AA
//console.log(convertToTitle(28)) //AB
//console.log(convertToTitle(1500)) //BER
//console.log(convertToTitle(1200)) //ATD
//console.log(convertToTitle(703)) //AAA
console.log(convertToTitle(18278)) //ZZZ 🚨
//console.log(convertToTitle(701)) //ZY 🚨AY
//console.log(convertToTitle(2147483647)) //FXSHRXW