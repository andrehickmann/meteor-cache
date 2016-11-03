/*
* Storage for all available cache-storage instances.
*
* @var Array
*/
var cache_storage = [];

/**
* Implementing an basic cache-storage for handling cache-entrys and persist
* data in the memory of the application.
*/
CacheStorage = function(name) {
  if (this.has(name)) {
    throw new Error('CacheStorage with name: "' + name + '" allredy exists.');
  }
  cache_storage[name] = this;
};

/**
* checking if an given cachename allready exists in the storage.
*
* @return boolean
*/
CacheStorage.prototype.has = function (name) {
  if (typeof name === 'undefined') {
    throw new Error('No name was given.');
  }
  return (typeof cache_storage[name] !== 'undefined');
};

/**
* get an instance of an given cachename. if the cache doesnt exists, a
* new instance with the name will be created.
*
* @return Cache
*/
CacheStorage.prototype.getInstance = function(name) {
  if (typeof name === 'undefined') {
    throw new Error('No name was given.');
  }
  if (this.has(name) === false) {
    cache_storage[name] = new Cache(name);
  }
  return cache_storage[name];
};
