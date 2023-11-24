// 1. object literals
// Problem : tidak efektif untuk object yang banyak
// let mahasiswa = {
//     nama: 'Pradika',
//     energy: 10,
//     makan: function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, selamat makan, dan Energi saat ini ${this.energy}`);
//     }
// };



// 2. function declaration //object create
// const methodMahasiwa = {
//     makan: function (porsi){
//         this.energy += porsi;
//         console.log(`Halo ${this.nama}, selamat makan`);
//     },
    
//     main: function (jam){
//         this.energy -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },

//     tidur: function (jam){
//         this.energy += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur`);
//     }
// }

// function Mahasiswa(nama, energy) {
//     let mahasiswa = Object.create(methodMahasiwa);
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     return mahasiswa;
// }

// let pradika = Mahasiswa('Pradika', 10);
// let doddy = Mahasiswa('Doddy', 20);

// 3. cunstructor function
// keyword new
function Mahasiswa(nama, energy) {
    this.nama = nama;
    this.energy = energy;

    this.makan = function(porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    }

    this.main = function(jam) {
        this.energy -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!`);
    }
}

let pradika = new Mahasiswa('Pradika', 10);
let doddy = new Mahasiswa('Doddy', 20);

// 4. object.create
