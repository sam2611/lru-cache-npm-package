const LRUCache = require('../package/lru-cache');

// Test case 1: should store and retrieve values correctly
const cache1 = new LRUCache(3);
cache1.put(1, 'a');
cache1.put(2, 'b');
console.log('Test Case 1 - Get 1:', cache1.get(1)); // Expected output: 'a'
console.log('Test Case 1 - Get 2:', cache1.get(2)); // Expected output: 'b'

// Test case 2: should evict the least recently used item when exceeding capacity
const cache2 = new LRUCache(2);
cache2.put(1, 'x');
cache2.put(2, 'y');
cache2.put(3, 'z'); // Evicts key 1
console.log('Test Case 2 - Get 1:', cache2.get(1)); // Expected output: -1
console.log('Test Case 2 - Get 2:', cache2.get(2)); // Expected output: 'y'
console.log('Test Case 2 - Get 3:', cache2.get(3)); // Expected output: 'z'
