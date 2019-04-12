var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (storage === {}) {
      storage[0] = value;
      return someInstance.size();
    }
    storage[someInstance.size()] = value;
    return someInstance.size();
  };

  someInstance.dequeue = function() {
    if (storage === {}) {
      return undefined;
    }
    var removedItem = storage[0];
    for (var i = 0; i < someInstance.size(); i++) {
      storage[i] = storage[i + 1];
    }
    delete storage[someInstance.size() - 1];
    return removedItem;
  };

  someInstance.size = function() {
    var count = 0;
    for (var key in storage) {
      count++;
    }
    return count;
  };

  return someInstance;
};
