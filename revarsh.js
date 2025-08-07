// const number = [1,2,3,4,5];


// const reversed =[];
// for(let i =0;i<number.length;i++){
//     console.log(number[i]);
//     reversed.unshift(number[i]);
// }

// for(const num of number){
//     reversed.push(num);
// }

// console.log(number);
// const result =number.reverse();
// console.log(number);
// console.log(result);
// console.log(reversed)



const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let reversed =[];
for(const color of colors){
    reversed.unshift(color);
}
console.log(reversed);