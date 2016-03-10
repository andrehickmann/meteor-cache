/**
* implementing an cache object for storing data in the memory of the application. If you do not
* give a name for the cache, a random id for the cache-instance will be generated.
*/
Cache = function(cachename) {
  var name = cachename || 'id_' + (Math.floor(Math.random() * (10000000 - 1)) + 1);
  this.entrys = [];
};

/**
* returns the name of the cache.
*
* @return String
*/
Cache.prototype.getName = function() {
  return this.name;
};

/**
* returns an item based on the given key out of the cache-instance. If no item
* with the key is found, an error will be thrown.
*
* @throws error if no item with the key was found
* @return mixed
*/
Cache.prototype.getItem = function(key) {
  if (!this.hasItem(key)) {
    throw 'No cache item with key ""' + key + '"" found.';
  }
  return this.entrys[key];
};

/**
* adds an item with a given key to the cache.
* @throws error if no key or item was given.
*
* @return Cache
*/
Cache.prototype.addItem = function(key, item) {
  if (typeof key === 'undefined') {
    throw 'You have to define a key for the item.';
  }
  if (typeof item === 'undefined') {
    throw 'You have to define a item which you want to add to the cache.';
  }
  this.entrys[key] = item;
  return this;
};

/**
* checks if the item with the given key exists in the current cache.
*
* @throws error if no key was given
* @return boolean
*/
Cache.prototype.hasItem = function(key) {
  if (typeof key === 'undefined') {
    throw 'No key was given.';
  }
  return (this.entrys[key] !== undefined);
};
