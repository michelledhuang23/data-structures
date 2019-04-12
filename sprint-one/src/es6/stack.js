class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.length = 0;
  }

  size () {
    return this.length;
  }
  
  pop () {
    if (this.length === 0) {
      return undefined;
    }
    var removedItem = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return removedItem;
  }
  
  push (value) {
    if (this.length === 0) {
      this[0] = value;
      this.length++;
    } else {
      this[this.length] = value;
      this.length++;
    }
    return this.length;
  }

}