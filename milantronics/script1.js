function showAlert() {
    alert("Your contact information has been submitted. Thank you!");
}

document.getElementById("subscribe-checkbox").addEventListener("click", function () {
    const checkbox = document.getElementById("subscribe-checkbox");
    const checkboxMark = document.getElementById("checkbox-mark");
    
    if (checkbox.checked) {
        checkboxMark.style.backgroundColor = "#fff"; /* White */
    } else {
        checkboxMark.style.backgroundColor = "#000080"; /* Dark Blue */
    }
})
