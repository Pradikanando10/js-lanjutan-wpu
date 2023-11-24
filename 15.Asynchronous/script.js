// tidak asynchronous
console.log("baris 1");
console.log("baris 2");
console.log("baris 3");

// contoh menggunakkan asynchronous
console.log("baris 1");
setTimeout(() => {
  console.log("baris 2");
}, 500);
console.log("baris 3");
