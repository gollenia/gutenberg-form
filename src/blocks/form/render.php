<?php
$lang = explode("_", get_locale())[0];

$result = "<div class='gbf-form' data-id='" . $attributes['formPost'] . "' data-lang='" . $lang . "' data-page='" . get_the_ID() . "'></div>";
echo $result;