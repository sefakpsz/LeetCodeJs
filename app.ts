const findMinSizeWord = async (myWords) => {
    let minLenght = myWords[0].trim().length

    for (let word of myWords) {
        let currentWordLenght = word.trim().length;
        if (currentWordLenght < minLenght)
            minLenght = currentWordLenght
    }

    return minLenght;
}

const longestCommonPrefix = async (strs) => {
    let wordCounter = 0;
    let letterCounter = 0;
    let letter = "";
    let minWordLength = await findMinSizeWord(strs);
    let numberOfRepetition = minWordLength * strs.length;
    let myStringLength = strs.length;

    let longestCommon = "";

    for (let i = 1; i < numberOfRepetition; i++) {
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

    console.log(longestCommon)
    return `${longestCommon}`;
}

longestCommonPrefix(["flower", "flow", "flight"])