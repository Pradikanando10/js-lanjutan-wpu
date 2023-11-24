// Memanggil api dari jquery
// $.ajax({
//   url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//   success: (movies) => console.log(movies),
// });

// Memanggil api dari javascript vanila
// let xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   }
// };

// xhr.open("GET", "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers");
// xhr.send();

// Memanggil api dari javascript modern
// fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers")
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// ----------------------------------

// Promise
// Adalah object yang mepresentasikan keberhasilan/kegagalan sebuah event yang asyncronous di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fuldilled / rejected / pending)
// callback (resolve / reject /finally)
// di dalam promise ada aksi jika janji terpenuhi dan tidak terpenuhi
// aksi (then / catch)

// ----------------------------------

// Contoh membuat promise paling sederhana
// let ditepati = true;
// const janji1 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     resolve(`Janji telah di tepati!`);
//   } else {
//     reject(`Ingkar janji..`);
//   }
// });

// console.log(janji1);

// menggambil menggunakan then
// response adalah apapun yang di hasilkan dari function resolve(baris:38),
// jadi resolve pada Promise(40) itu di umpamakan sebagai argumen dan response pada(54,55) itu di umpamakan sebagai parameter, untuk mengambil nilai dari promise contoh : jika true maka resolve(`Janji telah di tepati!`); akan di kirim ke parameter resoleve dan akan dikirim ke .then((response) => console.log(`OK ${response}`))
// janji1
//   .then((response) => console.log(`OK ${response}`))
//   .catch((response) => console.log(`NOT OK ${response}`));

// ----------------------------------

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa waktu");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Tidak ditepati setelah beberapa waktu");
//     }, 2000);
//   }
// });

// console.log("Mulai");
// // dibawah ini adalah proses dari asynchronous
// console.log(janji2.then(() => console.log(janji2)));
// janji2
//   .then((response) => console.log(`OK : ${response}`))
//   .catch((response) => console.log(`Not OK : ${response}`));

// // menggunakan method finally
// janji2
//   .finally(() => console.log(`Selesai menunggu`))
//   .then((response) => console.log(`OK : ${response}`))
//   .catch((response) => console.log(`Not OK : ${response}`));
// console.log("Selesai");

// ----------------------------------

// Promise.all
// jika memppunyai promis yang ingin di jalankan sekaligus
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Avenger",
        sutradara: "Sandhika",
        pemeran: "Doddy, Erik",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bandung",
        temp: 26,
        kondisi: "Cerah berawan",
      },
    ]);
  }, 500);
});

// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

// jika di jalankan sekaligus
Promise.all([film, cuaca])
  // .then((response) => console.log(response));
  // jika array di pisah
  .then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
