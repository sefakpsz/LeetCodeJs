/**
 * @param {string} s
 * @return {boolean}
 */

const dic = {};
dic['('] = ')';
dic[')'] = '(';
dic['['] = ']';
dic[']'] = '[';
dic['{'] = '}';
dic['}'] = '{';

var isValid = (parantheses) => {
    if (parantheses.length % 2 !== 0)
        return false

    //counter will be used to calculating of where is the peer of the current paranthes
    let counter = 0;
    for (let i = 0; i < parantheses.length; i += 2) {
        if (parantheses[i] !== dic[parantheses[i + 1]])
            counter++;
        else {
            let firstIndex = 0
            let lastIndex = (counter * 2) - 1
            // adding of -1 is arrays start from 0 that's why after multiply or divide we need to substract with 1

            if (parantheses[firstIndex] !== dic[parantheses[lastIndex]])
                return false;
        }
    }
    return true;
};

console.log(isValid("(){}[](("))

//if (s.includes(s[i])) {
        // if (s.indexOf(s[i]) !== (s.length - s.indexOf(dic[s[i]])))
        //     return false
        // }