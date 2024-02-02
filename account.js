class Account{

    constructor(accountNumber,balance,accountOwner, d){
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.accountOwner = accountOwner;
        this.d = new Date().toLocaleDateString()
    }
    getBalance(balance){
        const dollarSing = `$`
        return console.log(`Du har ${this.balance } ${dollarSing} total in your bank account`)
    }
    
    getAccountOwner(){
        console.log(`The owner is ${this.accountOwner}`)
    }

}
const account = new Account(20003333,50000, "Ahmed Muhammed")

export {account};