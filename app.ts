const longestCommonPrefix = (strs) => {
    strs = strs.split(',')
    let counter = 0
    let letter
    let firstTime = true;
    let prefix = "";
    for (let s of strs) {
        s = s.trim()
        letter = s[counter];
        if (firstTime) {
            firstTime = false;
            continue;
        }
        if (letter === s[counter]) {
            prefix += s[0]
            counter++
        }
        else
            break;
    }

    if (counter) {
        console.log(prefix)
    }
    else {
        console.log("")
    }


    // strs.forEach(s => {
    //     firstLetter = s[0];
    //     continue
    //     if (counter !== 1) {
    //         if (firstLetter === s[0])
    //             counter++
    //     }
    // })
}

longestCommonPrefix("flower,flow,flight")