class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
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

const addTwoNumbers = (l1: ListNode | null, l2: ListNode | null) => {
    const ints = []
    const ints2 = []
    while (l1) {
        ints.push(l1.val)
        l1 = l1.next
    }

    while (l2) {
        ints2.push(l2.val)
        l2 = l2.next
    }

    let length = 0
    if (ints.length > ints2.length)
        length = ints.length
    else
        length = ints2.length

    let ints3 = []

    for (let i = 0;i < length;i++) {
        let bit
        if (ints[i] >= 0 && ints2[i] >= 0) {
            bit = ints[i] + ints2[i]
            if (bit >= 10) {
                ints3.push(bit % 10)
                if (ints[i + 1] > 0) {
                    ints[i + 1]++
                    length++
                }
                else {
                    ints[i + 1] = 1
                    length++
                }
            } else
                ints3.push(bit)
        }
        else if (ints[i] >= 0) {
            bit = ints[i]
            if (bit >= 10) {
                ints3.push(bit % 10)
                if (ints[i + 1] > 0) {
                    ints[i + 1]++
                    length++
                }
                else {
                    ints[i + 1] = 1
                    length++
                }
            } else
                ints3.push(bit)
        }
        else if (ints2[i] >= 0) {
            bit = ints2[i]
            if (bit >= 10) {
                ints3.push(bit % 10)
                if (ints[i + 1] > 0) {
                    ints[i + 1]++
                    length++
                }
                else {
                    ints[i + 1] = 1
                    length++
                }
            } else
                ints3.push(bit)
        }
    }

    let newNode = new ListNode()
    ints3.reverse()
    for (let i = 0;i < ints3.length;i++) {
        newNode = push(newNode, ints3[i], i === 0)
    }

    let sum = ""
    while (newNode) {
        sum += newNode.val
        newNode = newNode.next
    }
    console.log(sum)

    return newNode
}

addTwoNumbers(
    new ListNode(2, new ListNode(4, new ListNode(9))),
    new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(9))))
)

addTwoNumbers(
    new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1)))))))))))))))))))))),
    new ListNode(5, new ListNode(6, new ListNode(4)))
)