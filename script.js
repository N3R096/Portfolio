
  const navHeight = 120; // Change this to match your actual header height

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetSection = document.querySelector(this.getAttribute('href'));
      if (targetSection) {
        const topOffset = targetSection.getBoundingClientRect().top;
        window.scrollTo({
          top: topOffset + window.scrollY - navHeight,
          behavior: 'smooth'
        });
      }
    });
  });


  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Get form input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    // Create a JSON object
    const formData = {
      name: name,
      email: email
    };
  
    // Convert the JSON object to a query string
    const queryString = Object.keys(formData).map(key => key + '=' + encodeURIComponent(formData[key])).join('&');
  
    // Redirect to submit.html with the query string
    window.location.href = `submit.html?${queryString}`;
  });
  
  // Get the query string parameters
const urlParams = new URLSearchParams(window.location.search);

// Get the name and email values from the query string
const name = urlParams.get('name');
const email = urlParams.get('email');

// Display the submitted data on the submit.html page
const submittedNameElement = document.getElementById("submittedName");
const submittedEmailElement = document.getElementById("submittedEmail");

submittedNameElement.textContent = name;
submittedEmailElement.textContent = email;