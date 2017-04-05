/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var firstNode = new ListNode();
    
    var step = 0;
    var currentNode = firstNode, 
        currentL1 = l1 || new ListNode(0), 
        currentL2 = l2 || new ListNode(0);
    
    do {
        var currentSum = currentL1.val + currentL2.val + step;
        
        currentNode.val = currentSum % 10;
        step = (currentSum - currentSum % 10) / 10;
        
        if (currentL1.next || currentL2.next || step > 0) {
            currentNode.next = new ListNode();
        }
        
        currentL1 = currentL1.next || new ListNode(0);
        currentL2 = currentL2.next || new ListNode(0);
        currentNode = currentNode.next;
    } while(currentNode);
    
    return firstNode;
};