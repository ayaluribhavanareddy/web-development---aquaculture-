function openContactForm() {
    const contactForm = document.getElementById('contact-form');
    contactForm.style.display = 'block';
}

document.getElementById('contact-form-content').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Handle the form submission (e.g., send data to a server)
    // Display a success message or perform other actions
    // For now, you can alert the form data:
    alert(`Form submitted with:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
});
