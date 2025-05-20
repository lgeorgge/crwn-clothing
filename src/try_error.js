// const func = async () => {
// 	return 5;
// };

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

async function getData() {
	console.log("⏳ Waiting for data...");
	const data = await fetchData(); // waits here until resolved
	console.log(data); // logs after 2 seconds
}

getData();

let promise = new Promise(function (resolve, reject) {
	let success = true;

	if (success) {
		resolve("✅ Operation successful!");
	} else {
		reject("❌ Operation failed.");
	}
});

promise
	.then(function (result) {
		console.log(result); // ✅ Operation successful!
	})
	.catch(function (error) {
		console.log(error);
	});
