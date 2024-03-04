const para = document.querySelectorAll('p')
const section = document.querySelector('section')

let num1  = 20
let num2  = 5
let num3  = 14
let num4  = 28

para[0].innerHTML = '<em>Add num1 and num2</em>: ' + ( num1 + num2)

para[1].innerHTML = '<em>Subtract num2 from num4 </em>: ' + ( num4 - num2)

para[2].innerHTML = '<em>Divide num4 by num3 </em>: ' + ( num4 / num3)

para[3].innerHTML = '<em>Multiply num3 by 10 </em>: ' + ( num3 * 10)

para[4].innerHTML = '<em>Divide num2 by num3 </em>: ' + ( num2 / num3).toFixed(2)

para[5].innerHTML = '<em>Num1 to power 4  </em>: ' + ( num1 ** 4)

para[6].innerHTML = '<em>Remainder of num1 divided by num3  </em>: ' + ( num1 % num3)

//assignment operators

//increase num1 with the value of num4
// num1 = num1 + num4

// num1 += num4

//multiply num3 by num2 and return the ans as the new value of num3

// num3 = num3 * num2
// num3 *= num2

//divide num3 by 10 and use that as the new value for num3

// num3 /= 10

let z = Math.PI
let x = Math.abs(20-40)
let y = Math.cbrt(27)
let w = Math.random()

let a = num1++
let b = ++num2
let c = num3--
let d = --num4

console.log(num1)
console.log(num3)
console.log((z.toFixed(3)-0)+ num3)
console.log(x+10)
console.log(y)
console.log(w)

section.style.border = '10px solid green'
section.style.background = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
