// --------------------------------Contoh Program--------------------------------

// contoh 1

// function kerjakanTugas(mataKuliah, selesai){
//     console.log(`Mulai mengerjakan tugas ${mataKuliah}`);
//     selesai();
// };

// function selesai() {
//     alert("Selesai mengerjakan tugas");
// }

// kerjakanTugas('Pemrograman web', selesai);

// contoh 2

// let count = 1,
//   total = 0;

// while (count <= 10) {
//   total += count;
//   count += 1;
// }

// console.log(total);

// contoh 3

// function repeatLog(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }
// }

// repeatLog(10);

// contoh 4

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(10, console.log);
