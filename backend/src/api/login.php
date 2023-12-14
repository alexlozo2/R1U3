<?php
// Incluir el archivo de conexión a la base de datos
include 'database.php';

// Recibir datos del formulario de inicio de sesión
$data = json_decode(file_get_contents("php://input"));

if ($data && isset($data->nombreUsuario) && isset($data->contrasena)) {
    $nombreUsuario = mysqli_real_escape_string($con, $data->nombreUsuario);
    $contrasena = mysqli_real_escape_string($con, $data->contrasena);

    // Consulta para verificar las credenciales del usuario
    $consultaUsuario = "SELECT id, nombreUsuario FROM Usuarios WHERE nombreUsuario = '$nombreUsuario' AND contrasena = '$contrasena'";
    $resultadoUsuario = mysqli_query($con, $consultaUsuario);

    if ($resultadoUsuario && mysqli_num_rows($resultadoUsuario) > 0) {
        // Usuario autenticado correctamente
        $usuario = mysqli_fetch_assoc($resultadoUsuario);
        echo json_encode(['autenticado' => true, 'usuario' => $usuario]);
    } else {
        // Usuario no autenticado
        echo json_encode(['autenticado' => false, 'mensaje' => 'Credenciales incorrectas']);
    }
} else {
    echo json_encode(['error' => 'Datos de inicio de sesión no proporcionados correctamente']);
}

mysqli_close($con);
?>