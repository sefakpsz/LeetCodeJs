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


//it is not good which has embedded loop but if 2 peer are true until that compare in second loop...

var isValid = (parantheses) => {
    if (parantheses.length % 2 !== 0)
        return false

    //counter will be used to calculating of where is the peer of the current paranthes
    let counter = 0;
    for (let i = 0; i < parantheses.length; i += 2) {
        //if next value is not peer of the first one, increase to counter with 1
        if (parantheses[i] !== dic[parantheses[i + 1]])
            counter++;
        else if (i === parantheses.length - 1) {
            if (counter > 0) {

            }



            // if (counter > 0) {
            //     let firstIndex = 0
            //     // adding of -1 is arrays start from 0 that's why after multiply or divide we need to substract with 1
            //     let lastIndex = (counter * 2) - 1

            //     while (lastIndex > firstIndex) {
            //         if (parantheses[firstIndex] !== dic[parantheses[lastIndex]])
            //             return false

            //         firstIndex++
            //         lastIndex--
            //     }
            //     counter = 0
            // }
        }
    }


    if (counter > 0) {
        let firstIndex = 0
        // adding of -1 is arrays start from 0 that's why after multiply or divide we need to substract with 1
        let lastIndex = (counter * 2) - 1

        while (lastIndex > firstIndex) {
            if (parantheses[firstIndex] !== dic[parantheses[lastIndex]])
                return false

            firstIndex++
            lastIndex--
        }
    }

    return true;
};

console.log(isValid("{[]}()[]{[({})]}"))

//if (s.includes(s[i])) {
        // if (s.indexOf(s[i]) !== (s.length - s.indexOf(dic[s[i]])))
        //     return false
        // }