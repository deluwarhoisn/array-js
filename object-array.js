const numbers = [1,2,43,54,4]
const players = [{},{},{},];
const employees = [
    { name:'Ashik',designation:'content writer', salary: 25000 },
    { name: 'atik', designation: 'Devoloper', salary:29000 },
    { name:'abdulrahim',designation:'Digital markating', salary:21000 },
]
employees[0].name = 'babu'
// console.log(employees[1]);
// console.log(employees[2].designation)

// for(const employee of employees){
//     console.log(employee.salary ,employee.designation);
// }
for (const emp of employees){
    const person =emp;
    const personinfo = person.name + ':' + person.salary;
    console.log(personinfo)
}