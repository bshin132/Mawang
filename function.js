document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send("service_1n3yfhi", "template_3c359v8", params)
      .then(function (res) {
        alert("Message sent successfully! Status: " + res.status);
      })
      .catch(function (err) {
        alert("Failed to send message: " + err);
      });
  });
