<?php
$pageRefreshed = isset($_SERVER['HTTP_CACHE_CONTROL']) && ($_SERVER['HTTP_CACHE_CONTROL'] === 'max-age=0' ||  $_SERVER['HTTP_CACHE_CONTROL'] == 'no-cache');
if ($pageRefreshed == 1) {
  header("Location: ../?from=faq");
} else {
  //enter code here
  echo "No";
}
