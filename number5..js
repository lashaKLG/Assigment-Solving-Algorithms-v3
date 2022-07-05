function remove(array) {
   let result = [];
   for (let i =0; i < array.length; i++)
   if(array[i] < 0 ){
       result.unshift()

   }else{
       result.push(array[i])
   }
   console.log(result)
}
let x=[1, -2, 4, 1]
remove(x)