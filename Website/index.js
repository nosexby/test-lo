const userEmail = document.getElementById("user-email");
const userPass = document.getElementById("user-password");
const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", () => {
  if (userEmail.value == "" || userPass.value == "") {
    alert("Plz Fill All Fields");
  } else {
    var email = userEmail.value;
    var pass = userPass.value;

    var data = { email, pass };

    var options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    };

    fetch("/login", options)
      .then(res => {
        return res.text();
      })
      .then(data => document.write(data));
  }
});
