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


const sortingOdd = (arr) => {
    let n = 0
    return arr.map((el, i, arrrr) => {
        if (el % 2 === 0) {
            return el
        } else {
            const newArr = arrrr.filter(el => el % 2 !== 0).sort((a, b) => a - b)
            return newArr[n++]
        }
    })
}

console.log(sortingOdd([3, 1, 5, 4, 8, 9, 3]));