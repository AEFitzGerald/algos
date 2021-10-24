class Node {
    constructor(valueInput) {
        this.value = valueInput;
        this.left = null;
        this.right = null;

    }
}
var values = [];

class BST {
    constructor() {
        this.root = null;
    }


    add(valueInput) {
        let newNode = new Node (valueInput);
        if (this.root == null) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (current != null ) {
                if ( valueInput > current.value ) {
                    if (current.right == null ) {
                        current.right = newNode;
                        return this;
                    }
                    else {
                        current = current.right;
                    }
                } else if ( valueInput < current.value ) {
                    if ( current.left == null ) {
                        current.left = newNode;
                        return this;
                    } 
                    else {
                        current = current.left;
                    }   
                } else {
                    console.log ("Is there a dupe? Duplicates are not allowed.")
                    return this;

                }
            }
        }
        return this;
    }
    
    printPreOrder(node) {
        process.stdout.write( node.value + " ");
    
        if ( node.left !== null ) {
            this.printPreOrder(node.left);
        }
    
        if ( node.right !== null ) {
            this.printPreOrder(node.right);
        }
        
    }

    printLevels(node, level) {
        
        if( !values[ level ] ) values[ level ] = [ node.value ];
        else values[level].push( node.value );

        if( node.left ) this.printLevels( node.left, level + 1);
        if( node.right ) this.printLevels( node.right, level + 1 );   
    }

    levelOrder( node ) {
        console.log("\n BST Levels printed out in order from root:")
        values[0] = [ node.value ];

        if ( node.left ) this.printLevels( node.left, 1);
        if ( node.right ) this.printLevels( node.right, 1);

        for ( let i = 0; i < values.length; i++ )
            for( let j = 0; j < values[i].length; j++ ) process.stdout.write( values[i][j] + " " );
    }


}




let bstA = new BST();

bstA.add(11).add(9).add(8).add(5).add(7).add(14).add(13).add(15)
bstA.printPreOrder(bstA.root)
bstA.levelOrder(bstA.root)



