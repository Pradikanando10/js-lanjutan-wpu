// keterangan pada kasus ini membuat sebuah array dengan nama coba lalu membuat variable dengan nama arrray [a,b,c] lalu variable coba dimasukan pada variable [a,b,c] untuk mencetak langsung array pada variable coba

// pada kasus array

// const coba = ["satu", "dua", "tiga"];

// contoh mencetak array biasa
// console.log(coba[0]);

// contoh mencetak array pada kasus ini
// const [a, b, c] = coba;
// console.log(a);
// console.log(b);
// console.log(c);

// pada kasus object
// const mhs = {
//   nama: "Pradika",
//   nrp: "3121",
//   umur: "20",
// };

// console.log(mhs.nama);

// const { nama, nrp, umur } = mhs;
// console.log(`Nama : ${nama}`);
// console.log(`NRP: ${nrp}`);
// console.log(`Umur: ${umur}`);

// mengubah nilai

// let a = 1;
// let b = 2;

// console.log(a);
// console.log(b);

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// return value pada function

// function coba(n, u) {
//   return [n, u];
// }

// const namaOrang = "Nando";
// const umurOrang = 20;
// const data = coba(namaOrang, umurOrang);

// const [nama, umur] = data;
// console.log(`Nama: ${nama}`);
// console.log(`Umur : ${umur}`);

// rest parameter

// const [a, ...values] = [1, 2, 3, 4, 5];

// console.log(a);
// console.log(values[0]);

// console.log(values);

// Megambil field pada object, setelah dikirim sebagai parameter untuk function

// const mhs = {
//   id: 123,
//   nama: "Pradika",
//   nrp: 3121,
//   umur: 20,
// };

// jadi parameter {id} adalah di ambil dari object mhs lalu di bongkar satu satu atau bisa sesuai kebutuhan contoh butuh semuanya ya bisa{id, nama, nrp, umur}, atau ambil dua saja ya bisa

// function getIdMhs({ id, nama, nrp, umur }) {
//   return `${id}, ${nama}, ${nrp}, ${umur}`;
// }

// console.log(getIdMhs(mhs));

// part 2
// destruction return value

// function penjumlahanPerkalihan(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const jumlah = penjumlahanPerkalihan(2, 3)[0];
// const kali = penjumlahanPerkalihan(2, 3)[1];

// console.log(jumlah);
// console.log(kali);

// const [jumlah, kurang, kali, bagi] = penjumlahanPerkalihan(2, 3);

// console.log(jumlah);
// console.log(kali);

// const [jumlah, kurang, kali, bagi] = penjumlahanPerkalihan(2, 3);

// destruction function arguments

const mhs1 = {
  nama: "Pradika",
  umur: 20,
  email: "nando@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

// function cetakMhs(nama, umur) {
//   return `Halo nama saya ${nama} saya berumur ${umur} tahun`;
// }

// const cetak = cetakMhs(mhs1.nama, mhs1.umur);

// console.log(cetak);

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo nama saya ${nama} saya berumur ${umur} tahun dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));
