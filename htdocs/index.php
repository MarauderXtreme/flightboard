<?php
	session_start();
  require_once('templates/settings.php');  
  require_once('templates/inc/content.inc'); 
	
	if(!isset($_GET['q']) || empty($_GET['q']) || !array_key_exists($_GET['q'],$contents)) {
    $content = "home";
  }
  else {
    $content = $_GET['q'];
  }    
?>
<!DOCTYPE html>
<html>
	<head>
		<title><?php echo $contents[$content][1]; ?></title>
		<meta charset="utf-8" />
		<meta content="text/html" http-equiv="Content-Type">
		
		<!-- Scripts -->
		<script src="lib/jquery-1.9.1.min.js" type="text/javascript"></script>
		<script src="lib/jquery.flightboard.min.js" type="text/javascript"></script>
		<script src="lib/jquery.airport-1.1.source.js" type="text/javascript"></script>
		<script src="lib/split-flap/mf/core/Core.js" type="text/javascript"></script>
		<script src="lib/split-flap/jquery/jquery.splitflap.js" type="text/javascript"></script>
		
		<script src="scripts/script.js"></script>
		
		<!-- Stylesheets -->
		<link rel="stylesheet" href="css/general.css" />
	</head>
	<body>
		<div id="content">
      <?php 
        if(is_file($contents[$content][0] . '.php')) {
          include($contents[$content][0] . '.php');
        }
        else if(DEBUG==1) {
          echo $contents[$content][0] . '.php';
        }
      ?>
		</div>
	</body>
</html>