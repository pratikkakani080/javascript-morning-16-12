const arrOfNum = [2, 5, -1, 0.5, -6]
// [2, 5, 1, 0.5, 6]

let positive = arrOfNum.map(x => x < 0 ? -x : x)
// console.log(positive)

const checkPalindrome = ['radar', 'apple', 'level', 'tenet', 'test', 'anna']
// ['radar', 'level']
const filterCP = checkPalindrome.filter(el => {
    const splitStr = el.split('')
    const reverSpltStr = splitStr.reverse()
    const reversedStr = reverSpltStr.join('')
    return el === reversedStr    
})

console.log('filterCP**', filterCP);
