class Node {
    constructor(valueInput){
        this.value = valueInput;
        this.left = null;
        this.right = null;
    }
}

//binary search tree class constructor and methods
class BST {
    constructor() {
        //identifier points to root node and initialized with null value
        this.root = null;
    }

    add(valueInput) {
        let newNode = new Node (valueInput);
        
        if( this.root == null ) {
            //logic that checks for what is the root node and places new inputs 
            //to the left or right of the root node based on if it is less than
            //or greater than the root node
            this.root = newNode
        } else {
            let current = this.root
            while ( current != null) {
                //check input value if greater than current move it goes to right
                if (valueInput > current.value ){
                    if  ( current.right == null ) {
                        current.right = newNode;
                        return this;
                    }
                    else {
                        current = current.right;
                    }
                } else if ( valueInput < current.value ) {
                    //check input value if less than current value, then move to the left
                    if ( current.left == null ) {
                        current.left = newNode;
                        return this;
                    }
                    else {
                        current = current.left;
                    }
                } else {
                        // edge case --> are there duplicates?
                        //there are no duplicates allowed in BST
                        console.log ("Must be a duplicate and no duplicates allowed")
                        return this;
                    }
                }
            }
            return this;
        }

        printTree( node ) {
            console.log( "Current node --> ", node.value );
            if ( node.left != null ){
                console.log( "The node to the left of -->", node.value, "is--> "+ node.left.value )
                //recursion to print the left side of bst and print subtrees to furthest leaves
                this.printTree( node.left )
            }
            if( node.right != null ){
                console.log( "The node to the right of -->", node.value, "is-->"+ node.right.value )
                //recursion to print the right side of bst and print subtrees to furthest leaves
                this.printTree(node.right);
            }
        }

        findMax() {
            let currentMax = this.root;
            while ( currentMax.right != null ) {
                currentMax = currentMax.right;
            }
            return currentMax.value;
        }

        findMaxRecursive ( node ){
            let runner = node;
            if ( runner.right != null ){
                return this.findMaxRecursive( runner.right )
            } else {
                // if there are no children retrun the root nodes value
                console.log( runner.value )
                return runner.value;
            }
        }

        findMin() {
            let currentMin = this.root;
            while (currentMin.left != null ){
                currentMin = currentMin.left;
            }
            return currentMin.value;
        }

        findMinRecursive ( node ) {
            let runner = node;
            if (runner.left != null ){
                return this.findMinRecursive( runner.left )
            } else {
                // if there are no children return the root nodes value
                console.log ( runner.value )
                return runner.value;
            }
        }

        size ( node ) {
            // base case 
            if ( node == null ){
                return 0;
            }
            //recurses and counts left sub tree, adds +1 for root node, recurses and counts right sub tree
            else {
                return ( this.size( node.left ) + 1 + this.size ( node.right ) )
            }
        }

        contains ( valueToFind ) {
            let current = this.root;
            while ( current != null ) {
                if ( current.value == valueToFind ) {
                    return true;
                }
                else if ( valueToFind < current.value ) {
                    current = current.left;
                }
                else {
                    current = current.right;
                }
            }
            return false; 
        }

        recursiveContains ( valueToFind, node ) {
            // base case if there are no nodes there is no value to find
            if ( node == null ){
                return false;
            }
            // base case if node is equal to root node return 
            if( node.value == valueToFind ) {
                return true
            }

            // recurse left subtree if value is less than root node
            else if ( valueToFind < node.value ) {
                return this.recusiveContains ( valueToFind, node.left )
            }

            //
            else {
                return this.recursiveContains ( valueToFind, node.right )
            }
            
        }

        height () {
            if ( !this.root ) {
                console.log ( "The tree is empty" )
                return this
            }

            //recursive function to find height of bst

            const height = ( node = this.root ) => {
                // if the only node is the root node the height of the tree is 0 (no edge to next node)
                if ( ! node.left && ! node.right )
                    return 0

                if ( ! node.left ) 
                    return height ( node.right ) + 1 

                if ( ! node.right )
                    return height ( node.left ) + 1

                const left = height ( node.left )
                const right = height ( node.right )

                //return whatever is the taller branch left or right 
                // and add the height of the root node 0
                return Math.max( left, right ) + 0
        }

        return height()
    }


}

let bst1 = new BST();

bst1.add(88).add(63).add(55).add(111).add(7).add(9).add(112).add(113)
bst1.printTree(bst1.root)
console.log(bst1.height())

console.log(bst1.recursiveContains(111, bst1.root))
console.log(bst1.recursiveContains(303, bst1.root))
