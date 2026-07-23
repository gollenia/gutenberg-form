<?php
if ( ! empty( $attributes['formPost'] ) ) {
	wp_enqueue_script( 'gbf-frontend' );
	wp_enqueue_style( 'gbf-frontend-style' );
}

$lang    = explode( '_', get_locale() )[0];
$form_id = isset( $attributes['formPost'] ) ? (int) $attributes['formPost'] : 0;
$page_id = get_the_ID();
$classes = $form_id && get_post_meta( $form_id, '_feedback_form_collapse', true ) ? 'form-collapsed' : '';

return sprintf(
	"<div class='gbf-form' data-id='%d' data-lang='%s' data-page='%d' data-class='%s'></div>",
	$form_id,
	esc_attr( $lang ),
	(int) $page_id,
	esc_attr( $classes )
);
