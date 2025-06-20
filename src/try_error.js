// const func = async () => {
// 	return 5;
// };

import { renderSync } from "sass";

// func(10).then(console.log);

// function fetchData() {
// 	return new Promise((resolve) => {
// 		setTimeout(() => {
// 			resolve("📦 Data loaded");
// 		}, 2000); // simulate 2-second delay
// 	});
// }
// fetchData();

// function setTime(seconds) {
// 	setTimeout(() => {
// 		console.log(`${seconds} seconds passed`);
// 	}, seconds * 1000);
// }

// setTime(10);

function fetchData() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("📦 Data loaded");
		}, 2000); // simulate 2-second delay
	});
}

// function getData() {
// 	fetchData().then((data) => {
// 		console.log(data);
// 	});

// 	console.log("➡️ This runs before data is ready");
// }

// getData();

// async function getData() {
// 	console.log("⏳ Waiting for data...");
// 	const data = await fetchData(); // waits here until resolved
// 	console.log(data); // logs after 2 seconds
// }

// getData();

// let promise = new Promise(function (resolve, reject) {
// 	let success = true;

// 	if (success) {
// 		resolve("✅ Operation successful!");
// 	} else {
// 		reject("❌ Operation failed.");
// 	}
// });

// promise
// 	.then(function (result) {
// 		console.log(result); // ✅ Operation successful!
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});

// Definition for singly-linked list.
// function ListNode(val, next) {
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

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function (nums1, nums2) {
// 	let i = 0;
// 	let j = 0;
// 	let k = 0;
// 	let result = [];
// 	while (i < nums1.length && j < nums2.length) {
// 		if (nums1[i] <= nums2[j]) {
// 			result[k] = nums1[i];
// 			i++;
// 			k++;
// 		} else {
// 			result[k] = nums2[j];
// 			j++;
// 			k++;
// 		}
// 	}
// 	while (i < nums1.length) {
// 		result[k] = nums1[i];
// 		i++;
// 		k++;
// 	}
// 	while (j < nums2.length) {
// 		result[k] = nums2[j];
// 		j++;
// 		k++;
// 	}

// 	let mid = Math.floor(result.length / 2);
// 	if (result.length % 2 === 0) {
// 		return (result[mid - 1] + result[mid]) / 2;
// 	} else {
// 		return result[mid];
// 	}
// };

// let l1 = [1, 2];
// let l2 = [3, 4];
// console.log(findMedianSortedArrays(l1, l2)); // 2.5

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function (s) {
// 	if (s.length < 2) return s;

// 	let start = 0;
// 	let maxLength = 1;

// 	function expandAroundCenter(left, right) {
// 		while (left >= 0 && right < s.length && s[left] === s[right]) {
// 			if (right - left + 1 > maxLength) {
// 				start = left;
// 				maxLength = right - left + 1;
// 			}
// 			left--;
// 			right++;
// 		}
// 	}

// 	for (let i = 0; i < s.length; i++) {
// 		// Check for odd length palindromes
// 		expandAroundCenter(i, i);
// 		// Check for even length palindromes
// 		expandAroundCenter(i, i + 1);
// 	}

// 	return s.substring(start, start + maxLength);
// };

// console.log(longestPalindrome("babad"));

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	if (x > Math.pow(2, 31) - 1) return 0;
	let isNegative = x < 0 ? true : false;
	x = Math.abs(x);
	let result = 0;
	while (x > 0) {
		result *= 10;
		result += x % 10;
		x = Math.floor(x / 10);
	}
	return isNegative ? -result : result;
};

// console.log(reverse(-14547));
//1534236469
console.log(Math.pow(2, 31) - 1);
console.log(1534236469);
