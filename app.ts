/**
 * @param {string} s
 * @return {boolean}
 */

const closings = ")]}"

const brackets = {}
brackets['('] = ')'
brackets[')'] = ''
brackets['['] = ']'
brackets[']'] = ''          //Set if statements according to rules 
brackets['{'] = '}'
brackets['}'] = ''


//it is not good which has embedded loop but if 2 peer are true until that compare in second loop...

var isValid = (parantheses: string) => {
    if (parantheses.length % 2 !== 0)
        return false

    if (parantheses.length === 2)
        if (brackets[parantheses[0]] !== parantheses[1])
            return false
        else
            return true

    //counter will be used to calculating of where is the peer of the current paranthes
    let counter = 0;
    for (let i = 0; i < parantheses.length; i += 2) {
        if (closings.includes(parantheses[i])) {
            if (counter == 0) {
                console.log("counter 0 and is first one closing ?")
                return false
            }

            const comparing = compare(i, counter, parantheses);
            if (!comparing)
                return false
            counter = 0
        }
        else if (brackets[parantheses[i]] !== parantheses[i + 1])
            counter++

        if (counter > 0 && parantheses.length === i + 2) {
            const comparing = compare(i, counter, parantheses);
            if (!comparing)
                return false
        }
    }
    return true;
};

const compare = (i: number, counter: number, parantheses: string) => {
    //determining to wrong string's place in whole string
    console.log({ i, counter })
    let firstIndex = i - (counter * 2)
    let lastIndex = i + (counter * 2) - 1

    while (lastIndex > firstIndex) {
        if (brackets[parantheses[firstIndex]] !== parantheses[lastIndex]) {
            console.log({ "brackets[parantheses[firstIndex]]": brackets[parantheses[firstIndex]], "parantheses[lastIndex]}": parantheses[lastIndex] })
            console.log("compare function if")
            return false
        }

        lastIndex--
        firstIndex++
    }
    return true
}

console.log(isValid("(([]){})")) // false 

//if (s.includes(s[i])) {
        // if (s.indexOf(s[i]) !== (s.length - s.indexOf(brackets[s[i]])))
        //     return false
        // }