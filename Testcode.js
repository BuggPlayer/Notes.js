class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LL {
  constructor() {
    // inital stage head is always null
    this.head = null;
  }

  // add item fist

  addFirst(data) {
    const newNode = new Node(data);
    this.next = newNode.data;
    this.head = newNode;
    console.log(newNode);
  }
  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    }

    let curret = this.head;
    while (curret.next) {
      curret = curret.next;
    }
    curret.next = newNode;
  }
}

const ll = new LL();
console.log(ll.addFirst(5));
