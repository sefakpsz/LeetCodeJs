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
    [key: number]: string
}

const library: numberString = {
    1: "A",
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
    const valueOfZ = 26

    if (columnNumber <= valueOfZ) {
        return library[columnNumber]
    }

    const remainder =
        columnNumber % valueOfZ === 0
            ? valueOfZ
            : columnNumber % valueOfZ

    let value = (columnNumber - (remainder)) / valueOfZ

    const valueOfFirstPlace = remainder

    let startPoint = 0
    //6 means constraint of algorithm --> 26^6 is the limit.
    for (let index = 0;index < 6;index++) {
        if (index === 5) {
            if (value > Math.pow(26, index)) {
                startPoint = 6
                break
            }
        } else if (value >= Math.pow(26, index) && value < Math.pow(26, index + 1)) {
            startPoint = index
            break
        } else if (value === Math.pow(26, index + 1)) {
            startPoint = index
            break
        }
    }

    let resultString = ""
    for (let index = startPoint;index >= 0;index--) {

        let compareValue = Math.pow(26, index)

        let numberOfMultiply = 0

        for (let index = 1;index <= 26;index++) {
            if (compareValue * index > value) {
                numberOfMultiply = (index - 1) * Math.pow(26, resultString.length + 1)
                if (numberOfMultiply > valueOfZ) {
                    numberOfMultiply %= valueOfZ
                    if (numberOfMultiply === 0)
                        numberOfMultiply = valueOfZ
                }
                break
            } else if (compareValue * index === value) {
                numberOfMultiply = index * Math.pow(26, resultString.length + 1)
                if (numberOfMultiply > valueOfZ) {
                    numberOfMultiply %= valueOfZ
                    if (numberOfMultiply === 0)
                        numberOfMultiply = valueOfZ
                }
                break
            }
        }

        value -= (numberOfMultiply / valueOfZ) * compareValue
        if (numberOfMultiply !== 0) {
            resultString += library[numberOfMultiply]
        }
    }
    resultString += library[valueOfFirstPlace]

    return resultString
}

console.log(convertToTitle(1)) //A
console.log(convertToTitle(26)) //Z
console.log(convertToTitle(27)) //AA
console.log(convertToTitle(28)) //AB
console.log(convertToTitle(1500)) //BER
console.log(convertToTitle(1200)) //ATD
console.log(convertToTitle(703)) //AAA
console.log(convertToTitle(18278)) //ZZZ 🚨AAZ
console.log(convertToTitle(701)) //ZY 🚨AY
// console.log(convertToTitle(2147483647)) //FXSHRXW


/*
    1 A        21 ACC
    2 B        22 BAA
    3 C        23 BAB
    4 AA       24 BAC
    5 AB       25 BBA
    6 AC       26 BBB
    7 BA       27 BBC
    8 BB       28 BCA
    9 BC       29 BCB
    10 CA      30 BCC
    11 CB      31 CAA
    12 CC      32 CAB
    13 AAA     33 CAC
    14 AAB     34 CBA
    15 AAC     35 CBB
    16 ABA     36 CBC
    17 ABB     37 CCA
    18 ABC     38 CCB
    19 ACA     39 CCC
    20 ACB     40 AAAA
*/
    //const valueOfSteps = [1, 26, 676, 17576, 456976, 11881376, 308915776]