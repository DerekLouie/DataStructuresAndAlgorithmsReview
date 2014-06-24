// function Node(value, left, right) {
    // this.value = value || undefined;
    // this.left = left || undefined;
    // this.right = right || undefined;
// }

// function Heap() {
    // this.root = undefined;
    // this.size = 0;
    // return this;
// }

// Heap.prototype = {
    // heapify: function heapify() {
    // },
    // peek: function peek() {
        // return this.root;
    // },
    // pop: function pop() {
        
        // this.size--;
        // return this.root;
    // },
    // updateKey: function updateKey() {
    // },
    // insert: function insert(node) {
        // root = this.root;
        // if (root === undefined) {
           // this.root = node; 
           // return node;
        // }
        // do {
            // if (!root.left) {
                // root.left = node;
            // } else if (!root.right) {
                // root.right = node;
            // } else {
                // root = root.left;
            // }
        // } while (root.left);
        // this.heapify();
        // this.size++;
    // },
    // meld: function meld() {
    // },
    // size: function size() {
        // return this.size;
    // },
// }

// function MaxHeap() {
    // return new Heap();
// }

// MaxHeap.prototype = {
    
// }
// var heap = new Heap();
