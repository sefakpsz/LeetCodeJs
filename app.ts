const findMinSizeWord = (myWords) => {
    let minLenght = myWords[0].trim().length

    for (let word of myWords) {
        let currentWordLenght = word.trim().length;
        if (currentWordLenght < minLenght)
            minLenght = currentWordLenght
    }

    return minLenght;
}

const longestCommonPrefix = (strs) => {
    let wordCounter = 0;
    let letterCounter = 0;
    let letter = "";
    let minWordLength = findMinSizeWord(strs);
    let numberOfRepetition = minWordLength * strs.length;
    let myStringLength = strs.length;

    let longestCommon = "";

    if (myStringLength === 1)
        return strs[0]
    else {
        for (let i = 1; i <= numberOfRepetition; i++) {
            //if given string length is 1 we don't need to go into for loop
            if (longestCommon.length === minWordLength)
                break;

            //setting to letter which compare 
            //and also
            //reset to wordCounter which use for determining to which word is comparing right now
            if (wordCounter === 0) {
                letter = strs[wordCounter][letterCounter]
                wordCounter++;
            }

            let currentLetter = strs[wordCounter][letterCounter]
            if (letter === currentLetter) {
                if (wordCounter === myStringLength - 1)
                    longestCommon += letter;
            }
            else
                break;

            wordCounter++;

            //checking of is wordCounter value higher than lengthOfString
            if (wordCounter === myStringLength) {
                letterCounter++;
                wordCounter = 0;
            }
        }
        return longestCommon
    }
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]))