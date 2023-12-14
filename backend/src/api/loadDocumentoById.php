<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Incluir el archivo de conexión a la base de datos
include 'database.php';

// Obtener el ID del proyecto desde la URL
$idDocumento = $_GET['idDocumento'];

// Consulta para obtener la información detallada del proyecto
$consultaProyectoDetallado = "SELECT Estado, enRevision, rutaDocumento, gmailPropietario FROM Documentos WHERE idDocumento = $idDocumento";

$resultadoProyectoDetallado = mysqli_query($con, $consultaProyectoDetallado);

if ($resultadoProyectoDetallado) {
    $row = mysqli_fetch_assoc($resultadoProyectoDetallado);
    $Documento = array(
        "idDocumento" => $row["idDocumento"],
        "Estado" => $row["Estado"],
        "enRevision" => $row["enRevision"],
        "rutaDocumento" => $row["rutaDocumento"],
        "gmailPropietario" => $row["gmailPropietario"]
    );
    echo json_encode($Documento);
} else {
    echo json_encode(['error' => 'Error al obtener el proyecto desde la base de datos.']);
}

mysqli_close($con);
?>