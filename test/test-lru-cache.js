// test/test-lru-cache.js
const LRUCache = require('../package/lru-cache');

describe('LRUCache', () => {
  it('should store and retrieve values correctly', () => {
    const cache = new LRUCache(3);
    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);
    expect(cache.get(2)).toBe(2);
  });

  it('should evict the least recently used item when exceeding capacity', () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.put(3, 3); // Evicts key 1
    expect(cache.get(1)).toBe(-1);  // Update to check for -1
    expect(cache.get(2)).toBe(2);
    expect(cache.get(3)).toBe(3);
  });
});

