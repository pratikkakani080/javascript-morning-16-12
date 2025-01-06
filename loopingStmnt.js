// for loop
const arr = ['str1', 'str2', 'str3', 'str4', 'str5', 'str6']
let obj = {}
// for (n = 0; n < arr.length; n++) {
//     obj[n] = arr[n]
// }

// while loop
let i = 0
// while (i < arr.length) {
//     console.log('loop');
//     obj[arr[i]] = arr[i]
//     i++
// }

// do..while
do {
    obj[arr[i]] = arr[i]
    i++
} while (i < arr.length)


// for..in
// const objectt = { name: 'Raj', age: 4 }
// const arrrr = []
// for (let key in objectt) {
//     console.log(key, 'key**');
//     arrrr.push(key)
// }


// for..of
const Arrrrrrrr = [true, false]
for (let element of Arrrrrrrr) {
    console.log(element);
    
}



const checkIndex = (string) => {
    const alphabets = 'abcdefghijklmnopqrstuvwxyz'
    const splittedAlphabets = alphabets.split('')
    const lowerStr = string.toLowerCase()
    console.log('lowerStr*', lowerStr);
    const splitStr = lowerStr.split('')
    console.log('spliyStr**', splitStr);
    console.log('splittedAlphabets**', splittedAlphabets);
    console.log('mapp**', splitStr.map(el=>splittedAlphabets.indexOf(el) + 1));

    return splitStr.map(el => {
        console.log('splittedAlphabets.indexOf(el)**', splittedAlphabets.indexOf(el)); 
        return (
            splittedAlphabets.indexOf(el) + 1
        )
    }).join(' ')
}

console.log(checkIndex('partHiv'));
