<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);

    // Email details
    $to = 'contactus@rs-pestcontrolexpert.in';
    $subject = 'User Callback Details';
    $message = "Name: $name\nEmail: $email\nPhone: $phone";
    $headers = "From: $email\r\n";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        $response = "Thank you for contacting us, $name. We will get back to you shortly.";
    } else {
        $response = "Sorry, there was an error sending your message. Please try again later.";
    }
    echo "<script type='text/javascript'>alert('$response');window.location.href='../../index.html';</script>";
} else {
    echo "<script type='text/javascript'>alert('Invalid request method.');window.location.href='../../index.html';</script>";
}
?>
