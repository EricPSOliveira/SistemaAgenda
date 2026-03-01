



<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet">

  <link href="  https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel=" stylesheet">

    <link rel="shortcut icon" href="../logo.jpg">

  <link rel="stylesheet" href="../styles/reset.css">
  <link rel="stylesheet" href="../styles/root.css">
  <link rel="stylesheet" href="./css/login.css">
  <link rel="stylesheet" href="./css/mobile.css">
  <title>Agenda</title>
</head>

<body>
<?php


include '../php/conexao.php';
session_start();




if (isset($_POST['login']) && isset($_POST['senha'])) {

  $email = filter_var(trim($_POST['login']), FILTER_SANITIZE_EMAIL);;
  $senha = $_POST['senha'];

  $jen = $conn->query("SELECT * FROM logn WHERE email = '$email' and BINARY senha = '$senha' ");


  if (mysqli_num_rows($jen) < 1) {


 echo  '
     <div class="nopassword">
      <p>Email ou senha invalidos.</p>
      </div> ';

     



      if(isset($echo)){
        unsettime();
      }



  } else {
    $_SESSION['email'] = $email;
    $_SESSION['senha'] = $senha;
    header(('Location: ../index.php'));
  }
}

  function unsettime()
  {
    sleep(2);
    unset($_SESSION['email']);
    unset($_SESSION['senha']);
    header(('Location: ./login.php'));
    exit;
  }

?>


  <div class="container">
    <div class="login">
      <p>LOGIN</p>
      <form action method="post" class="publish">
        <div class="Login">
          <input type="text" class="Login" title="login" name="login" id="login" required autofocus autocomplete="false">
          <label for='login'>Login</label>
        </div>
        <div class="Senha">
          <input type="password" class="Senha" title="login" name="senha" id="senha" required>
          <label for='senha'>Senha</label>
        </div>
        <div class="submit">
          <button type="submit" class="Sbmit" title="login" id="submit" value="Entrar">enviar</button>
        </div>
      </form>
    </div>

  </div>
</body>

</html>