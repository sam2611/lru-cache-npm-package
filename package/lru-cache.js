// lru-cache.js
class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map();
      this.ordering = [];
    }
  
    get(key) {
      if (this.cache.has(key)) {
        // Move the accessed key to the end of the ordering array
        this.updateOrdering(key);
        return this.cache.get(key);
      }
      return -1; // Key not found
    }
  
    put(key, value) {
      if (this.cache.size >= this.capacity) {
        // Evict the least recently used item
        const leastUsedKey = this.ordering.shift();
        this.cache.delete(leastUsedKey);
      }
  
      // Add the new key-value pair to the cache and update the ordering
      this.cache.set(key, value);
      this.updateOrdering(key);
    }
  
    updateOrdering(key) {
      // Remove the key from its current position in the ordering
      const index = this.ordering.indexOf(key);
      if (index !== -1) {
        this.ordering.splice(index, 1);
      }
  
      // Add the key to the end of the ordering
      this.ordering.push(key);
    }
  }
  
  module.exports = LRUCache;

  
