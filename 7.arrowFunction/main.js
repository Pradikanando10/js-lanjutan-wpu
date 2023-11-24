// let panggilNama = (nama) => {
//     alert(`halo ${nama}`);
// }

// panggilNama('Pradika');
// console.log(panggilNama);

// const tampilNama = (nama) => {return `Halo ${nama}`;}
// // console.log('Pradika');

// console.log(tampilNama);

// const tampilNama = (nama, waktu) => {
//     return `selamat ${waktu}, ${nama}`;
// }

// console.log(tampilNama('Andreas', 'pagi'));

// let mahasiswa = ['pradika','bagus','andik'];

// // // let jumlahHuruf = mahasiswa.map(function (nama){
// // //     return nama.length;
// // // });

// // // console.log(jumlahHuruf);

// // // --Menggunakan arrow function

// // let jumlahHuruf = mahasiswa.map( nama => nama.length);

// // --Merubah menjadi object

// let jumlahHuruf = mahasiswa.map( nama => ({ nama: nama, jmlHuruf: nama.length}));
// console.log(jumlahHuruf);

// -----------------------------Part 2-----------------------------------
// -----------------------------konsep This -----------------------------

// contoh fucntion cunstrutor

// const mahasiswa = function() {
//     this.nama = 'Pradika';
//     this.umur = 20;
//     this.sayHello = function() {
//         console.log(`halo nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// };

// const pradika = new mahasiswa();

// -------------------------------Contoh pada arrow function---------------------------------

// -------------------------------Menggunakan cunstructor function ---------------------------------

// const mahasiswa = function() {
//     this.nama = 'Pradika';
//     this.umur = 20;
//     this.sayHello = () => {
//         console.log(`halo nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// };

// const pradika = new mahasiswa();

// -------------------------------Menggunakan object literal---------------------------------

// const mhs1 = {
//     nama : 'Pradika',
//     umur : 20,
//     sayHello : () => {
//         console.log(`halo nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// -------------------------------Contoh lain---------------------------------

const mahasiswa = function() {
    this.nama = 'Pradika';
    this.umur = 20;
    this.sayHello = function() {
        console.log(`halo nama saya ${this.nama}, dan saya ${this.umur} tahun`);
    }

    // setInterval( () => {
    //     console.log(this.umur++);
    // },1000);
};

const pradika = new mahasiswa();

// -------------------------------Contoh lain---------------------------------

const box = document.querySelector('.box');

box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle('size');
    setTimeout(() => {
        this.classList.toggle('caption');
    }, 600);
});