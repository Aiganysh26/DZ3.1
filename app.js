for(var i = 0; i <= 100; i++){
    if(i % 3 === 0 && i % 5 !== 0){
      console.log('Fizz')
      continue
    }
    else if(i % 5 === 0 && i % 3 !== 0){
      console.log('Buzz')
      continue
    }
    else if(i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    }else{
      console.log(i)
    }
  }