# LRU Cache NPM Package

[![npm version](https://img.shields.io/npm/v/lru-cache-bysakshi)](https://www.npmjs.com/package/lru-cache-bysakshi)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/lru-cache-bysakshi/blob/main/LICENSE)

<img src="https://github.com/sam2611/lru-cache-npm-package/blob/main/Screenshot%202024-01-06%20140156.png"/>


## Overview

LRU Cache NPM Package is a simple and efficient implementation of a Least Recently Used (LRU) cache. It provides a data structure that maintains a limited number of items and automatically removes the least recently used item when the capacity is exceeded.

## Installation

Install the package using npm:

`npm i lru-cache-bysakshi`

Usage
Example usage of the LRUCache class:

### javascript

```const { LRUCache } = require('lru-cache-npm-package');

// Create an LRUCache with a capacity of 3
const cache = new LRUCache(3);

// Add values to the cache
cache.put(1, 'value1');
cache.put(2, 'value2');
console.log(cache.get(1)); // Output: 'value1'
```


## API Reference
LRUCache(capacity: number)
Constructor to create a new LRUCache instance with the specified capacity.

## Parameters:

key: The key for the item.
value: The value to be stored.
get(key: any): any
Retrieve the value associated with the given key. If the key is not found, it returns -1.

## Examples
Explore additional examples and use cases in the examples directory.

## Testing
Run tests using:

bash
npm test

## Contributing
Contributions are welcome! Read the Contributing Guidelines for more details.

## License
This project is licensed under the MIT License.

## Dependencies
None

## Contact Information
For questions, feedback, or issues, please contact sakshimishra2611@gmail.com .
