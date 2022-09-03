document.write('Pengulangan Menggunakan For <br>');
for(let i = 7; i >= -5; i--){
    document.write(i + ' ');
}

document.write('<br>Pengulangan Menggunakan While <br>');
i = 1;
while(i <= 10){
    document.write(i + ' ');
    i++;
}

document.write('<br>Pengulangan Menggunakan Do While <br>');
i = 10;
do {
    document.write(i + ' ');
    i--;
} while(i >= 1);

document.write('<table border=1 cellspacing=0 cellpadding=5 align=center width=1200>');
document.write('<caption>Membuat Table menggunakan Javascript</caption>');
for (let b = 1; b <= 10; b++) {
    document.write('<tr>');
    for (let k = 1; k <= 10; k++) {
        document.write('<td> Baris ke ' + b + ' dan  kolom ke ' + k + '</td>');
    }
    document.write('</tr>');
}
document.write('</table>');