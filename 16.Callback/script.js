// Callback adalah sebuah function yang dikirimkan sebagai parameter pada function lainya
// Arti lainya sebuah function yang di eksekusi setelah fungsi lain selesai di jalankan

// contoh synchronous callbacks
function halo(nama) {
  alert(`Halo, ${nama}`);
}

// keterangan function di bawah ini : parameter callback baris 10 adalah function halo(), lalu setelah mengisikan prompt baris 11 akan menjalankan baris 12 (function halo()) dengan mengirimkan parameter nama ke function halo() baris 5 dengan parameter callback baris 10;
function tampilkanPesan(callback) {
  const nama = prompt("Masukan nama: ");
  callback(nama);
}

tampilkanPesan(halo);

// contoh tidak pakai function
// tampilkanPesan((nama) => {
//   alert(`halo, ${nama}`);
// });

// const mhs = [
//   {
//     nama: "Shandika Galih",
//     nrp: "12345",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 1,
//   },
//   {
//     nama: "Doddy",
//     nrp: "23456",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 2,
//   },
//   {
//     nama: "Erik",
//     nrp: "34567",
//     jurusan: "Teknik Informatika",
//     idDosenWali: 3,
//   },
// ];

// mhs.forEach((m) => console.log(m.nama));

// Asyncronous callback
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };

//   xhr.open("GET", url);
//   xhr.send();
// }

// getDataMahasiswa(
//   "16.Callback/mahasiswa.json",
//   (results) => {
//     console.log(JSON.parse(results));
//   },
//   () => {}
// );

// lainnya
// getDataMahasiswa(
//   "16.Callback/mahasiswa.json",
//   (results) => {
//     console.log(JSON.parse(results));
//   },
//   () => {
//     console.error("Gagal mendapatkan data mahasiswa.");
//   }
// );
