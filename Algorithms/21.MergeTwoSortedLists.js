/** 
 * Merge two sorted linked lists and return it as a new list. 
 * The new list should be made by splicing together the nodes of the first two lists.
 */
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
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
		return l2;
	}
	if (!l2) {
		return l1;
	}
	var head = l1.val < l2.val ? l1 : l2;
	var tail = head;
	var head1 = head.next;
	var head2 = l1.val < l2.val ? l2 : l1;

	while (head1 && head2) {
		if (head1.val < head2.val) {
			tail.next = head1;			
			head1 = head1.next;
		}
		else {
			tail.next = head2;
			head2 = head2.next;
		}
		tail = tail.next;
	}
	if (head1) {
		tail.next = head1;
	}
	else {
		tail.next = head2;
	}

	return head;
};
