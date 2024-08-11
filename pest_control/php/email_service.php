<?php

$commonDomains = [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'aol.com', 'icloud.com',
    'rediffmail.com', 'protonmail.com', 'zoho.com', 'yandex.com', 'mail.com',
    'gmail.in', 'yahoo.in', 'outlook.in', 'hotmail.in', 'aol.in', 'icloud.in',
    'rediffmail.in', 'protonmail.in', 'zoho.in', 'yandex.in', 'mail.in',
];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $pest = empty(htmlspecialchars($_POST['pestType'])) ? 'NA' : htmlspecialchars($_POST['pestType']);

    // Simple regex to validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Invalid Email ID Format'); window.history.back();</script>";
        exit;
    }

    // Extract domain from email
    $domain = substr(strrchr($email, "@"), 1);

    // Check if domain is in the list of common domains
    if (!in_array($domain, $commonDomains)) {
        echo "<script>alert('Email Id is Invalid'); window.history.back();</script>";
        exit;
    }

    // Email details
    $to = 'contactus@rs-pestcontrolexpert.in';
    $subject = 'User Callback Details';
    $message = "Name: $name\nEmail: $email\nPhone: $phone\nPest Type: $pest";
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
