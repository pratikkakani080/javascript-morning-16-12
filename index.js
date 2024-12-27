// console.log("this is external js file");

let age = 34;
age = 56;
// console.log("age**", age);

var firstName = 'john';
var firstName = 'kalavati';
firstName = 'test';
// console.log("firstName**", firstName);

const variable3 = 45;
// console.log("variable3**", variable3);

// casing
// camelCase
// snake_case
// UPPERCASE
// UPPER_SNAKE_CASE
// lowercase

// Data types
    // Premitive
        // String
        const ageVar = 5
            // '', "", ``, String(444), console.log(`my age age age is ${ageVar}`.match(/age/g))
        // Number
            0 - 9,  Number('343') // 2^53  NaN
        // Boolean
            true, false, Boolean()
        // Undefined
            undefined
        // Null
            null
        // Bigint
            BigInt(123312), 1n
        // Symbol
            Symbol(), Symbol()


    // Non-premitive / complex
        // Object
            // {
            //     firstName: '',
            //     lastName: '',
            //     age: 00,
            //     address: '',
            //     isActive: true,
            //     firstName: 'test'    
            // }
            const newObj = Object.assign({ init: 'data' }, { data: () => {} }, { data2: 'test2'})
            // console.log('object creation******', newObj)
            // newObj.data()
            // newObj['init']
            // Object desctructuring
            const { init, data, data2 } = newObj
            // console.log('object desctructuring******', init, data, data2)

            // Object to array conversion
                const keyList = Object.keys(newObj)
                // console.log('keyList**', keyList);

                const valueList = Object.values(newObj)
                // console.log('valueList**', valueList); 
                
                const keyValueList = Object.entries(newObj)
                // console.log('keyValueList**', keyValueList); 
            
            delete newObj.data2
            delete newObj.data
            // console.log('o bject creation after delete******', newObj)

        // Array
           const arrrraayyyy = [
                1, 4, 7, 5, 6, 4, 8, 7, 5, 4, 3 
            ]
            const poppedEl = arrrraayyyy.pop()
            arrrraayyyy.push(56)

            
            const shiftedEl = arrrraayyyy.shift()


             arrrraayyyy.unshift(555)


            // console.log('array **', arrrraayyyy, poppedEl, shiftedEl);

            
        // Function
            function fun1(param1, param2, param3, param4, param5, param6, param7, param8) {
                const test = 'test'
                // console.log('fun1***********', param1, param2, param3, param4, param5, param6, param7, param8());
                
                return newFunc(param8)
            }
            // callback hell

            const newFunc = (param8) => { return param8()}
            
            // Arrow function
            const test111 = () => {
                // console.log('test111***********');
                return 123434
            }
            // console.log('test**', fun1('glob', 1, true, undefined, {}, [], false, test111));
            // const testVar = test111()
            // console.log(testVar)
            // callBack function
            // asynchronous function
        // NaN


        const students = [
            {
                name: 'Raj',
                Age: 22
            },
            {
                name: 'Prem',
                Age: 18
            },
            {
                name: 'Hinali',
                Age: 21
            },
            {
                name: 'Parthiv',
                Age: 21
            },
            {
                name: 'Prince',
                Age: 19
            },
            {
                name: 'Manasvi',
                Age: 21
            },
            {
                name: 'Meet',
                Age: 23
            },
            ]

            // { name: [.....] }
            const ageSum = students.reduce((accumulator, currentValue) => {
                // console.log('accumulator', accumulator , 'currentValue', currentValue);
                // const sumOfAge = accumulator + currentValue.Age
                let names = accumulator.name
                names.push(currentValue.name)
                return { name: names }
            }, { name: [] })

            let newNamesArr = []            
            students.forEach(({name, Age}) => {
                newNamesArr = [...newNamesArr, name]
            })

            const testarr = [1, 3, 4, 6 ,7]
            const [count1, count2, count3, count4, count5] = testarr
            // console.log('ageSum**', ageSum, {name: newNamesArr}, count1, count2, count3, count4, count5);
 

            // Spread operator
            // ...
            let strrrr = ['test']
            
            // Object ==> Short hand property
            const raj = ['teststtstestgsdf']
            console.log({ raj })
