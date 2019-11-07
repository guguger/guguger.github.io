<?php
$kv = array();
if ($_POST) {
foreach ($_POST as $key => $value) {
$kv[] = "\"$key\":\"$value\"";
}
}
if ($_GET) {
foreach ($_GET as $key => $value) {
$kv[] = "\"$key\":\"$value\"";
}
}

$query_string = join(",", $kv);
echo '{'.$query_string.'}';
?>