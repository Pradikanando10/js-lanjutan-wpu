const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// jika pakai for

// const newAngka = [];
// for(let i= 0; i<= angka.length; i++) {
//     if(angka[i]>=3){
//         newAngka.push(angka[i]);
//     }
// }

// jika pakai filter
// Metode filter() digunakan untuk membuat array baru yang hanya berisi elemen-elemen dari array asal yang memenuhi kondisi tertentu.

// const newAngka = angka.filter(function(a) { //keterangan: a yang ada di dalam function adalah isi dari array angka
//     return a >= 3;
// });

// console.log(newAngka);

// jika pakai map
// Metode map() digunakan untuk membuat array baru dengan mengaplikasikan fungsi tertentu pada setiap elemen array asal.

// const newAngka = angka.map(function(a) {
//     return a * 2;
// });
// console.log(newAngka);

// jika pakai reduce
// Metode reduce() digunakan untuk mereduksi elemen-elemen dalam array menjadi satu nilai tunggal dengan menjalankan fungsi tertentu pada setiap elemen dan mengakumulasikan hasilnya.
// hasil -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9

// const newAngka = angka.reduce(
//   (accumulator, currentvalue) => accumulator + currentvalue,
//   0
//   //pada accumulator nilai awal yang di berikan adalah 0 dan pada currentvalue loop nilai element pada array maka di tambahkan contoh nilai accumulator = 0 dan currentvalue = -1 maka nlai akan menjadi -1 dan di tambahkan 8 = 7 dan seterusnya
// );
// console.log(newAngka);

// menggunakan metode chaining

// const hasil = angka.filter(a => a > 5) // 9, 7, 7
//  .map(a => a * 3) // 24, 27, 27
//  .reduce((acc, cur) => acc + cur, 0); // 78

// console.log(hasil);

// function jumlah(){
//     return 24+27+27;
// }

// Latihan-----------------
// ambil semua video dan merubah menjadi array
const videos = Array.from(document.querySelectorAll("[data-duration]"));

// ambil java scipt lanjutan / keterangan video adalah 1 elemn dari array videos / includes adalah terdapat apa saja
let jsLanjut = videos
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))

  // ambil durasi masing masing video
  .map((item) => item.dataset.duration)

  // ubah durasi menjadi float, ubah menit menjasi detik
  .map((waktu) => {
    const parts = waktu.split(":").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // jumlahkan semua detik
  .reduce((total, detik) => total + detik);

// ubah formatnya jam menjadi detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simapan di dom
const jmlVideo = videos.filter((video) =>
  video.textContent.includes("JAVASCRIPT LANJUTAN")
).length;

const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jmlVideo} video`;

const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

console.log(jsLanjut);
