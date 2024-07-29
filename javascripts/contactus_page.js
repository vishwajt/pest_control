// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const formData = new FormData(this);
//     const data = {
//         name: formData.get('name'),
//         email: formData.get('email'),
//         message: formData.get('message')
//     };
    
//     fetch('/send-email', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             alert('Email sent successfully!');
//         } else {
//             alert('Failed to send email.');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('An error occurred.');
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        if (!name || !email || !phone) {
            alert('Please fill out all fields.');
            return;
        }

        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
            name: name,
            email: email,
            phone: phone
        }).then(function (response) {
            alert('Your message has been sent successfully!');
        }, function (error) {
            alert('Failed to send message. Please try again.');
        });
    });
});

function toggleMenu() {
    const menu = document.querySelector('.menu ul');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}
