<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\System;

use Contexis\WpGitHubUpdater\WordPressPluginUpdater;

class Update
{
	public function __construct(string $plugin_file, string $repo_owner, string $repo_name)
	{
		if ((defined('WP_DEBUG') && WP_DEBUG) || defined('CTX_DEV_SERVER')) {
			return;
		}

		WordPressPluginUpdater::fromPluginFile(
			pluginFile: $plugin_file,
			owner: $repo_owner,
			repositoryName: $repo_name,
		)->registerHooks();
	}
}
