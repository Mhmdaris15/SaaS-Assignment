let mahasiswa = ['Aris', 'Fauzan', 'Raffi', 'Iqbal'];
console.log(mahasiswa.sort()); // ['Aris', 'Fauzan', 'Iqbal', 'Raffi']
console.log(mahasiswa.reverse()); // ['Raffi', 'Iqbal', 'Fauzan', 'Aris']

let nilaiMahasiswa = [90, 80, 75, 100];
console.log(nilaiMahasiswa.sort()); // [100, 75, 80, 90]
console.log(nilaiMahasiswa.reverse()); // [90, 80, 75, 100]

// Method Join
let nama = ['Aris', 'Fauzan', 'Raffi', 'Iqbal'];
console.log(nama.join(' - ')); // Aris - Fauzan - Raffi - Iqbal

// Method Push
nama.push('Rizky');
console.log(nama.join(' - ')); // Aris - Fauzan - Raffi - Iqbal - Rizky

// Method Pop
nama.pop();
console.log(nama.join(' - ')); // Aris - Fauzan - Raffi - Iqbal

// Method Shift
nama.shift();
console.log(nama.join(' - ')); // Fauzan - Raffi - Iqbal

// Method Unshift
nama.unshift('Aris');
console.log(nama.join(' - ')); // Aris - Fauzan - Raffi - Iqbal

// Method Splice
nama.splice(2, 0, 'Rizky', 'Rahmat'); // (index, delete, add) 
console.log(nama.join(' - ')); // Aris - Fauzan - Rizky - Rahmat - Raffi - Iqbal

// Method Slice
let nama2 = nama.slice(1, 3); // (indexAwal, indexAkhir)
console.log(nama2.join(' - ')); // Fauzan - Rizky

// Method Concat
let nama3 = nama.concat(nama2);
console.log(nama3.join(' - ')); // Aris - Fauzan - Rizky - Rahmat - Raffi - Iqbal - Fauzan - Rizky

// Method ForEach
let angka = [1, 2, 3, 4, 5, 6, 7, 8];
let tampilAngka = function(el) {
    console.log(el);
}
angka.forEach(tampilAngka);

let nilaiSiswa = [
    {nama: 'Aris', ipa: 90, bahasaIndonesia: 80, bahasaInggris: 75},
    {nama: 'Fauzan', ipa: 80, bahasaIndonesia: 75, bahasaInggris: 85},
    {nama: 'Raffi', ipa: 75, bahasaIndonesia: 80, bahasaInggris: 90},
    {nama: 'Iqbal', ipa: 70, bahasaIndonesia: 85, bahasaInggris: 80}
];

for(let i = 0; i < nilaiSiswa.length; i++) {
    document.write("Nama Siswa : " + nilaiSiswa[i].nama + "<br>");
    document.write("Nilai IPA : " + nilaiSiswa[i].ipa + "<br>");
    document.write("Nilai Bahasa Indonesia : " + nilaiSiswa[i].bahasaIndonesia + "<br>");
    document.write("Nilai Bahasa Inggris : " + nilaiSiswa[i].bahasaInggris + "<br>");
}
