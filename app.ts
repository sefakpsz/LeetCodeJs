/**
 * @param {string} s
 * @return {boolean}
 */

const closings = ")]}"

const brackets = {}
brackets['('] = ')'
brackets[')'] = '('
brackets['['] = ']'
brackets[']'] = '['          //Set if statements according to rules 
brackets['{'] = '}'
brackets['}'] = '{'


var isValid = (parantheses) => {
    //if this is not plural then definitely one of paranthes has not a peer
    if (parantheses.length % 2 !== 0)
        return false

    if (parantheses.length === 2)
        if (brackets[parantheses[0]] !== parantheses[1])
            return false
        else {
            if (closings.includes(parantheses[0]))
                return false
            return true
        }

    for (let i = 0; i < parantheses.length; i++) {
        if (i + 1 === parantheses.length)
            return false
        if (parantheses[i] === brackets[parantheses[i + 1]]) {
            if (closings.includes(parantheses[i]))
                return false
            parantheses = parantheses.substring(0, i) + parantheses.substring(i + 2, parantheses.length)
            i = -1
        }
    }
    return true;
};

/*
Bad things about this algorithm are using useless validations and it makes code less performance and 
also array manipulation is expensive also using substring method means that creating new string and this also expensive operation

Instead of array or string manipulation stack data structure can be used in here and remove unnecessary validation checks 👌
*/

console.log(isValid("(([]){})"))