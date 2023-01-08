<?php

// Check if the form was submitted
if($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Get the form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Validate the form data
  $errors = array();
  if(empty($name)) {
    $errors[] = "Name is required.";
  }
  if(empty($email)) {
    $errors[] = "Email is required.";
  } else {
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $errors[] = "Invalid email format.";
    }
  }
  if(empty($message)) {
    $errors[] = "Message is required.";
  }

  // If there are no errors, send the email
  if(empty($errors)) {
    $to = "denl.gx@gmail.com";
    $subject = "Message from Contact Form";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    mail($to, $subject, $body, $headers);

    // Redirect to the Home page
    header("Location: index.html");
    exit;
  }
}

?>



