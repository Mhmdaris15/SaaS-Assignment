let manusia = {
    nama: 'Aris',
    usia: 20,
    alamat: "Jl. Raya Cibaduyut No. 1 Bandung",
    hobi: ['Membaca', 'Menulis', 'Menggambar']
};

document.write(manusia.hobi[1] + "<br>");

let bidangDatar = {
        namaBidang: '',
        luasBidang: function (p, l) {
            return p * l;
    }
};

let persegiPanjang = Object.create(bidangDatar);
persegiPanjang.namaBidang = 'Persegi Panjang';
persegiPanjang.p = 10;
persegiPanjang.l = 5;
document.write(persegiPanjang.namaBidang + "<br>");
document.write(persegiPanjang.luasBidang(persegiPanjang.p, persegiPanjang.l));

let ruangKelas = {
    namaKelas: "XII SIJA 1",
    siswa: {
        nis: 123456,
        namaSiswa: "Zhao Liang",
        jk: "Laki-laki",
    }
};

document.write("Nama Kelas " + ruangKelas.namaKelas + "<br>");
document.write("NIS " + ruangKelas.siswa.nis + "<br>");
document.write("Nama Siswa " + ruangKelas.siswa.namaSiswa + "<br>");
document.write("Jenis Kelamin " + ruangKelas.siswa.jk + "<br>");