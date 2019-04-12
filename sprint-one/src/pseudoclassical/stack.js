var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
};

Stack.prototype.size = function() {
  return this.length;
};

Stack.prototype.pop = function() {
  if (this.length === 0) {
    return undefined;
  }
  var removedItem = this[this.length - 1];
  delete this[this.length - 1];
  this.length--;
  return removedItem;
};

Stack.prototype.push = function(value) {
  if (this.length === 0) {
    this[0] = value;
    this.length++;
  } else {
    this[this.length] = value;
    this.length++;
  }
  return this.length;
};


