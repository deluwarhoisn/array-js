// let price = 25;
// let comp_price = price;
// price = 20;
// comp_price=12;
// console.log(price);
// console.log(comp_price);

const products = [25,25,25];
const comp_products = [];
for (const product of products){
    comp_products.push(product);
}
comp_products[0]= 15;
products[1]= 20;
// const comp_products = products;


// console.log(products)
// console.log(comp_products)

const numbers = [1,2,3,4];

const new_numbers = Array.from(numbers);

new_numbers.push(8)

console.log(numbers);
console.log(new_numbers);