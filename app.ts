/**
 * @param {string} s
 * @return {boolean}
 */

const dic: { [key: String]: String } = {};
dic['('] = ')';
dic[')'] = '(';
dic['['] = ']';
dic[']'] = '[';
dic['{'] = '}';
dic['}'] = '{';

var isValid = function (s) {
    for (let i = 0; i < s.length; i += 2) {
        if (s.includes(s[i])) {
            if (s)
        }
        else if (s[i] !== dic[s[i + 1]])
            return false;
    }
    return true;
};

console.log(isValid("{[]}"))