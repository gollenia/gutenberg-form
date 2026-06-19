<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\Form;

use Contexis\GutenbergForm\Form\WordPress\FormColumns;
use Contexis\GutenbergForm\Form\WordPress\FormMeta;
use Contexis\GutenbergForm\Form\WordPress\FormPostType;
use Contexis\GutenbergForm\Form\WordPress\FormRestController;

class FormPost
{
	public const POST_TYPE = 'gbf-form';

	public static function init(): self
	{
		$instance = new self();
		$postType = new FormPostType();
		$meta = new FormMeta();
		$columns = new FormColumns();
		$restController = new FormRestController();

		add_action('init', [$postType, 'register']);
		add_action('init', [$meta, 'register']);
		add_filter('manage_gbf-form_posts_columns', [$columns, 'add']);
		add_action('manage_posts_custom_column', [$columns, 'render'], 10, 2);
		add_action('rest_api_init', [$restController, 'register'], 10, 1);

		return $instance;
	}
}
