const normalPerson = {
    firstName: 'rahim',
    lastName : 'uddin',
    salary: 15000,
    getFullName: function(){
         
    },
    chargeBill: function(amount){
            this.salary = this.salary - amount;
            return this.salary;
    }
    

}
normalPerson.chargeBill(2000);
console.log(normalPerson.salary);
