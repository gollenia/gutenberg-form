<?php
if ( ! empty( $attributes['formPost'] ) ) {
	wp_enqueue_script( 'gbf-frontend' );
	wp_enqueue_style( 'gbf-frontend-style' );
}

$lang    = explode( '_', get_locale() )[0];
$form_id = isset( $attributes['formPost'] ) ? (int) $attributes['formPost'] : 0;
$page_id = get_the_ID();
$classes = $form_id && get_post_meta( $form_id, '_feedback_form_collapse', true ) ? 'form-collapsed' : '';
$form_url = add_query_arg(
	'page_id',
	(string) $page_id,
	rest_url( 'gbf-form/v2/form/' . $form_id )
);
$submit_url = rest_url( 'gbf-form/v2/submit' );

echo sprintf(
	"<div class='gbf-form' data-id='%d' data-lang='%s' data-page='%d' data-class='%s' data-form-url='%s' data-submit-url='%s'></div>",
	$form_id,
	esc_attr( $lang ),
	(int) $page_id,
	esc_attr( $classes ),
	esc_url( $form_url ),
	esc_url( $submit_url )
);
