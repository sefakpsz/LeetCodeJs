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
    // if this is not plural then definitely one of paranthes has not a peer
    // if (parantheses.length % 2 !== 0)
    //     return false

    // if (parantheses.length === 2)
    //     if (brackets[parantheses[0]] !== parantheses[1])
    //         return false
    //     else {
    //         if (closings.includes(parantheses[0]))
    //             return false
    //         return true
    //     }

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
Suggestions from ChatGPT

1.Remove unnecessary checks: The first part of your code checks if the length of the input string is 2 and performs some validations. 
You can remove this check since it's already covered in the general logic of the function.

2.Avoid string manipulation: In your current implementation, you modify the parantheses string by removing matching pairs of parentheses 
using the substring function. String manipulation operations like this create new strings, 
which can be expensive in terms of memory and runtime. Instead of modifying the string, 
you can use a stack data structure to keep track of the open parentheses.
*/

console.log(isValid("(([]){})"))