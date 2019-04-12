var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.length = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.length;
};

stackMethods.pop = function() {
  if (this.length === 0) {
    return undefined;
  }
  var removedItem = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return removedItem;
};

stackMethods.push = function(value) {
  if (this.length === 0) {
    this[0] = value;
    this.length++;
  } else {
    this[this.length] = value;
    this.length++;
  }
  return this.length;
};

