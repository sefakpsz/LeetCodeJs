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

const powerOf26 = (power: number) => {
    return Math.pow(26, power)
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

    let value = columnNumber - remainder

    let valueOfFirstPlace = remainder

    let startPoint = 0
    for (let index = 1;index <= 6;index++) {
        if (index === 6) {
            startPoint = 6
            break
        } else if (value < powerOf26(index + 1) && value >= powerOf26(index)) {
            startPoint = index
            break
        }
    }

    let resultString = ""
    let valueForCalculation = value
    for (let index = startPoint;index >= 1;index--) {
        if (valueForCalculation === 0 && index === 1) {
            startPoint--
            index = startPoint
            resultString = ''
            valueForCalculation = value
        }
        let compareValue = powerOf26(index)
        let numberOfMultiply = 0

        for (let index = 1;index <= valueOfZ;index++) {
            const newMemberOfString = compareValue * index

            if (newMemberOfString > valueForCalculation) {
                numberOfMultiply = index - 1
                break
            } else if (newMemberOfString === valueForCalculation) {
                numberOfMultiply = index
                break
            } else if (index === valueOfZ && numberOfMultiply === 0)
                numberOfMultiply = valueOfZ
        }

        valueForCalculation -= numberOfMultiply * compareValue
        if (numberOfMultiply)
            resultString += library[numberOfMultiply]
    }

    resultString += library[valueOfFirstPlace]

    return resultString
}