const number = [1,2,3,4,5];


const reversed =[];
for(let i =0;i<number.length;i++){
    console.log(number[i]);
    reversed.unshift(number[i]);
}

console.log(reversed)