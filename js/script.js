$(onReady);
//This will run listed functions when the DOM is ready
function onReady() {
    $('#submit').on('click', submitInfo)
}


//This function will run when the submit bitton is clicked.
function submitInfo() {
//Defines the variable data that will be listed to the DOM
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let idNumber = $('#idNumber').val();
    let title = $('#title').val();
    let annualSalary = $('#annualSalary').val();
    let monthlyTotal = annualSalary / 12;

    //Appends the HTML to add a table row with the entered input data and displays it on the DOM. Also adds a delete button to the row.
    $('#info').append(
        `<tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${idNumber}</td>
        <td>${title}</td>
        <td>${annualSalary}</td>
        <td><button id="deleteButton">Delete</button></td>
        </tr>`)
        $('#deleteButton').css('text-align', 'center');
//Empties the input fields.
    $('#firstName').val("");
    $('#lastName').val("");
    $('#idNumber').val("");
    $('#title').val("");
    $('#annualSalary').val("");


}



