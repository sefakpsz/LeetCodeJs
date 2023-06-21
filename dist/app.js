"use strict"
function lengthOfLongestSubstring(s) {
    let subPast = []
    let subCurrent = []
    for (let letter of s) {
        if (subCurrent.indexOf(letter) !== -1) {
            if (subPast.length < subCurrent.length) {
                subPast = []
                subCurrent.map(s => subPast.push(s))
            }
            subCurrent = []
            subCurrent.push(letter)
        }
        else {
            subCurrent.push(letter)
            if (subPast.length === 0)
                subPast.push(letter)
        }
    }
    return subPast.length
}
console.log(lengthOfLongestSubstring(" "))
