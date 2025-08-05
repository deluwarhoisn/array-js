const numbers =[6,5,8,9,3,4];
// console.log(numbers);
numbers.sort();
// console.log(numbers);

const friends = ['sakib','nokib','rakib','bakibulla']
console.log(friends);
friends.sort();
// console.log(friends);

const ages = [1, 5, 100, 8, 2, 28]
// console.log(ages);
// ages.sort();
// console.log(ages);
const sorted_ages = ages.sort(function (a,b) {return a-b})
console.log(sorted_ages);
const sorted_ages_desc = ages.sort(function (a,b) {return b-a})
console.log(sorted_ages_desc);