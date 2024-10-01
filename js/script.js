// initilizing the variables

let icon = document.getElementById("icon")
let password = document.getElementById("password")

// Adding click function to icon
// to show or hide the text and change icon {  hide to show and show to hide }

icon.addEventListener("click", function () {
    if (password.type == "password") {
        password.type = "text"
        icon.src="img/show.png"
    } else {
        password.type = "password"
         icon.src="img/hide.png"
    }
})