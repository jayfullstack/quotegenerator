// Go to firebase console. Sign in with google.
// Create a new project & read documentation
// All values in the "config" object have to be filled out
// replace "<yourprojectname>" with the name of your project

$(document).ready(function() {

    // Firebase Form Handler
    // Initialize Firebase
    var config = {
        apiKey: "",
        authDomain: "<yourprojectname>.firebaseapp.com",
        databaseURL: "https://<yourprojectname>.firebaseio.com",
        projectId: "<yourprojectname>",
        storageBucket: "",
        messagingSenderId: "",
    };
    firebase.initializeApp(config);

    // $("#firebase_submit") = submit button reference
    $("#firebase_submit").on('click', function(event) {
        // Get a reference to the database service
        event.preventDefault();
        data();
    });

    function data() {
        // Searches the DOM by input field
        var user_first_name = document.getElementById('first_name').value;
        var user_last_name = document.getElementById('last_name').value;
        var user_email = document.getElementById('email_address').value;
        var user_website = document.getElementById('website_type').value;
        var user_additional = document.getElementById('additional_info').value;

        var user_data = {
            First_Name: user_first_name,
            Last_Name: user_last_name,
            Email: user_email,
            Website_Type: user_website,
            Additional: user_additional
        }
        var database = firebase.database();
        FormSubmit(database, user_data);
    }
    // Form Submit
    function FormSubmit(database, user_data) {
        // Sending The Form Inputs to the db
        database.ref('<rootfoldername>').push(user_data);
    }
});