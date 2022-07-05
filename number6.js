function replace(replaced){
    let last = [];
    for (let i =0;i <replaced.length; i++ ){
        if(array[i] === 'Program'){
            last.push('******')
        }else{last.push(replaced[i])}
    }
    console.log(last)
}
let array=['Man', 'I','love','Matrix','Program'];
replace(array)