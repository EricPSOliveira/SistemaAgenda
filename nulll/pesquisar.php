<?php

      include 'conexao.php';

      include '../index.php';
     
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
            $prc = $jn['proc'];
            $cl = $jn['cel'];
      ?>




            <div class="elementor">
              <div class="inside_contenter">
                <div class="name">
                  <p><?php echo $nme ?></p>
                </div>

                <div class="data">
                  <p><?php echo $dta ?></p>
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