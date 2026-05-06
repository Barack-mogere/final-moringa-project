if (document.getElementById("bookingform")) {
  document
    .getElementById("bookingform")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      let name = document.getElementById("name").value;
      let phone = document.getElementById("phone").value;
      let error = document.getElementById("error");
      let email = document.getElementById("email").value;

      if (name === "" || phone === "" || email === "") {
        error.innerText = "Please fill all fields";
        error.style.color = "red";
        return;
      }

      if (phone.length < 10) {
        error.innerText = "Enter a valid phone number";
        error.style.color = "red";
        return;
      }

      error.innerText =
        "Application Successful!. Check your email for the next steps";
      error.style.color = "green";
    });
}
