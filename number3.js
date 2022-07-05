let z= [];

for(let i = 1; i < 135; i++){
    if(i % 3 == 0 & i % 5 == 0){
        z[i] = 'FizzBuzz'
    }else if(i % 3 == 0){
        z[i] = 'Fizz'
    }else if(i % 5 == 0){
        z[i] = 'Buzz'
    }else {z[i]=i;
    }
    z.push(z[i]);
    
    
      console.log(z)
 }

