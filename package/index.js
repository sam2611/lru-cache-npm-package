// index.js
import LRUCache from './lru-cache.js';

// Example usage:
const lruCache = new LRUCache(2);
lruCache.put(1, 1);
lruCache.put(2, 2);
console.log(lruCache.get(1)); // Output: 1
lruCache.put(3, 3); // Evicts key 2
console.log(lruCache.get(2)); // Output: -1 (not found)
lruCache.put(4, 4); // Evicts key 1
console.log(lruCache.get(1)); // Output: -1 (not found)
console.log(lruCache.get(3)); // Output: 3
console.log(lruCache.get(4)); // Output: 4
