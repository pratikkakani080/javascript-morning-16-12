// console.log(document.getElementById('h1tag'))
// console.log(document.getElementsByClassName('temp-class'));
// console.log(document.getElementsByTagName('h1')[0]);
// console.log(document.querySelector('.temp-class'));
// console.log(document.querySelectorAll('.temp-class'));

const ddd = document.querySelector('.temp-class')
ddd.style.color = 'blue'

ddd.addEventListener('mouseover', () => {
    console.log('h1 tag is clicked with event listner');
    
})

ddd.removeEventListener('mouseover', () => {
    console.log('event is removed from H1 el');

})


const arr = [3, 7, 1, 5, 4, 1, 9]
const checkLowest = (data) => {

}

console.log(checkLowest(arr))