document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve input values
    var name = document.getElementById("name").value;
    var regNumber = document.getElementById("registration-number").value;
  
    // Perform validation or further processing as needed
  
    // Redirect to SEKU page after successful login
    window.location.href = "seku.html";
  });
  