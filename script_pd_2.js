"use strict";

let btn = document.getElementById("btn");
let pre = document.getElementById("pre");
let table = document.getElementById("table");
let input = document.getElementById("liczba").focus();

let prevIpt = 0;
btn.addEventListener("click", createMultiplicTable);
document.addEventListener("keyup",(e)=>{
    if(e.key === "Enter"){
        createMultiplicTable();
    }
})

function createMultiplicTable() {


   
    let input = Number(document.getElementById("liczba").value);
    if (prevIpt !== input) {
        
        
        if (100 < input || input <= 0) {
            pre.innerText = "Liczba nie jest z przedziału (0,100>";
        } else if (Number.isInteger(input) === false) {
            pre.innerText = " Liczba nie jest całkowita";
        } else {

            let napis = "";

            for (let i = 1; i <= input; i++) {
                napis+="<tr>"
                for (let j = 1; j <= input; j++) {
                    napis+="<td>"+i*j+"</td>";
                }
                napis+="</tr>";
            }
            table.innerHTML = napis;

            prevIpt = input;
        }
    }

}