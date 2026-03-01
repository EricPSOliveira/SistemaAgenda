<?php
include 'conexao.php';

if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $remove = $conn->prepare("DELETE FROM agenda WHERE ID = ?");
    $remove->bind_param("i", $id); // "i" para indicar que $id é um inteiro

   $pronto = $remove->execute();

    $remove->close();
} else {
    echo "ID não fornecido.";
}

header("Location: ../index.php?sucess");
exit();
