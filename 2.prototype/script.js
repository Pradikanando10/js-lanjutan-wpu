function Mahasiswa(nama, energy){
    // let mahasiswa = Object.create(methodMahasiwa);
    this.nama = nama;
    this.energy = energy;
}

// pengganti let this = Object.create(Mahasiswa.prototype);
Mahasiswa.prototype.makan = function(porsi){
    this.energy += porsi;
    return `Halo ${this.nama}, selamat makan!`;
}

Mahasiswa.prototype.main = function(jam){
    this.energy += jam;
    return `Halo ${this.nama}, selamat main!`;
}

Mahasiswa.prototype.tidur = function(jam){
    this.energy += jam;
    return `Halo ${this.nama}, selamat tidur!`;
}

let pradika = new Mahasiswa('pradika', 10);

// versi class
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan = function(porsi){
//         this.energi += porsi;
//         return `Halo ${this.nama}, selamat makan!`;
//     }
    
//     main = function(jam){
//         this.energi -= jam;
//         return `Halo ${this.nama}, selamat main!`;
//     }
    
//     tidur = function(jam){
//         this.energi += jam;
//         return `Halo ${this.nama}, selamat tidur!`;
//     }
// }

// let pradika = new Mahasiswa('Pradika', 10);