// Aritmatika
function Aritmatika() {
    let operasi = prompt('Masukkan Operasi Matematika (Pertambahan/Pengurangan/Perkalian/Pembagian/Modulus) ? ');
    let multiInput = ["Pertambahan", "Pengurangan", "Perkalian", "Pembagian"];
    if (multiInput.includes(operasi)) {
        let arr = [];
        let many = prompt('Masukkan banyaknya angka yang akan dihitung (minimal 2) ');
        for (let i = 0; i < many; i++) {
            arr.push(prompt('Masukkan angka ke-' + (i + 1) + ' dari ' + many));
        }
        alert(multiOperation(operasi, arr));
    } else {
        let num1 = prompt('Masukkan angka pertama ');
        let num2 = prompt('Masukkan angka kedua ');
        if (operasi == "Modulus") {
            alert(`Modulus dari ${num1} % ${num2} = ${num1 % num2}`);
        }
    }
}

function multiOperation(operation, nums) {
    let result, ops;
    if (operation == "Pertambahan") {
        result = nums.reduce((a, b) => a + b);
        ops = '+';
    } else if (operation == "Pengurangan") {
        result = nums.reduce((a, b) => a - b);
        ops = '-';
    } else if (operation == "Perkalian") {
        result = nums.reduce((a, b) => a * b);
        ops = '*';
    } else if (operation == "Pembagian") {
        result = nums.reduce((a, b) => a / b);
        ops = '/';
    }
    return `Hasil dari ${nums.join(ops)} = ${result}`;
}

// Bangun Datar

function luasLingkaran(r) {
    r = parseFloat(r);
    return Math.PI * r * r;
}

function luasPersegi(s) {
    s = parseFloat(s);
    return s * s;
}

function luasSegitiga(a, t) {
    a = parseFloat(a);
    t = parseFloat(t);
    return (a * t) / 2
}

function luasTrapesium(a, b, t) {
    a = parseFloat(a);
    b = parseFloat(b);
    t = parseFloat(t);
    return t / 2 * (a + b);
}

function luasLayangLayang(d1, d2) {
    d1 = parseFloat(d1);
    d2 = parseFloat(d2);
    return (d1 * d2) / 2
}

function luasJajarGenjang(a, t) {
    a = parseFloat(a);
    t = parseFloat(t);
    return a * t;
}

function luasBelahKetupat(d1, d2) {
    d1 = parseFloat(d1);
    d2 = parseFloat(d2);
    return (d1 * d2) / 2;
}

function luasPersegiPanjang(p, l) {
    p = parseFloat(p);
    l = parseFloat(l);
    return p * l;
}

function luasBangunDatar() {
    let pilihan = ['Lingkaran',
        'Persegi',
        'Segitiga',
        'Trapesium',
        'LayangLayang',
        'JajarGenjang',
        'BelahKetupat',
        'PersegiPanjang'
    ]
    let oneParams = ['Persegi', 'Lingkaran'];
    let twoParams = ['Segitiga', 'LayangLayang', 'JajarGenjang','BelahKetupat', 'PersegiPanjang'];
    let threeParams = ['Trapesium'];

    let bangunDatar = prompt(`Hitung Luas Bangun Datar ${pilihan.join('/')}`);

    if(oneParams.includes(bangunDatar)){
        if (bangunDatar == "Persegi") {
            let arg1 = prompt('Sisi');
            alert(`Luas ${bangunDatar} = ${luasPersegi(arg1)}` );
        }
        else if (bangunDatar == "Lingkaran") {
            let arg1 = prompt('Radius');
            alert(`Luas ${bangunDatar} = ${luasLingkaran(arg1)}` );
        }
    } else if (twoParams.includes(bangunDatar)) {
        if (bangunDatar == "Segitiga") {
            let arg1 = prompt("Alas");
            let arg2 = prompt("Tinggi");
            alert(`Luas ${bangunDatar} = ${luasSegitiga(arg1, arg2)}` )
        }
        else if (bangunDatar == "LayangLayang") {
            let arg1 = prompt("Diameter 1");
            let arg2 = prompt("Diameter 2");
            alert(`Luas ${bangunDatar} = ${luasLayangLayang(arg1, arg2)}` )
        }
        else if (bangunDatar == "JajarGenjang") {
            let arg1 = prompt("Alas");
            let arg2 = prompt("Tinggi");
            alert(`Luas ${bangunDatar} = ${luasJajarGenjang(arg1, arg2)}` )
        }
        else if (bangunDatar == "BelahKetupat") {
            let arg1 = prompt("Diameter 1");
            let arg2 = prompt("Diameter 2");
            alert(`Luas ${bangunDatar} = ${luasBelahKetupat(arg1, arg2)}` )
        }
        else if (bangunDatar == "PersegiPanjang") {
            let arg1 = prompt("Panjang");
            let arg2 = prompt("Lebar");
            alert(`Luas ${bangunDatar} = ${luasPersegiPanjang(arg1, arg2)}` )
        }
        
    } else if (threeParams.includes(bangunDatar)){
        let arg1 = prompt("A");
        let arg2 = prompt("B");
        let arg3 = prompt("Tinggi");
        alert(`Luas ${bangunDatar} = ${luasTrapesium(arg1, arg2, arg3)}` )
    } else {
        alert(`Operasi Bangun Datar ${bangunDatar} Tidak ada`);
    }

}

luasBangunDatar();