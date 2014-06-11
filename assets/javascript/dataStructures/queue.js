function Queue() {
    this.data = [];
    return this;
}

Queue.prototype = {
    enqueue: function enqueue(item) {
        this.data.unshift(item);
        return item;
    },
    dequeue: function dequeue(item) {
        return this.data.pop();
    },
    peek: function peek() {
        return this.data[data.length-1];
    }
};

var queue = new Queue();
