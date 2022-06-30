// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function onCloseModal() {
  modal.style.display = "none";
}

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}

function onSignUp() {

  // Close the Modal
  onCloseModal();

  // Get the form data
  var formData = {
    email: document.getElementById("email").value,
    psw: document.getElementById("psw").value,
    pswrepeat: document.getElementById("pswrepeat").value
  }

  // validate the form data
  if (formData.email == "" || formData.psw == "" || formData.pswrepeat == "") {
    alert("Please fill in all fields");
    return;
  }

  if (formData.psw != formData.pswrepeat) {
    alert("Passwords do not match");
    return;
  }

  // Send the form data to the server
  const newUser = await fetch('/signUp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })

  // Get the response from the server
  const response = await newUser.json();
  console.log(response);
  if (response.error) {
    alert(response.error);
  }
  else {
    console.log('User created');

    // Redirect to whereever you want them to go once they've signed up
    window.location.href = '/';
  }
}
