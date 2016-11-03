'use strict';

Package.describe({
  name: 'higg:cache',
  summary: 'A basic cache with a cache-storage for persisting data in the memory of your application.',
  version: '0.0.1',
  git: 'https://github.com/andrehickmann/meteor-cache.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('lib/CacheStorage.js');
  api.addFiles('lib/Cache.js');
  api.export(['Cache', 'CacheStorage']);
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('higg:cache');
  api.addFiles('lib/cache-tests.js');
});
