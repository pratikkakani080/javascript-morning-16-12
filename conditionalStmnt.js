// If...else

const color = 'red'
const number = 5
if (color === 'red' && number === 5) {
    document.write('color is red')
} else if (color === 'black') {
    document.write('color is black')
} else if (color === 'green') {
    document.write('color is green')
} else {
    document.write('color is unknown')
}

switch (color) {
    case 'red':
        document.write('color is red')
        break;

    case 'black':
        document.write('color is black')
        break;

    case 'green':
        document.write('color is green')
        break;

    default:
        document.write('color is unknown')
        break;
            
}

// color === 'red' 
//     ? document.write('color is red') 
//     : color === 'black' ? document.write('color is black')
//     : color === 'green' ? document.write('color is green') : document.write('color is unknown')

const students = [
    {
        name: 'Hinali',
        hobbies: ['Movies', 'Travel', 'Reading', 'Riding'],
    },
    {
        name: 'Mansvi',
        hobbies: ['Movies', 'Travel', 'Reading', 'Riding']
    }
]
const hobbies = ['Movies', 'Travel', 'Reading', 'Riding']

// let hobbies1=hobbies.filter(item=>item !== "Reading")
// let b = hobbies.map(x=>x.includes('Reading'));
let b = students.map((x) => {
  if (x.name === "Hinali") {
    return {
      ...x,
      hobbies: x.hobbies.filter((el) => el !== "Reading"),
    };
  } else {
    return {
      ...x,
      hobbies: x.hobbies.splice(2, 2),
    };
  }
});
// let c = b.splice(hobbies.filter(x=>x!=="Reading"))
// hobbies.splice(1,2)
console.log(b)









