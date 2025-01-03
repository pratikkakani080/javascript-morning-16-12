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