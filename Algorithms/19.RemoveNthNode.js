/**
 * Given a linked list, remove the nth node from the end of list and return its head.

 * For example,
 *   Given linked list: 1->2->3->4->5, and n = 2.
 *   After removing the second node from the end, the linked list becomes 1->2->3->5.
 * Note: Given n will always be valid.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {	
	var currentNode = head;
	var count = 1;
	while (count < n && currentNode !== null) {
		count++;
		currentNode = currentNode.next;
	}
	if (currentNode === null) {
		return head;
	}
	if (currentNode.next === null) {
		return head.next;
	}
	
	var nthNodeFromEnd = head;
	var prevNode = null;

	while (currentNode.next) {
		prevNode = nthNodeFromEnd;
		nthNodeFromEnd = nthNodeFromEnd.next;
		currentNode = currentNode.next;
	}

	prevNode.next = nthNodeFromEnd.next;
	return head;
};
