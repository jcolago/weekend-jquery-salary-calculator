//This defines totalSpent to be used in submitInfo function
let totalSpent = 0;

$(onReady);
//This will run listed functions when the DOM is ready
function onReady() {

    //This will run the submitInfo function when submit button is clicked.
    $('#submit').on('click', submitInfo);

    //This will delete an employee from the table if the delete button is clicked.
    $('#deleteButton').on('click', deleteEmployee);

    //This listend on the info id for a click event on the delete button id. This will then run deleteEmployee function.
    $('#info').on('click', '#deleteButton', deleteEmployee);
}




//This function will run when the submit bitton is clicked.
function submitInfo() {


    //Defines the variable data that will be listed to the DOM
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const idNumber = $('#idNumber').val();
    const title = $('#title').val();
    const annualSalary = $('#annualSalary').val();
    const monthlySpent = annualSalary / 12;
    
    //Guard statement that alerts the user that an input was left blank.
    if(!firstName || !lastName || !idNumber || !title || !annualSalary){
        alert('Please fill out all fields with proper values.')
        return;
    }


    //Appends the HTML to add a table row with the entered input data and displays it on the DOM. Also adds a delete button to the row.
    $('#info').append(
        `<tr id="employee">
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${title}</td>
        <td class="salary">${annualSalary}</td>
        <td><button id="deleteButton">Delete</button></td>
        </tr>`)
    $('#deleteButton').css('text-align', 'center');
    //Empties the input fields.
    $('#firstName').val("");
    $('#lastName').val("");
    $('#idNumber').val("");
    $('#title').val("");
    $('#annualSalary').val("");

    //This takes the monthlySpent and adds it to the total spent. This also displays the total spending for the month on the DOM
    totalSpent += Number(monthlySpent);
    $('#monthlyTotal').text(totalSpent.toFixed(2));
    //If totalSpent is over $20,000, the background will turn red.
    if (totalSpent >= 20000) {
        $('#monthlyTotal').css('background-color', 'red');
    }

}

//This will run when the delete button is clicked
function deleteEmployee(event) {

//This section will calculate the monthly cost of an employee and then subract that amount from the total monthly costs. It will then update the DOM with the new total
    const employeeCost = Number($(event.target).closest("tr").find("td.salary").text()/12);
     totalSpent -= employeeCost;
    $('#monthlyTotal').text(totalSpent.toFixed(2))
    //This will delete the employee information row
    $(event.target).closest('#employee').remove();
    //Changes the backgroung of the total monthly cost field to white while less than $20000.
    if(totalSpent <= 20000){
    $('#monthlyTotal').css('background-color', 'white');  
    }
}



