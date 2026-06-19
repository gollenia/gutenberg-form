<?php

declare(strict_types=1);

namespace Contexis\GutenbergForm\System;

use Contexis\WpGitHubUpdater\GitHubReleaseProvider;
use Contexis\WpGitHubUpdater\GitHubRepository;
use Contexis\WpGitHubUpdater\PluginMetadata;
use Contexis\WpGitHubUpdater\WordPressPluginUpdater;

class Update
{
	public function __construct(string $plugin_file, string $repo_owner, string $repo_name)
	{
		if ((defined('WP_DEBUG') && WP_DEBUG) || defined('CTX_DEV_SERVER')) {
			return;
		}

		$plugin = PluginMetadata::fromPluginFile($plugin_file);
		$repository = new GitHubRepository($repo_owner, $repo_name);
		$releaseProvider = new GitHubReleaseProvider($repository, (string) $plugin->data['Version']);

		(new WordPressPluginUpdater(
			plugin: $plugin,
			repository: $repository,
			releaseProvider: $releaseProvider,
		))->registerHooks();
	}
}
