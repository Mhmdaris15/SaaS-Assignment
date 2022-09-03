let nilai1, nilai2, hasil;
nilai1 = 8;
nilai2 = 20;
hasil = !(nilai1 === 9) ? 'Nilai Benar' : 'Nilai Salah';

document.write("Nilai 1 = " + nilai1 + "<br>");
document.write("Nilai 2 = " + nilai2 + "<br>");
document.write("Hasil : " + hasil + "<br>");

for (let ulang = 1; ulang <= 10; ulang++){
    if (ulang == 6 || ulang == 6) continue;
    else if (ulang == 10) break;
    document.write(ulang + " ");    
}