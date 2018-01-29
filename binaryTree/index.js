function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) {
      this.left = new BST(value)
    } else {
      this.left.insert(value)
    }
  } else {
    if (!this.right) {
      this.right = new BST(value)
    } else {
      this.right.insert(value)
    }
  }
}

BST.prototype.contains = function(value) {
  if (this.value === value) {
    return true
  }
  if (value < this.value) {
    if (!this.left) {
      return false
    } else {
      return this.left.contains(value)
    }
  } else if (value > this.value) {
    if (!this.right) {
      return false
    } else {
      return this.right.contains(value)
    }
  }
}


// depth first traversal in order , pre-order, post-order
BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  if (order === 'pre-order') {
    iteratorFunc(this.value)
  }
  if (this.left) {
    this.left.depthFirstTraversal(iteratorFunc, order)
  }
  if (order === 'in-order') {
    iteratorFunc(this.value)
  }
  if (this.right) {
    this.right.depthFirstTraversal(iteratorFunc, order)
  }
  if (order === 'post-order') {
    iteratorFunc(this.value)
  }
}

// breadth first traversal
BST.prototype.breadthFirstTravelsal = function (iteratorFunc) {
  let queue = [this]

  while (queue.length) {
    let treeNode = queue.shift()
    iteratorFunc(treeNode)

    // if the node has left or right child, push them into the queue
    if (treeNode.left) queue.push(treeNode.left)
    if (treeNode.right) queue.push(treeNode.right)
  }
}


let rootNode = new BST(12)
let array = [21421,35,43,213,2,3,4,6,7,8,923,21]
while (array.length) {
  const node = array[0]
  rootNode.insert(node)
  array.shift()
}
console.info(rootNode)

console.log(rootNode.contains(21))
