// Find Even
let array1 = [54,56,321,76,45,985,4564,54,8789,21,76,28,24,901,20,463,12];
let ans = [];

// Return array of even numbers
const runTheJewels = function(a1){
    for( i = 0; i < a1.length; i++) {
        if(a1[i]%2 == 0){
            ans.push(a1[i])
        }
    }
console.log(ans)
}
//runTheJewels(array1)

// Quad for loop

const ramp = function(a1){
    for(let i = 0; i < a1.length; i++){
        for( let j = i+1; j < a1.length; j++){
            for (let k = j + 1; k < a1.length; k++){
                for(let l = k + 1; l < a1.length; l++){

                    console.log(a1[i], a1[j], a1[k], a1[l])
                }
            }
        }
    }
}
 
// ramp(array1)

console.log = ((log) => (...args) => {
  const last = args.pop();
  log(...args, `${last}!`);
})(console.log);

console.log('what have I done');



