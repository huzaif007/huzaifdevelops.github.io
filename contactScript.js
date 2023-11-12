document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // You can add your logic here to handle form submission, e.g., send data to a server

    // alert('Message sent successfully!');
    // Optionally, you can redirect the user to a thank you page or clear the form fields
    window.location.href = 'contactthank-you.html';
    // document.getElementById('contactForm').reset();
});
