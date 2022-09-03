let nama, nilai, grade, ket;
nama = "Muhammad Aris Septanugroho";
nilai = 90;

if (nilai <= 50) grade = "E";
else if (nilai <= 60) grade = "D";
else if (nilai <= 75) grade = "C";
else if (nilai <= 85) grade = "B";
else grade = "A";

if (nilai <= 75) ket = "Maaf Anda tidak lulus";
else ket = "Selamat Anda lulus";

document.write('Nama : ' + nama + '<br>');
document.write('Nilai : ' + nilai + '<br>');
document.write('Grade : ' + grade + '<br>');
document.write('Keterangan : ' + ket + '<br>');

document.write("===========================================================================================================================<br>");

// Switch Case
let menu, makanan, minuman, harga, keterangan;
menu = 2;
switch (menu) {
    case 1:
        makanan = "Ayam Goreng";
        minuman = "Soft Drink";
        harga = 'Rp' + 25000;
        keterangan = "Selamat Menikmati";
        break;
    case 2:
        makanan = "Ayam Bakar";
        minuman = "Jus Strawberry";
        harga = 'Rp' + 30000;
        keterangan = "Selamat Menikmati";
        break;
    case 3:
        makanan = "Ayam Geprek";
        minuman = "Es Teh Manis";
        harga = 'Rp' + 27000;
        keterangan = "Selamat Menikmati";
        break;
    default:
        makanan = "-";
        minuman = "-";
        harga = "-";
        keterangan = "Menu yang anda pilih tidak tersedia";
        break;
}

document.write('Menu yang anda pilih : ' + menu + '<br>');
document.write('Makanan : ' + makanan + '<br>');
document.write('Minuman : ' + minuman + '<br>');
document.write('Harga : ' + harga + '<br>');
document.write('Keterangan : ' + keterangan);
