// const longestPalindrome = (s: string): string => {
//     let tempArray = []
//     let palindromics = []
//     let reverseVersionOfTemp = []

//     //it needs to run s.length * s.length times and each s.length time need to start from one more than last value of i

//     for (let i = 0;i < s.length * s.length;i++) {
//         tempArray.push(s[i % s.length])

//         if (tempArray.length > 1) {
//             reverseVersionOfTemp = tempArray.slice().reverse()

//             if (tempArray.toString() === reverseVersionOfTemp.toString()) {
//                 palindromics.push(tempArray.toString())
//             }
//         }

//         reverseVersionOfTemp = []

//         if (i % s.length === 0)
//             tempArray = []
//     }

//     palindromics.forEach(s => console.log(s))
//     return null
// }

// longestPalindrome("ababbaba")

abstract class Creator {
    public abstract factoryMethod(): Product

    public someOperation(): string {
        const product = this.factoryMethod()
        return `Creator: The same creator's code has just worked with ${product.operation()}`
    }
}

class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1()
    }
}

class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2()
    }
}

interface Product {
    operation(): string
}

class ConcreteProduct1 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct1}'
    }
}

class ConcreteProduct2 implements Product {
    public operation(): string {
        return '{Result of the ConcreteProduct2}'
    }
}

function clientCode(creator: Creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.')
    console.log(creator.someOperation())
}

console.log('App: Launched with the ConcreteCreator1.')
clientCode(new ConcreteCreator1())
console.log('')

console.log('App: Launched with the ConcreteCreator2.')
clientCode(new ConcreteCreator2())