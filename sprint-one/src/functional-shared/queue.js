var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.length = 0;
  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.size = function() {
  return this.length;
};

queueMethods.enqueue = function(value) {
  if (this.size() === 0) {
    this[0] = value;
    this.length++;
  } else {
    this[this.size()] = value;
    this.length++;
  }
  return this.size();
};

queueMethods.dequeue = function() {
  if (this.length === 0) {
    return undefined;
  }
  var removedItem = this[0];
  for (var i = 0; i < this.size(); i++) {
    this[i] = this[i + 1];
  }
  delete this[this.size() - 1];
  this.length--;
  return removedItem;
};





