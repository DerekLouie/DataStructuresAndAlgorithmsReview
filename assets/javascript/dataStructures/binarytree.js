// function BinaryTreeNode(data, left, right) {
    // if (!data) {
        // console.log("You must specify a value for this node");
        // return false;
    // }
    // this.data = data;
    // this.left = left || undefined;
    // this.right = right || undefined;
// }

// BinaryTreeNode.prototype = {
    // typeOf: 
// };

// function BinaryTree(root) {
    // if ( root instanceof BinaryTreeNode ) {
        // this.root = root;
    // } else {
        // console.log("You must specify a root of BinaryTreeNode type for this tree's root");
        // return false;
    // }


// };

// BinaryTree.prototype = {
    // add: function binaryTreeAdd(node, root) {
       // root = root || this.root;
       // var recurseRoot;
       // if (node.data = root.data) {
           // console.log("Cannot add a duplicate node into the tree");
           // return false;
       // }
       // if (node.data < root.data) {
            // if (root.left === undefined) {
                // root.left = node;
                // return node;
            // } else {
                // recurseRoot = root.left;
            // }
       // } else {
            // if (root.right === undefined) {
                // root.right = node;
                // return node;
            // } else {
                // recurseRoot = root.right;
            // }
       // }
       // if (recurseRoot) {
            // this.add(node, recurseRoot);
       // }

       // }
    // }
// }

// var binaryTree = new BinaryTree();
