function myfunction() {
    // Name validation...
    let name = document.getElementById('user_name').value;
    // let correct_way = /^[A-Za-z]+$/;

    // (name == "") ? alert(` ** Please fill user name!`): (name.length < 3) ? alert(` ** User name must be atlest 3 charactor!`) : (name.length > 20) ? alert(` ** User name must be 20 charactor!`) : (name.match(correct_way)) ? true : alert(` ** Only alphabet are allowed!`);
    // return false;

    // If user name is empty...
    if (name == "") {
        document.getElementById('message').innerHTML = ` ** Please fill user name!`;
        return false;
    }
    // Name length is less than 3 diplay error...
    if (name.length < 3) {
        document.getElementById('message').innerHTML = ` ** User name must be atlest 3 charactor!`;
        return false;
    }
    if (name.length > 20) {
        document.getElementById('message').innerHTML = ` ** User name must be 20 charactor!`;
        return false;
    }

    let correct_way = /^[A-Za-z]+$/;
    //Name enter only cap letter A to Z or small letter a to z..
    if (name.match(correct_way))
        true;
    else {
        document.getElementById('message').innerHTML = ` ** Only alphabet are allowed!`;
        return false;
    }


    // Phone number validation...
    let number = document.getElementById('mobileNumber').value;

    // (number == "") ? alert(` ** Please fill mobile number!`): (isNaN(number)) ? alert(` ** Enter only number!`) : (number.length < 10) ? alert(` ** Mobile number should be 10 digit!`) : (number.length > 10) ? alert(` ** Mobile number should be 10 digit!`) : (number.charAt(0) != 9 && number.charAt(0) != 8 && number.charAt(0) != 7 && number.charAt(0) != 6) ? alert(` ** Mobile number should be start with 9, 8, 7 or 6!`) : console.log('Name :', name, 'Number :', number);
    // return false;

    // If user input Empty number...
    if (number == "") {
        document.getElementById('message1').innerHTML = ` ** Please fill mobile number!`;
        return false;
    }
    if (isNaN(number)) {
        document.getElementById('message1').innerHTML = ` ** Enter only number!`;
        return false;
    }
    if (number.length < 10) {
        document.getElementById('message1').innerHTML = ` ** Mobile number should be 10 digit!`;
        return false;
    }
    if (number.length > 10) {
        document.getElementById('message1').innerHTML = ` ** Mobile number should be 10 digit!`;
        return false;
    }
    if (number.charAt(0) != 9 && number.charAt(0) != 8 && number.charAt(0) != 7 && number.charAt(0) != 6) {
        document.getElementById('message1').innerHTML = ` ** Mobile number should be start with 9, 8, 7 or 6!`;
        return false;
    } 
}