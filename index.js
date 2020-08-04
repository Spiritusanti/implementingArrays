// Building an array from scratch using Class

// Arrays in JavaScript are objects with integer based keys.

// first let's create a Class object

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  // first method (function within a class) for loooking up data
  get(index) {
    return this.data[index]
  }
  // next method for adding data via push
  push(item) {
    // adds data at 0 index.
    this.data[this.length] = item
    this.length++ //increments the index length so we can keep adding items.
    return this.length
  }
  //next we add the pop method to delete items from the array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  //adding the delete method, which will be O(n)
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index)
  }
  //method to shift data to the left by 1 when used in the delete method.
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1]
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.delete(1);
console.log(newArray);


