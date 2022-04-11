<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$asunto = "Consulta pagina sabores";
$consulta = $_POST['consulta'];

$header = 'De: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type_ Text/plain";

$mensaje = "Enviado por "  . $nombre . " \r\n";
$mensaje .= "Mail: " . $email . " \r\n";
$mensaje .= "Telefono " . $telefono . " \r\n";
$mensaje .= "Mensaje: " . $consulta . " \r\n";

$para = 'mguardia@sabores.com.ar';

mail ($para, $asunto, utf8_decode($mensaje), $header);

header ("Location:./html/mensaje.html");

?>

