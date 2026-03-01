<?php

include './php/conexao.php';
session_start();


if ((!isset($_SESSION['email']) == true) and (!isset($_SESSION['senha']) == true)) {
  header('Location: ./login/login.php');
}
$log = $_SESSION['email'];



if (isset($_POST['name_input']) && isset($_POST['data_input']) && isset($_POST['proc_input']) && isset($_POST['cel_input'])) {
  $name = $conn->real_escape_string($_POST['name_input']);
  $data = $conn->real_escape_string($_POST['data_input']);
  $proc = $conn->real_escape_string($_POST['proc_input']);
  $cel = $conn->real_escape_string($_POST['cel_input']);


  $entrar = $conn->query("INSERT INTO agenda (name, data, proc, cel) VALUES ('$name', '$data', '$proc', '$cel')");

  if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
  }
}
?>



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
  <link rel="shortcut icon" href="logo.jpg">


  <link rel="stylesheet" href="./styles/reset.css">
  <link rel="stylesheet" href="./styles/root.css">
  <link rel="stylesheet" href="./styles/aside.css">
  <link rel="stylesheet" href="./styles/agenda_em_si.css">
  <link rel="stylesheet" href="./styles/create.css">
  <link rel="stylesheet" href="./styles/filter.css">
  <link rel="stylesheet" href="./styles/search.css">
  <link rel="stylesheet" href="./styles/edit.css">
  <link rel="stylesheet" href="./styles/theme.css">
  <link rel="stylesheet" href="./styles/mobile/mobile.css">
  <title>Agenda</title>
</head>

<body>


  <div class="menu_mobile">
    <i class="bx bx-menu"></i>
  </div>

  <aside>
    <div class="w">
      <div class="slogan">

      </div>
      <div class="sector">
        <div class="create">
          <div class="crate">
            <i class="bx bxs-plus-square"></i>
            <p> Create</p>
          </div>
        </div>
        <div class="limbo">
          <div class="prazo">
            <i class="bx bx-menu"></i>
            <p> Limbo</p>
          </div>
        </div>
        <div class="limbo">
          <div class="prazo">
            <i class="bx bx-menu"></i>
            <p> Hoje</p>
          </div>
        </div>
        <div class="filter">
          <div class="filer">
            <i class="bx bx-menu"></i>
            <p>Filter</p>
          </div>
          <div class="filtter_mob">
            <div class="namer_mob"><a href="index.php?nome=nome">Nome</a></div>
            <div class="dater_mob"><a href="index.php?nome=data">Data</a></div>
            <div class="procquer_mob"><a href="index.php?nome=proc">Procedimento</a></div>
          </div>
        </div>
        <div class="icons">
          <div class="pesquisar">
            <i class="bx bx-search" id="menu_search"></i>
          </div>
          <div class="theme">
            <div class="light">
              <i class='bx bxs-sun'></i>
            </div>
            <div class="dark">
              <i class='bx bxs-moon'></i>
            </div>
          </div>
        </div>
        <div class="sair">
          <div class="quit">
            <p><a href="./php/sair.php">Sair</a></p>
          </div>
        </div>


      </div>
    </div>
  </aside>

  <div class="container">
    <div class="container_sector">
      <?php
      if (isset($_GET['nome']) && !empty($_GET['nome'])) {
        if ($_GET['nome'] == 'nome') {
          $itens = $conn->query("SELECT * FROM agenda  WHERE data >= CURDATE() ORDER BY name ASC ");
        } elseif ($_GET['nome'] == 'data') {
          $itens = $conn->query("SELECT * FROM agenda WHERE data >= CURDATE() ORDER BY data ASC ");
        } elseif ($_GET['nome'] == 'proc') {
          $itens = $conn->query("SELECT * FROM agenda  WHERE data >= CURDATE() ORDER BY proc ASC ");
        }
      } else {
        $itens = $conn->query("SELECT * FROM agenda WHERE data >= CURDATE() ORDER BY data ASC ");
      }



      if ($itens->num_rows > 0) {
        while ($jen = $itens->fetch_assoc()) {
          $id = $jen['ID'];
          $name = $jen['name'];
          $data =  $jen['data'];
          $money = 'R$ 300,00';
          $formatar = date('d/m/Y', strtotime($data));
          $proc = $jen['proc'];
          $cel = $jen['cel'];
      ?>







          <div class="elemento">
            <div class="delete">
              <a href="./php/excluir.php?id=<?php echo $id ?>">X</a>
            </div>
            <div class="inside_content">
              <div class="name">
                <p><?php echo $name; ?></p>
              </div>

              <div class="data">
                <p><?php echo $money; ?></p>
              </div>
             
              <div class="data">
                <p><?php echo $formatar; ?></p>
              </div>

              <div class="procedimento">
                <p><?php echo $proc; ?></p>
              </div>

              <div class="tel">
                <p><?php echo $cel; ?></p>
              </div>

              <div class="Edit">
                <i class='bx bx-edit'><input type="hidden" value="<?php echo $id; ?>"></i>
              </div>

            </div>
          </div>

      <?php }
      } ?>
    </div>



    <div class="container_limbo">
      <?php
      $realdata = date('d/m/Y');


      if (isset($_GET['nome']) && !empty($_GET['nome'])) {
        if ($_GET['nome'] == 'nome') {
          $itens = $conn->query("SELECT * FROM agenda  WHERE data < CURDATE() ORDER BY name ASC ");
        } elseif ($_GET['nome'] == 'data') {
          $itens = $conn->query("SELECT * FROM agenda WHERE data < CURDATE() ORDER BY data ASC ");
        } elseif ($_GET['nome'] == 'proc') {
          $itens = $conn->query("SELECT * FROM agenda WHERE data < CURDATE() ORDER BY proc ASC ");
        }
      } else {
        $itens = $conn->query("SELECT * FROM agenda  WHERE data < CURDATE()ORDER BY data ASC ");
      }



      if ($itens->num_rows > 0) {
        while ($jen = $itens->fetch_assoc()) {
          $id = $jen['ID'];
          $name = $jen['name'];
          $data =  $jen['data'];
          $price = 'R$ 300,00';
          $formatar = date('d/m/Y', strtotime($data));
          $proc = $jen['proc'];
          $cel = $jen['cel'];
      ?>







          <div class="elemento">
            <div class="delete">
              <a href="./php/excluirLimbo.php?id=<?php echo $id ?>">X</a>
            </div>
            <div class="inside_content">
              <div class="name">
                <p><?php echo $name; ?></p>
              </div>

              <div class="price">
                <p><?php echo $price; ?></p>
              </div>

              <div class="data">
                <p><?php echo $formatar; ?></p>
              </div>

              <div class="procedimento">
                <p><?php echo $proc; ?></p>
              </div>

              <div class="tel">
                <p><?php echo $cel; ?></p>
              </div>

              <div class="Edit">
                <i class='bx bx-edit'><input type="hidden" value="<?php echo $id; ?>"></i>
              </div>

            </div>
          </div>

      <?php }
      } ?>

    </div>

  </div>



  <div class="edit">
    <form method="post" action="./php/editar.php" class="edit_form">


      <input type="hidden" name="id" class="id" value="aa">
      <div class="edit_div">
        <input type="text" name="edit_name" id="edit_name" class="edit_name">
        <label for="edit_name"></label></input>
      </div>

      <div class="edit_div">
        <input type="text" name="edit_price" id="edit_price" class="edit_price">
        <label for="edit_price"></label></input>
      </div>

      <div class="edit_div">
        <input type="date" name="edit_data" id="edit_data" class="edit_data" value="">
        <label for="edit_data"></label></input>
      </div>

      <div class="edit_div">
        <input type="text" name="edit_proc" id="edit_proc" class="edit_proc">
        <label for="edit_proc"></label></input>
      </div>

      <div class="edit_div">
        <input type="text" name="edit_cel" maxlength="15" id="edit_cel" class="edit_cel">
        <label for="edit_cel"></label></input>
      </div>

      <div class="edit_submit">
        <input type="submit" name="edit_submit" id="edit_submit" class="edit_submit">
        <label for="edit_submit"></label></input>
      </div>



    </form>
  </div>

  <div class="filtter">
    <div class="namer"><a href="index.php?nome=nome">Nome</a></div>
    <div class="dater"><a href="index.php?nome=data">Data</a></div>
    <div class="procquer"><a href="index.php?nome=proc">Procedimento</a></div>
  </div>
  <div class="creater">
    <div class="form">
      <form method="post" id="criar">
        <div class="nme">

          <input type="text" class="name_input" name="name_input" title="name" id="nme"
            required>
          <label for="nme">Nome</label>
        </div>
        <div class="nme">

          <input type="text" class="price_input" name="price_input" title="name" id="price"
            required>
          <label for="price">Valor</label>
        </div>
        <div class="nme">

          <input type="date" class="data_input" name="data_input" title="name" id="data"
            required>
          <label for="data">Data</label>
        </div>
        <div class="nme">

          <input type="text" class="proc_input" name="proc_input" title="name" id="proc"
            required>
          <label for="proc">Procedimento</label>
        </div>
        <div class="nme">

          <input type="tel" class="cel_input" name="cel_input" maxlength="15" title="name"
            id="cel" required>
          <label for="cel">Numero de Celular</label>
        </div>

        <div class="submit">
          <input type="submit" class="pointer">
        </div>

      </form>
    </div>
  </div>

  <div class="search">
    <div class="search_tool">
      <form class="search_tool2" id="searchForm">

        <input type="text" class="S_tool" id="S_tool" name="search" title="Search_tool" placeholder="Pesquisar" value="">
        <button class="submitter" title="submitter" type="submit"><i
            class="bx bx-search" id="submitter"></i></button>
      </form>

    </div>
    <div class="results">
      <?php

      include './php/conexao.php';

      if (isset($_GET['search']) && !empty($_GET['search'])) {
        echo "<script>alert('Nenhum resultado encontrado para: ');</script>";

        $valor = $_GET['search'];
        $valor = trim($valor);
        $valor = mysqli_real_escape_string($conn, $valor);

        echo $valor;
        $iten = $conn->query("SELECT * FROM agenda WHERE name LIKE '%$valor%'");

        if ($iten->num_rows > 0) {
          while ($jn = $iten->fetch_assoc()) {
            $nme = $jn['name'];
            $dta =  $jn['data'];
            $formtar = date('d/m/Y', strtotime($dta));
            $prc = $jn['proc'];
            $cl = $jn['cel'];
            $ide = $jn['ID']
      ?>




            <div class="elementor">
              <div class="inside_contenter">
                <div class="name">
                  <p><?php echo $nme ?></p>
                </div>

                <div class="data">
                  <p><?php echo $formtar ?></p>
                </div>

                <div class="procedimento">
                  <p><?php echo $prc ?></p>
                </div>

                <div class="tel">
                  <p><?php echo $cl ?></p>
                </div>

              </div>
            </div>
      <?php
          }
        }
      }
      ?>

    </div>
  </div>

  <script src="./scripts/valid.js" defer></script>
  <script src="./scripts/telephone.js" defer></script>
  <script src="./scripts/modais.js" defer></script>
  <script src="./scripts/search.js" defer></script>
  <script src="./scripts/filter.js" defer></script>
  <script src="./scripts/mobile.js" defer></script>
  <script src="./scripts/edit.js" defer></script>
  <script src="./scripts/theme.js" defer></script>
  <script src="./scripts/limbo.js" defer></script>
  <script src="./scripts/not.js" defer></script>



</body>

</html>