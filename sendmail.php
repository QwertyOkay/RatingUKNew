<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exeption.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('en', 'phpmailer/language/');
$mail->IsHTML(true);

// From who the mail 
$mail->setFrom('thetop2022rating@gmail.com', 'Contact Us Form');
// Sending to 
$mail->addAddress('zadarmaguide@gmail.com');
// Mail subject
$mail->Subject = 'New mail megajokercasino.com';


// Mail body
$body = '<h1> There is a new mail from Mega Joker Casino Form</h1>';

if(trim(!empty($_POST['name']))){
   $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
}

if (trim(!empty($_POST['email']))){
    $body.='<p><strong>Email:</strong> '.$_POST['email'].'</p>';
}

if (trim(!empty($_POST['message']))){
    $body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
}
    
$mail->Body = $body;

//Sending

if (!$mail->send()) {
    $message = 'Error';
} else {
    $message = 'Thank you!';
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);

?>