//your JS code here. If required.
function submitForm() {
      var firstName = document.getElementById('firstname').value;
      var lastName = document.getElementById('lastname').value;
      var phoneNumber = document.getElementById('phNumber').value;
      var email = document.getElementById('email').value;

      var result = "First Name: " + firstName + "\nLast Name: " + lastName + "\nPh Number: " + phoneNumber + "\nEmail ID: " + email;

      alert(result);
}