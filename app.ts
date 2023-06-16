class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null) => {
    const ints = []
    const ints2 = []
    while (l1) {
        ints.push(l1.val)
        l1 = l1.next
    }
    let ten = 1

    let sum = 0
    for (let index = 0;index < ints.length;index++) {
        ints[index] *= ten
        sum += ints[index]
        ten = ten * 10
    }

    while (l2) {
        ints2.push(l2.val)
        l2 = l2.next
    }

    ten = 1
    for (let index = 0;index < ints2.length;index++) {
        ints2[index] *= ten
        sum += ints2[index]
        ten = ten * 10
    }

    const sumString = sum.toString().split('')

    let a = ""
    sumString.reverse().forEach(s => a += s)
    console.log(a)

    //a needs to be 70401

    let newNode = new ListNode()
    for (let index = 0;index < sumString.length;index++) {
        newNode = push(newNode, parseInt(sumString[index]), index === 0)
    }

    return newNode
}

const push = (l: ListNode, nextValue: number, next: boolean): ListNode => {
    if (next) {
        l.val = nextValue
        return l
    }
    const newNode = new ListNode()
    newNode.val = nextValue
    newNode.next = l
    return newNode
}

//942+9465 then reverse
addTwoNumbers(
    new ListNode(2, new ListNode(4, new ListNode(9))),
    new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(9))))
)

//100..001+465 then reverse
addTwoNumbers(
    new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1)))))))))))))))))))))),
    new ListNode(5, new ListNode(6, new ListNode(4)))
)