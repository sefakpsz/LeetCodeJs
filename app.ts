function lengthOfLongestSubstring(s: string): number {
    let sub = [] as any
    let subLength = 0

    for (let letter of s) {
        //that means if sub includes "letter"
        const indexOfLetter = sub.indexOf(letter)
        if (sub.indexOf(letter) !== -1) {
            sub = sub.slice(indexOfLetter + 1, sub.length)
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

console.log(lengthOfLongestSubstring("aabaab!bb")) //3
console.log(lengthOfLongestSubstring("dvdf")) //3
console.log(lengthOfLongestSubstring("pwwkew")) //3
console.log(lengthOfLongestSubstring("anviaj")) //5
console.log(lengthOfLongestSubstring("abcabcbbb")) //3
console.log(lengthOfLongestSubstring("b")) //1
console.log(lengthOfLongestSubstring(" ")) //1
console.log(lengthOfLongestSubstring("de")) //2
console.log(lengthOfLongestSubstring("ohvhjdml")) //6 