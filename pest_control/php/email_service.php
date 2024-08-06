<!-- The below api key is from the ZeroBounce service
    The credentials used for the this account is:
        vishwajitdalve@gmail.com and password ending with Z -->

<?php
function validateEmailWithAPI($email) {
    $apiKey = '1461be74d66a40b2ad14dbf9ce5357cd';
    $url = 'https://api.zerobounce.net/v2/validate?api_key=' . urlencode($apiKey) . '&email=' . urlencode($email);

    $response = file_get_contents($url);

    if ($response === FALSE) {
        return false;
    }

    $result = json_decode($response, true);

    return isset($result['status']) && $result['status'] === 'valid';
}

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

    // Validate email with an external API
    if (!validateEmailWithAPI($email)) {
        echo "<script>alert('Invalid or spam Email ID Entered'); window.history.back();</script>";
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
