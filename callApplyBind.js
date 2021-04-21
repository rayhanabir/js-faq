const normalPerson = {
    firstName: 'rahim',
    lastName : 'uddin',
    salary: 15000,
    getFullName: function(){
         
    },
    chargeBill: function(amount){
        // console.log(this);
            this.salary = this.salary - amount;
            return this.salary;
        
    }
    

}
const heroPerson = {
    firstName : 'hero',
    lastName:'balam',
    salary:25000,

}

const friendlyPerson = {
    
    firstName : 'hero',
    lastName:'golam',
    salary:22000,

}
// console.log(normalPerson.chargeBill(1200));
// const heroChargebill = normalPerson.chargeBill.bind(heroPerson);
// heroChargebill(2000);
// heroChargebill(3000);
// console.log(heroPerson.salary);
// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(2000);
// console.log(friendlyPerson.salary);
// friendlyChargeBill(3000);
// console.log(friendlyPerson.salary);
// friendlyChargeBill(2000);
// console.log(friendlyPerson.salary);

//apply "call" method:

normalPerson.chargeBill.call(heroPerson, 3000); //call means comma ;
console.log(heroPerson.salary);

// apply 'apply' method:

normalPerson.chargeBill.apply(friendlyPerson,[3000]); // apply means array;
console.log(friendlyPerson.salary);


