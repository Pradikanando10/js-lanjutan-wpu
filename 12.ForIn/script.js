// For Of
// Array
// const mhs = ["Pradika", "Nando", "Suryana"];

//loop for
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// loop forEach
// mhs.forEach((m) => console.log(m));

// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke : ${i + 1}`);
// });

// loop forOf
// for (const m of mhs) {
//   console.log(m);
// }

// ngakalin agar ada index nomornya, for of tidak mempunyai index nomor, contoh nomor adalah index ke 0, 1, 2 dan seterusnya(contoh pada forEach nomor 12)
// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke : ${i + 1}`);
// }

// String
// const nama = "Pradika";

// for (const n of nama) {
//   console.log(n);
// }

// Node List
// const liNama = document.querySelectorAll(".nama");
// console.log(liNama);

// mengambil menggunakan forEach
// liNama.forEach((n) => console.log(n.innerHTML));

// menggunakan forof

// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// Arguments

function jumlahkanAngka() {
  //   return arguments.reduce((a, i) => a + i);
  //   arguments.forEach((a) => (jumlah += a));
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
  }
  return jumlah;
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// For In

// const mhs = {
//   nama: "Pradika",
//   umur: 20,
//   alamat: "mojokerto",
// };

// for (m in mhs) {
//   console.log(`${m} : ${mhs[m]}`);
// }
