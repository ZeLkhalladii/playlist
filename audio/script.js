class LinkedList {
    constructor() {
        this.head = null;
        this.curser = null;
    }

    add(data) {
        if (!this.head) {
            this.head = new Node(data);
            this.curser = this.head;
        } else {
            let temp = this.head;
            this.head = new Node(data);
            temp.next = this.head;
            this.head.prev = temp;
        }
    }
    pop() {
        if(this.head === this.curser){
            this.curser = this.curser.prev;
        }
        if (this.head && this.head.prev) {
            this.head = this.head.prev;
            this.head.next = null;
        }
    }
    showCurrent() {
        if (this.curser) {
            return this.curser.data;
        } else {
            return;
        }
    }
    next() {
        if (this.curser && this.curser.next) {
            this.curser = this.curser.next;
        }
    }
    prev() {
        if (this.curser && this.curser.prev) {
            this.curser = this.curser.prev;
        }
    }
}
class Node {
    constructor(data) {
        this.next = null;
        this.prev = null;
        this.data = data;
    }
}

let list = new LinkedList();

function add() {
    list.add(document.getElementById("data").value);
    document.getElementById("audio").src = list.showCurrent();
    document.getElementById("data").value = "";

}

function pop() {
    list.pop();
    document.getElementById("audio").src = list.showCurrent();
}

function next() {
    list.next();
    document.getElementById("audio").src = list.showCurrent();
}

function prev() {
    list.prev();
    document.getElementById("audio").src = list.showCurrent();
}

//menu responsive
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
