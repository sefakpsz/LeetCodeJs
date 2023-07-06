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

const library: { [key: number]: string } = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
    5: 'E',
    6: 'F',
    7: 'G',
    8: 'H',
    9: 'I',
    10: 'J',
    11: 'K',
    12: 'L',
    13: 'M',
    14: 'N',
    15: 'O',
    16: 'P',
    17: 'Q',
    18: 'R',
    19: 'S',
    20: 'T',
    21: 'U',
    22: 'V',
    23: 'W',
    24: 'X',
    25: 'Y',
    26: 'Z',
}

// 26^3 17 576
// 26^4 456 976
// 26^5 11 991 376
// 26^6 308 915 776

const func = (num: number): string => {

    let util = 1
    let multiply = 0
    let subsNums = []

    for (let i = 26;i > 0;i--) {
        if (i > num)
            continue

        while (util > num) {
            util *= i
            multiply++
        }

        subsNums.push(util)
        util = 1

    }

    // let sum = ""
    // if (num > 26) {
    //     let power = num % 26 // 2

    //     let second = library[power === 0 ? 1 : power] // B

    //     let first
    //     if (num - power > 26)
    //         first = library[Math.sqrt(num - power)]
    //     else
    //         first = library[num - power - 25]


    //     sum = first + second
    // }
    // else {
    //     sum = library[num]
    // }


    // return sum

    return ""
}
console.log(func(27)) //AA26*
console.log(func(28)) //AB
console.log(func(26)) //Z
console.log(func(1)) //A
console.log(func(701)) //ZY
console.log(func(649)) //YX
console.log(func(1500)) //DDFAC
console.log(func(1200)) //DCDEF