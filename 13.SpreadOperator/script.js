// Spread Operator
// Memecah iterables menjadi single elemen

// const mhs = ["pradika", "nando", "suryana"];
// console.log(mhs);
// console.log(...mhs); //di pecah array mhsnya
// console.log(...mhs[0]); //di pecah variable pradika menjadi huruf terpisah

// kapan digunakanya yaitu untuk menggabungkan 2 array

// const mhs = ["pradika", "nando", "suryana"];
// const dosen = ["shandika", "doddy", "erik"];

// const orang1 = [mhs, dosen]; //contoh salah nanti jadinya array di dalam array
// const orang2 = [...mhs, ...dosen]; //penggabunagn array
// const orang3 = [...mhs, "aji", ...dosen]; //penggabunagn array, lalu dapat menambahkan array lagi di tengah

// cara lain dengan concat

// const orang4 = mhs.concat(dosen); //penggabunagn array dengan concat, tidak dapat menambah kan array di tengah seperti contoh const orang3

// console.log(orang3);

// untuk meng copy array

// contoh salah
// const mhs = ["pradika", "nando", "suryana"];
// const mhs2 = mhs;
// mhs1[0] = "fajar";
// console.log(mhs2);

// contoh benar

// const mhs3 = [...mhs];
// mhs3[0] = "fajar";
// console.log(mhs3);

// contoh lain
// const liMhs = document.querySelectorAll("li");
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].innerHTML);
// }
// console.log(mhs);
// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
// console.log(huruf);
nama.innerHTML = huruf;
