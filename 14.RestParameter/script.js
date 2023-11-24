// Rest parameter

// function myFunc() {
// mencetak isinya apa saja
//   return `a = ${a}, myArgs = ${myArgs}`;
//   mengambil data jadi array denagn rest parameter ...myArgs
//   return myArgs;
//   jika mengambil data tanpa di jadikan array tanpa parameter
//   return arguments;
//   bisa menggunakan return arguments dengan cara
//   return Array.from(arguments); //cara 1
//   return [...arguments]; //cara 2
// }

// console.log(myFunc(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   // menggunakan for of
//   //   let total = 0;
//   //   for (const a of angka) {
//   //     total += a;
//   //   }
//   //   return total;
//   //   menggunakan high order functions
//   return angka.reduce((a, b) => a + b);
// }

// console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructuring
// const kelompok1 = ["pradika", "nando", "suryana", "suryana2", "suryana3"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);
// console.log(wakil);
// console.log(anggota);

// object destructuring
// const team = {
//   pm: "Sandhika",
//   frontEnd1: "Doddy",
//   frontEnd2: "Erick",
//   backEnd: "Fajar",
//   ux: "Pradika",
//   devOps: "Ferry",
// };

// const { pm, ...myTeam } = team;
// console.log(myTeam);
