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

const func2 = (num: number) => {
    const str = []

    const valueOfZ = 26

    const remainder = num % valueOfZ - 1
    str.push(library[remainder === -1 ? valueOfZ - 1 : remainder]) // as last letter

    num = num === valueOfZ ? num - valueOfZ : num - num % valueOfZ

    const divider = num / valueOfZ

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


    console.log(str.reverse())
}

//18278 ZZZ

func2(18277)