// cara membuat object pada javascript
// 1.object literal
// let mahasiswa1 = {
//     nama: 'imam',
//     energy:10,
//     makan: function (porsi) {
//         this.energy =this.energy + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);  
//     }
// }

// let mahasiswa2 = {
//     nama: 'kamal',
//     energy:10,
//     makan: function (porsi) {
//         this.energy =this.energy + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!`);  
//     }
// }





// 2.function Declaration 
function Mahasiswa(nama, energi) {
    let mahasiswa = {};
    mahasiswa.nama =nama;
    mahasiswa.energi =energi; 

    mahasiswa.makan = function(porsi) {
        this.energi += porsi;
        console.log(`Hallo ${this.nama}, selamat makan!`); 
    }

    mahasiswam

    return mahasiswa;
} 

let imam = Mahasiswa('Imam', 10);
let kamal = Mahasiswa('Kamal', 20);