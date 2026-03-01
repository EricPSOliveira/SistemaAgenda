<?php
    include './conexao.php';

    var_dump($_POST);


      if(isset($_POST['name_input']) && isset($_POST['data_input']) && isset($_POST['proc_input']) && isset($_POST['cel_input'])){
          $name = $conn->real_escape_string($_POST['name_input']);
          $data = $conn->real_escape_string($_POST['data_input']);
          $proc = $conn->real_escape_string($_POST['proc_input']);
          $cel = $conn->real_escape_string($_POST['cel_input']);


          $entrar = $conn->query("INSERT INTO agenda (name, data, proc, cel) VALUES ('$name', '$data', '$proc', '$cel')");
          echo '<script>window.alert("deu certo"); console.log("deu certo")</script>';
          header("Location: ../index.php");
     
          
      }

      


?>
