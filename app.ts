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

// 26^3 17 576
// 26^4 456 976
// 26^5 11 991 376
// 26^6 308 915 776

interface subType {
    letterNum: number,
    timeOfMultiply: number
}

interface beforeFinalStringType {
    letter: string,
    queue: number
}

const func1 = (num: number): Array<beforeFinalStringType> => {
    const substracts: Array<subType> = []
    const lengthOfLib = library.length

    let beforeFinalString: Array<beforeFinalStringType> = []

    let letterNum = 1
    let timeOfMultiply = 0
    let queue = lengthOfLib

    while (num > 0) {
        for (let i = lengthOfLib;i > 0;i--) {
            if (i > num)
                continue

            while (letterNum < num) {
                letterNum *= i
                timeOfMultiply++

                if (letterNum * i > num)
                    break
            }

            substracts.push({ letterNum, timeOfMultiply })
            // letterNum = 1
            // timeOfMultiply = 0
        }

        console.log({ subs: substracts })

        const maxData = substracts.reduce((prev, current) => {
            return (prev.letterNum > current.letterNum) ? prev : current
        })

        queue = maxData.timeOfMultiply
        num -= maxData.letterNum
        console.log(`after substraction ${num}`)
        //letterNum = Math.log(maxData.letterNum)

        beforeFinalString.push({
            queue: maxData.timeOfMultiply,
            letter: library[Math.pow(maxData.letterNum, 1 / maxData.timeOfMultiply).toFixed()]
        })
    }

    return beforeFinalString
}

//console.log(func(27)) //AA
// console.log(func(28)) //AB
// console.log(func(26)) //Z
// console.log(func(1)) //A
// console.log(func(701)) //ZY
// console.log(func(649)) //YX
// console.log(func(1500)) //BER
// console.log(func(1200)) //ATD
// console.log(func(900)) //AEP


/*
ZZ --> 702 
  A   A   A --> 703
 676  26  1
first A -> 1
second A -> 26
703 - 27 -> 676

*/

console.log(1500 % 26)

const max = 18278

const func2 = (num: number) => {
    const divider = 26

    let lastString = ""

    let result = num % divider

    lastString += library[result]

    num -= result

    let howMany26 = num / 26

    for (let i = 1;i < 26;i++) {
        if (i * 26)        
    }
}