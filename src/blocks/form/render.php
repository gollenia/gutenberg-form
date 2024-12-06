<?php
$lang = explode("_", get_locale())[0];
$formId = $attributes['formPost'];
$pageId = get_the_ID();
$classes = get_post_meta($formId, '_feedback_form_collapse', true) ? 'form-collapsed' : '';

$result = "<div class='gbf-form' data-id='" . $formId . "' data-lang='" . $lang . "' data-page='" . $pageId . "' data-class='" . $classes . "'></div>";
echo $result;