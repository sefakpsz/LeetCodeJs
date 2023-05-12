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

var isValid = function (s) {
    for (let i = 0; i < s.length; i += 2) {
        if (s.includes(s[i])) {
            if (s.indexOf(s[i]) !== (s.length - s.indexOf(dic[s[i]])))
                return false
        }

        //both of them could not be true either this or that

        else if (s[i] !== dic[s[i + 1]])
            return false;
    }
    return true;
};

console.log(isValid("{[]}"))