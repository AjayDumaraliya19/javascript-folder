// Form validation in javascript
var tabledata = []; // Array to store the tabel data

function formValidation() {
    // declared all variable and get value 
    let firstName = document.forms['myform']['fname'].value;
    let lastName = document.forms['myform']['lname'].value;
    let phone = document.forms['myform']['fphone'].value;
    let dob = document.forms['myform']['dob'].value;
    let email = document.forms['myform']['femail'].value;
    let gender = document.querySelector('input[name="gender"]:checked'); // Cheack value of gender and get value in gender valriable
    let address = document.forms['myform']['faddress'].value;

    // Set error variable
    let firstNameError = document.getElementById(`firstNameError`);
    let lastNameError = document.getElementById(`lastNameError`);
    let phoneError = document.getElementById(`phoneError`);
    let dobError = document.getElementById(`dobError`);
    let emailError = document.getElementById(`emailError`);
    let genderError = document.getElementById(`genderError`); // Check error in the input usig try, catch and throw function
    let addressError = document.getElementById(`addressError`);

    try {
        firstNameError.textContent = '';
        lastNameError.textContent = '';
        phoneError.textContent = '';
        dobError.textContent = '';
        emailError.textContent = '';
        genderError.textContent = '';
        addressError.textContent = '';

        // First name validation
        if (firstName === '') throw ` ** First name can't be empty!`;
        if (!isNaN(firstName)) throw ` ** First Name can't be any number!`;
        if (firstName.length < 3) throw ` ** First Name must be at least 3 charactor!`;
        if (firstName.length > 10) throw ` ** First Name must be less than 10 character!`;
        if (!/^[A-Za-z]+$/.test(firstName)) throw ` ** Please enter valid first name, not use number!`;

        // Last name validation
        if (lastName === '') throw ` ** Last name can't be empty!`;
        if (!isNaN(lastName)) throw ` ** Last Name can't be any number!`;
        if (lastName.length < 3) throw ` ** Last Name must be at least 3 charactor!`;
        if (lastName.length > 20) throw ` ** Last Name must be less than 20 character!`;
        if (!/^[A-Za-z]+$/.test(lastName)) throw ` ** Please enter valid last name, not use number!`;

        // Phone number validation
        if (phone === '') throw ` ** Phone number can't be empty!`;
        if (isNaN(phone)) throw ` ** Enter only number!`;
        if (phone.length !== 10) throw ` ** Phone number must be 10 digit!`;
        if (![9, 8, 7, 6].includes(Number(phone.charAt(0)))) throw ` ** Mobile number should start with 9, 8, 7, or 6!`;

        // Date of birth validation
        if (dob === '') throw ` ** Please enter date of birth!`;

        // Email validation
        if (email === '') throw ` ** Email can't be empty!`;
        if (email.indexOf(`@`) <= 0) throw ` ** Invalid Email!`;
        if ((email.charAt(email.length - 4) != `.`) && (email.charAt(email.length - 3) != `.`)) throw ` ** Please enter valid email address like "abcd@gmail.com"!`;

        // Gender validation
        if (!gender || gender.value === '') throw ` ** Please select valid gender!`;

        // Address validation
        if (address === '') throw ` ** Address can't be empty!`;

        // Create an object for the input values
        var dataObj = {
            name: firstName.concat(" ", lastName),
            phone: phone,
            dob: dob,
            email: email,
            gender: gender.value,
            address: address
        };

        // Push the object into the tabledata array
        tabledata.push(dataObj);
        // Clear the form inputs
        document.forms['myform'].reset();
        // Clear the table
        clearTable();
        // Re-render the table
        renderTable(tabledata);

    } catch (err) {
        switch (err) {
            // Check case for First name
            case ` ** First name can't be empty!`:
                firstNameError.textContent = err;
                break;
            case ` ** First Name can't be any number!`:
                firstNameError.textContent = err;
                break;
            case ` ** First Name must be at least 3 charactor!`:
                firstNameError.textContent = err;
                break;
            case ` ** First Name must be less than 10 character!`:
                firstNameError.textContent = err;
                break;
            case ` ** Please enter valid first name, not use number!`:
                firstNameError.textContent = err;
                break;
                // Check case for last name
            case ` ** Last name can't be empty!`:
                lastNameError.textContent = err;
                break;
            case ` ** Last Name can't be any number!`:
                lastNameError.textContent = err;
                break;
            case ` ** Last Name must be at least 3 charactor!`:
                lastNameError.textContent = err;
                break;
            case ` ** Last Name must be less than 20 character!`:
                lastNameError.textContent = err;
                break;
            case ` ** Please enter valid last name, not use number!`:
                lastNameError.textContent = err;
                break;
                //Check case for phone number
            case ` ** Phone number can't be empty!`:
                phoneError.textContent = err;
                break;
            case ` ** Enter only number!`:
                phoneError.textContent = err;
                break;
            case ` ** Phone number must be 10 digit!`:
                phoneError.textContent = err;
                break;
            case ` ** Mobile number should start with 9, 8, 7, or 6!`:
                phoneError.textContent = err;
                break;
                // Check case for Date of birth
            case ` ** Please enter date of birth!`:
                dobError.textContent = err;
                break;
                // Check case for Email
            case ` ** Email can't be empty!`:
                emailError.textContent = err;
                break;
            case ` ** Invalid Email!`:
                emailError.textContent = err;
                break;
            case ` ** Please enter valid email address like "abcd@gmail.com"!`:
                emailError.textContent = err;
                break;
                // Check case for Gender selecction
            case ` ** Please select valid gender!`:
                genderError.textContent = err;
                break;
                // Check case for address
            case ` ** Address can't be empty!`:
                addressError.textContent = err;
                break;
            default:
                console.log(err);
        }
    }
    return false; // Prevent form submission
}
// Tables values clear after submited form and enter the new value in the table befor the table value clear
function clearTable() {
    var dataTable = document.getElementById("dataTable");
    while (dataTable.rows.length > 1) {
        dataTable.deleteRow(1);
    }
    var maleNamesTable = document.getElementById("maleNamesTable");
    while (maleNamesTable.rows.length > 1) {
        maleNamesTable.deleteRow(1);
    }
}

function renderTable(data) {
    var dataTable = document.getElementById("dataTable");
    var maleNamesTable = document.getElementById("maleNamesTable");
    data.map(function (item) {
        var row = dataTable.insertRow(-1);
        var nameCell = row.insertCell(0);
        nameCell.innerHTML = item.name;
        var phoneCell = row.insertCell(1);
        phoneCell.innerHTML = item.phone;
        var dobCell = row.insertCell(2);
        dobCell.innerHTML = item.dob;
        var emailCell = row.insertCell(3);
        emailCell.innerHTML = item.email;
        var genderCell = row.insertCell(4);
        genderCell.innerHTML = item.gender;
        var addressCell = row.insertCell(5);
        addressCell.innerHTML = item.address;
        if (item.gender === `male`) {
            var maleRow = maleNamesTable.insertRow(-1);
            var maleNameCell = maleRow.insertCell(0);
            maleNameCell.innerHTML = item.name;
            var malePhoneCell = maleRow.insertCell(1);
            malePhoneCell.innerHTML = item.phone;
            var maleEmailCell = maleRow.insertCell(2);
            maleEmailCell.innerHTML = item.email;
        }
    });
}

// Retrieve the form element
const form = document.forms.myform;

// Add event listener for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve form data
    const firstName = form.fname.value;
    const lastName = form.lname.value;
    const phoneNumber = form.fphone.value;
    const dateOfBirth = form.dob.value;
    const email = form.femail.value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const address = form.faddress.value;
    
    // Create an object to store the form data
    const formData = {
        firstName,
        lastName,
        phoneNumber,
        dateOfBirth,
        email,
        gender,
        address
    };
    
    // Store the form data in local storage
    localStorage.setItem("formData", JSON.stringify(formData));
    
    // Reset the form
    form.reset();
});
// Retrieve the stored form data from local storage
const storedFormData = localStorage.getItem("formData");

if (storedFormData) {
    const formData = JSON.parse(storedFormData);
    const dataTable = document.getElementById("dataTable");
    
    // Create a new row in the table
    const newRow = dataTable.insertRow();
    
    // Insert the form data into the table cells
    newRow.insertCell().textContent = formData.firstName + " " + formData.lastName;
    newRow.insertCell().textContent = formData.phoneNumber;
    newRow.insertCell().textContent = formData.dateOfBirth;
    newRow.insertCell().textContent = formData.email;
    newRow.insertCell().textContent = formData.gender;
    newRow.insertCell().textContent = formData.address;
}
