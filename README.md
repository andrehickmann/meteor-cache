# higg:cache

## Table of contents

- [Install](#install)
- [Introduction](#install)
- [Using](#using)
 - [Using just the cache](#using-just-the-cache)
 - [Using the cache_storage](#using-the-cache_storage)
- [Contributors](#contributors)
- [Todos](#todos)


## Install

Adding the package to your meteor-application.

 ```sh
 $ meteor add higg:cache
 ```

## Introduction

A basic cache with a cache-storage for persisting data in the memory of your
meteor (client/server) application.

You can just use the cache object as it is or in combination with the
cache-storage if you want to seperate the data by using more then one cache
-instance.

## Using just the cache

Using the Cache-Instance by creating a new Cache-Instance using `new Cache(name)`:

```js

var cacheInstance = new Cache('my_cache');

```
You dont have to choose a name for the cache, in this case the cache-instance
generate its own name. The name is important for later use in the cache-storage.
By now you can just access the cache by the variable you defined.

Now you can add items to the cache, by calling `addItem()` with an key for your
item and the item itself:

```js
var users = ['Jack', 'Steve', 'Vanessa', 'Miranda', 'Tim'];

/* adding the users to the cache*/
cacheInstance.addItem('users', users);
```
Please note, that if you want to add another item with a key which allready
exists in the cache an erro will be thrown.

So if you want to check if the cache-instance allready has an item you are looking
for, you can use the `hasItem(key)` function. The function will return a boolean
value.

```js
if (cacheInstance.hasItem('users') === false)
  cacheInstance.addItem('users');
```

Of course if you want to get an item out of the cache, you can call `getItem(key)`:

```js
  var usersOutOfCache = cacheInstance.getItem('users');
```
Please note, this method will throw an error, if the key does not exist in your
cache.

## Using the cache_storage

If you like to use more then one cache instance, you can use the cache_storage
for handling your cache instances.

Register a new CacheStorage is simple, just choose a `name` for your storage:

```js
  try {
    var storage = new CacheStorage('my_storage');
  } catch (error) {
    console.log(error)
  }
```

If you create a Storage which allready exists, the constructor will throw an
error.

The cache-storage will handle the cache instances and also create
the instances for you by itself (like a factory). You don't have to create a new Cache by
calling `new Cache(name)` you simply use the `getInstance(name)` function of the
storage:

```js
  try {
    var storage = new CacheStorage('my_storage');
    storage.getInstance('users')
           .addItem('users',  ['Jack', 'Steve', 'Vanessa', 'Miranda', 'Tim']);
  } catch (error) {
    console.log(error)
  }
```

If there is no cache with the given name, `getInstance()` will create a new Cache
with that name and add it to the storage. Because of the fluid-interface you
can directly add a new item to your cache by calling `addItem()`.

## Contributers

If you like to contribute to the package, feel free to fork the repository and
make a pull-request.

## Todos

Of course the package is very simple at the moment, there are plenty things to
do:

* writing tests for Cache and CacheStorage
* writing an interface for Cache, if we would like to add other cache-
  types then memory-only
* adding more cache-types :)
* adding timestamps for invalidate cache-items
