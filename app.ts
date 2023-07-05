const longestPalindrome = (s: string): string => {
    let tempArray = []
    let palindromics = []
    let reverseVersionOfTemp = []
    let queue = 0
    //it needs to run s.length * s.length times and each s.length time need to start from one more than last value of i

    for (let i = queue;i < s.length;i++) {
        tempArray.push(s[i])

        if (tempArray.length > 1) {
            reverseVersionOfTemp = tempArray.slice().reverse()

            if (tempArray.toString() === reverseVersionOfTemp.toString()) {
                palindromics.push(tempArray.toString())
            }
        }

        reverseVersionOfTemp = []

        if (i === s.length - 1) {
            queue++
            if (queue === s.length)
                break
            i = 0
            tempArray = []
        }
    }

    palindromics.forEach(s => console.log(s))
    return "null"
}

longestPalindrome("ababbaba")
//aba
//ababbaba
//bab
//babbab
//abba
//bb
//bab
//aba