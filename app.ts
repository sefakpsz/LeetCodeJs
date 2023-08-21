interface Palindrome {
    word: string
    length: number
}

let palindromeWords: Array<Palindrome>

function longestPalindrome(s: string): string {
    let temp = ''
    for (const letter of s) {
        temp += letter
    }

    return ''
}

console.log(longestPalindrome('babad')) // --> aba
console.log(longestPalindrome('cbbd')) // --> bb
console.log(longestPalindrome('acababaccdaba')) // --> cababac
