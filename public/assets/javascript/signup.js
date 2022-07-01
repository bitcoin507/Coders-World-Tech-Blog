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
};

const onSignUp = async (event) => {

  console.log('Loading the Sign Up page...');
  event.preventDefault();

  // Close the Modal
  onCloseModal();

  // Get the form data
  var formData = {
    email: document.getElementById("email").value,
    name: document.getElementById("username").value,
    password: document.getElementById("psw").value
  }

  // validate the form data
  if (formData.email == "" || formData.password == "" || formData.username == "") {
    alert("Please fill in all fields");
    return;
  }

  console.log('Sign Up form data: ', formData);
  if (formData.password != document.getElementById("pswrepeat").value) {
    alert("Passwords do not match");
    return;

    
  }
  
  

  // Send the form data to the server
  console.log(formData)
  const response = await fetch('/api/user/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })

  // Get the response from the server
  console.log('Geting Response')
  //const response = await newUser.json();
  if (response.ok) {
    console.log('User created');
    alert("User created");
    //window.location.href = '/';
  }
  else {
    response.json().then(data => {
      console.log('Error creating user: ', data);
      if (data.errors.length) {
        alert(data.errors[0].message);
      }
    })
    // Redirect to whereever you want them to go once they've signed up
  }
}

const signupButton = document.getElementById('signupButton');
signupButton.addEventListener('click', onSignUp);


