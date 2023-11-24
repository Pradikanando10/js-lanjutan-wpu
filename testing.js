// let result = [];

// for (let i = 0; i < 10; i++) {
//   if (i % 2 === 0) {
//     result.push(i);
//   }
// }
// console.log(result);

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} adalah bilangan genap`);
//   } else {
//     console.log(`${i} adalah bilangan ganjil`);
//   }
// }

function isPrime(number) {
  if (number <= 1) return false; // 0 dan 1 bukan bilangan prima

  // Lakukan iterasi dari 2 hingga akar kuadrat dari number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Jika bisa dibagi oleh i, bukan bilangan prima
    }
  }

  return true; // Jika tidak ada pembagi lain selain 1 dan dirinya sendiri, itu adalah bilangan prima
}

// Contoh penggunaan:
for (let i = 1; i <= 20; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
