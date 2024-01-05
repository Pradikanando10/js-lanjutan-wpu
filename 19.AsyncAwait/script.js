// contoh promise ---------------
// const coba = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("selesai");
//   }, 2000);
// });
// console.log(coba);
// coba.then(() => console.log(coba));

// contoh ---------------
function cobaPromise() {
  return new Promise((resolve, reject) => {
    const waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve("selesai");
      }, waktu);
    } else {
      reject("kelamaan!");
    }
  });
}

// pake then dan catch ---------------
// const coba = cobaPromise();
// coba.then(() => console.log(coba)).catch(() => console.log(coba));

// pake async await ---------------
async function cobaAsync() {
  try {
    const coba = await cobaPromise();
    console.log(coba);
  } catch (e) {
    console.log(e);
  }
}

// memanggil function
cobaAsync();
