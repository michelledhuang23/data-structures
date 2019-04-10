class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.length = 0;
  }

  size () {
    return this.length;
  }
  
  enqueue (value) {
    if (this.length === 0) {
      this[0] = value;
      this.length++;
    } else {
      this[this.length] = value;
      this.length++;
    }
    return this.length;
  }
  
  dequeue () {
    if (this.length === 0) {
      return undefined;
    }
    var removedItem = this[0];
    for (var i = 0; i < this.length; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.length - 1];
    this.length--;
    return removedItem;
  }

}
