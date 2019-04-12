var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    if (storage === {}) {
      storage[0] = value;
      return someInstance.size();
    }
    storage[someInstance.size()] = value;
    return someInstance.size();
  };

  someInstance.pop = function() {
    if (storage === {}) {
      return undefined;
    }
    var removedItem = storage[someInstance.size() - 1];
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
