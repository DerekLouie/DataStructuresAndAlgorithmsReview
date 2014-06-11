function Stack() {
    this.data = [];
    return this;
}

Stack.prototype = {
    push: function push(item) {
        this.data.push(item);
        return item;
    },
    pop: function pop(item) {
        return this.data.pop();
    },
    peek: function peek() {
        return this.data[data.length-1];
    }
};

var stack = new Stack();
