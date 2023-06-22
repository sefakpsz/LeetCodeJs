function lengthOfLongestSubstring(s: string): number {
    // let subPast = []
    // let subCurrent = []

    // for (let letter of s) {
    //     if (subCurrent.indexOf(letter) !== -1) {
    //         if (subPast.length < subCurrent.length) {
    //             subPast = []
    //             subCurrent.map(s => subPast.push(s))
    //         }

    //         subCurrent = []
    //         subCurrent.push(letter)
    //     }
    //     else {
    //         subCurrent.push(letter)
    //         subPast.push(letter)
    //     }
    // }

    // return subPast.length

    let sub = []
    let subLength = 0

    for (let letter of s) {
        //that means if sub includes "letter"
        if (sub.indexOf(letter) !== -1) {
            sub = []
            sub.push(letter)
        }
        else {
            sub.push(letter)
        }

        if (subLength < sub.length) {
            subLength = sub.length
        }
    }

    if (subLength < sub.length) {
        subLength = sub.length
    }

    return subLength
}

console.log(lengthOfLongestSubstring("dvdf"))
//" " "ay" "b" which doesn't work