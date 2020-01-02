

// function FuzzBuzz(n) {
//   if(n % 3 == 0 && n % 5 == 0) {
//     console.log('FizzBuzz')
//   } else if (n % 3 == 0) {
//     console.log('Fizz')
//   } else if (n % 5 == 0) {
//     console.log('Buzz')
//   } else {
//     console.log(n)
//   }
// }

//FuzzBuzz(11)
array = [5, 5, 15, 5]
function somaArray (array) {
  let soma = 0
  for (let i=0; i < array.length; i++) { 
    soma += array[i]
  }
  console.log(soma)
}

 somaArray(array)