function ListNode(val, next) {
// 	this.val = val === undefined ? 0 : val;
// 	this.next = next === undefined ? null : next;
// }

// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @field {ListNode} result
//  * @return {ListNode}
//  */
// var addTwoNumbers = function (l1, l2) {
// 	let dummyHead = new ListNode(0);
// 	let tail = dummyHead;
// 	let carry = 0;

// 	while (l1 != null || l2 != null || carry != 0) {
// 		let digit1 = l1 != null ? l1.val : 0;
// 		let digit2 = l2 != null ? l2.val : 0;

// 		let sum = digit1 + digit2 + carry;
// 		let digit = Math.floor(sum % 10);
// 		carry = sum / 10;

// 		let newNode = new ListNode(digit);
// 		tail.next = newNode;
// 		tail = tail.next;

// 		l1 = l1 != null ? l1.next : null;
// 		l2 = l2 != null ? l2.next : null;
// 	}

// 	let result = dummyHead.next;
// 	delete dummyHead;
// 	return result;
// };
