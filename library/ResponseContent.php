<?php

class ResponseContent {

	public static function get_html($id): array | false {
		$form = get_post($id);
		
		$blocks = parse_blocks( $form->post_content );

		// extract blocks from form-container
		$respondeBlock = self::search_nested_block($blocks, ["gutenberg-form/form-container", "gutenberg-form/mail-editor"]);
		
		if (!$respondeBlock) {
			return false;
		}

		return ["html" => render_block($respondeBlock), "attributes" => $respondeBlock['attrs']];
	}

	public static function search_block($blocks, $blockName) {
		foreach($blocks as $block) {
			if($block['blockName'] == $blockName) {
				return $block;
			}
		}
		return false;
	}

	public static function search_nested_block($blocks, $blockNames) {
		if (!is_array($blockNames)) {
			$blockNames = [$blockNames];
		}

		$first_block_name = array_shift($blockNames);

		$first_block = self::search_block($blocks, $first_block_name);

		if (!$first_block) {
			return false;
		}

		if (count($blockNames) == 0) {
			return $first_block;
		}

		while (count($blockNames) > 0) {
			$block_name = array_shift($blockNames);
			$first_block = self::search_block($first_block['innerBlocks'], $block_name);
			if (!$first_block) {
				return false;
			}
		}

		return $first_block;
		
	}
	



}


