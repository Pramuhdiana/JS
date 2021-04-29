var ulangi= true;
while (ulangi) { //looping

//menyimpan inputan dari player
var p = prompt('Pilih : gajah, semut, orang');


//menyimpan pilihan dari computer
var comp = Math.random(); //angka random

if (comp < 0.34) {
    comp = 'gajah';
} else if ( comp >= 0.34 && comp < 0.50) {
    comp = 'orang';
} else {
    comp = 'semut';
}

//menentukan peraturannya
var hasil = '';
if(p == comp) {
    hasil = 'Seri';
} else if (p == 'gajah') {
    // if(comp == 'orang') {
    //     hasil = 'Menang';
    // } else {
    //     hasil = 'Kalah';
    // }

//memakai ternary lebih efisien
hasil = (comp == 'orang') ? 'Menang' : 'Kalah'; //jika komputer pilih orang truenya menang falsenya kalah
} else if (p == 'orang') {
    hasil = (comp == 'semut') ? 'Menang' : 'Kalah';
} else if (p == 'semut') {
    hasil = (comp == 'gajah') ? 'Menang' : 'Kalah';
}

else {
    hasil = 'tidak ada pilihan';
}

//menampilkan hasilnya
alert('Anda memilih '+ p +' dan komputer pilih ' + comp + ' hasilnya ' + hasil);

ulangi = confirm('ulangi ?');
}
alert('terimakasih');