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

console.log(isValid("(([]){}))"))















































// var isValid = (parantheses: string) => {
//     // if this is not plural then definitely one of paranthes has not a peer
//     if (parantheses.length % 2 !== 0)
//         return false

//     if (parantheses.length === 2)
//         if (brackets[parantheses[0]] !== parantheses[1])
//             return false
//         else
//             return true

//     let counter = 0;
//     for (let i = 0; i < parantheses.length; i += 2) {
//         if (closings.includes(parantheses[i])) {
//             if (counter == 0) {
//                 console.log("counter 0 and is first one closing ?")
//                 return false
//             }

//             const comparing = compare(i, counter, parantheses);
//             if (!comparing)
//                 return false
//             counter = 0
//         }
//         else if (brackets[parantheses[i]] !== parantheses[i + 1])
//             counter++

//         if (counter > 0 && parantheses.length === i + 2) {
//             const comparing = compare(i, counter, parantheses);
//             if (!comparing)
//                 return false
//         }
//     }
//     return true;
// };

// const compare = (i: number, counter: number, parantheses: string) => {
//     //determining to wrong string's place in whole string
//     console.log({ i, counter })
//     let firstIndex = i - (counter * 2)
//     let lastIndex = i + (counter * 2) - 1

//     while (lastIndex > firstIndex) {
//         if (brackets[parantheses[firstIndex]] !== parantheses[lastIndex]) {
//             return false
//         }

//         lastIndex--
//         firstIndex++
//     }
//     return true
// }

// console.log(isValid("(([]){})"))

// //if (s.includes(s[i])) {
//         // if (s.indexOf(s[i]) !== (s.length - s.indexOf(brackets[s[i]])))
//         //     return false
//         // }