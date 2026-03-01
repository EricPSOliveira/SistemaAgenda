<?php 

  include './conexao.php';



    if (isset($_POST['edit_name']) && isset($_POST['edit_data']) && isset($_POST['edit_proc']) && isset($_POST['edit_cel']) && isset($_POST['id'])){
      $edit_name = $_POST['edit_name'];
      $edit_data = $_POST['edit_data'];
      $edit_proc = $_POST['edit_proc'];
      $edit_cel = $_POST['edit_cel'];
      $idea = $_POST['id'];

      $update = $conn->query("UPDATE agenda SET name = '$edit_name', data = '$edit_data', proc = '$edit_proc', cel = '$edit_cel' WHERE id = '$idea'");


    }
  
  ?>