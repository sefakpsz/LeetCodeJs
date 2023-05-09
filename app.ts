const longestCommonPrefix = (letters) => {
    letters = letters.split(',')
    let counter = 0
    let letter = letters[0][0]
    let prefix = "";
    for (let word of letters) {
        word = word.trim()
        if (word[counter] === letter)
            prefix += letter[0]
        else
            break
        counter++;
    }

    if (counter > 0) {
        console.log(prefix)
    }
    else {
        console.log("")
    }
}

longestCommonPrefix("flower,flow,flight")