var addButton = document.getElementById("add");
//Add event listener to button
addButton.addEventListener("click", addRow); 
var tref =  document.getElementById("dynamic-table");
var count = 1;

//Event handler for button
function addRow(){
    insertRow();
}

//Inserts a row, creates a <tr> element for a table
function insertRow(){
    var newtr = document.createElement("tr");
    //Add row to table 
    tref.appendChild(newtr);
    insertCell(newtr);
}

//Inserts 2 cells every click of a button, creates two <td> elements 
//and inserts them in corresponding <tr> elements respectively
function insertCell(newtr){
    var i;
    for(i=count; i<=(count+1); i++){
        var newtd1 = document.createElement("td");
        newtd1.innerText="Cell"+i;
        newtr.appendChild(newtd1);
    }
   count = i;
}