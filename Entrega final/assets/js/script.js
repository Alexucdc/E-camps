document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('sendMessageButton');

    button.addEventListener('click', () => {
        const name = document.getElementById('contactBlockName1').value.trim();
        const email = document.getElementById('contactBlockEmail2').value.trim();
        const phone = document.getElementById('contactBlockPhone3').value.trim();
        const message = document.getElementById('contactBlockMessage4').value.trim();

        
        if (!name) {
            alert('Please enter your name.');
            return;
        }

        if (!email || !validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!message) {
            alert('Please enter your message.');
            return;
        }

        const userMessage = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
        prompt('Review your message:', userMessage);
    });


    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
