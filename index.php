<?php
$request = strtolower($_SERVER['REQUEST_URI']);
$pages = array("/about", "/blog", "/contact", "/donate", "/tools", "/work");

if ($request == "" || $request == "/") {
    $page = "/about";
} elseif (in_array($request, $pages)) {
    $page = $request;
} else {
    header('Location: 404.html');
    exit;
}
?>
<!DOCTYPE html>
<html>
  <head>
  <?php include 'partials/header.html'; ?>
  </head>

  <body>
    <div class="pure-g">
    <?php include 'partials/navbar.html'; ?>
      <div class="content pure-u-1 pure-u-md-3-4">
      <?php include 'pages' . $page . '.html'; ?>
      <?php include 'partials/footer.html'; ?>
      </div>
    </div>
    <script src="./assets/js/navbar.js"></script>
    <script src="./assets/js/qrcode.js"></script>
  </body>
</html>
