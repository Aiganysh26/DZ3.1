var num = prompt('Введите число')
for(var i = 0; i <= 100; i++){
  if(num % 3 === 0 && num % 5 !== 0){
    console.log('Fizz')
    continue
  }
  else if(num % 5 === 0 && num % 3 !== 0){
    console.log('Buzz')
    continue
  }
  else if(num % 3 === 0 && num % 5 === 0) {
    console.log('FizzBuzz')
  }else{
    console.log('error')
  }
}