import Person from "./person.js";
import {account}  from "./account.js";
const btnsumit = document.getElementById("btnsumit");
const firstName = document.getElementById("firstName")
const salary = document.getElementById("salary")
const shopping = document.getElementById("shopping");
const sparkonto = document.getElementById("sparkonto");

let budgets = []
function countBudget(e){
if(firstName.value && salary.value && shopping.value && sparkonto.value){
const person = new Person(firstName.value,salary.value,shopping.value,sparkonto.value)
    budgets.push(person)
localStorage.setItem("budgets", JSON.stringify(budgets))
showResult()

}

}

btnsumit.addEventListener("click", countBudget)


function showResult(){
    const results = JSON.parse(localStorage.getItem("budgets"))


    results.forEach((result) => 
    {
        const table = `
        <tr class="">
        <td>${result.firstName} </td>
        <td>${result.salary} SEK</td>
        <td>${result.shopping} SEK</td>
        <td>${result.sparkonto} SEK</td>
    </tr>`
    
    const resultAfterAll = result.salary - result.shopping - result.sparkonto
    const r = document.querySelector(".resultAfterAll");
    
    if(resultAfterAll <= 0  ){
    r.innerHTML = `Du har ${resultAfterAll} i kontot !!!`;
    r.style.color = "red"
    document.getElementById("time").innerHTML = new Date().toLocaleString()

    }
    else{
    r.innerHTML = `Du har ${resultAfterAll} kr kvar i kontot`;
    r.style.color = "green"
    document.getElementById("time").innerHTML = new Date().toLocaleString();
    }
    document.querySelector(".tableBody").innerHTML += table
    }
    )
}





