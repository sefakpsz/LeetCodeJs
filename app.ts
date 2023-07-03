const longestPalindrome = (s: string): string => {
    let tempArray = []
    let palindromics = []
    let reverseVersionOfTemp = []

    //it needs to run s.length * s.length times and each s.length time need to start from one more than last value of i

    for (let i = 0;i < s.length * s.length;i++) {
        tempArray.push(s[i % s.length])

        if (tempArray.length > 1) {
            reverseVersionOfTemp = tempArray.slice().reverse()

            if (tempArray.toString() === reverseVersionOfTemp.toString()) {
                palindromics.push(tempArray.toString())
            }
        }

        reverseVersionOfTemp = []

        if (i % s.length === 0)
            tempArray = []
    }

    palindromics.forEach(s => console.log(s))
    return null
}

longestPalindrome("ababbaba")