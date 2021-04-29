//alert adalah popup sederhana pada javascript
// alert('hello ');
// alert('saya ');
// alert('alert ');

//prompt adalah opoup yang bisa di isi
// var nama = prompt('masukan nama ');
// //agar menampilkan yang diisi oleh user
// alert(nama);

// //confirm digunakan untuk meminta konfirmasi kepada user dengan yang di lakukan
// var yOrNo = confirm('yes untuk oybang no untuk bobox');

// //pengkondisian jika yes dan no
// if(yOrNo === true) {
//     alert('mantap oybang');
// } else {
//     alert('haduh bobox');
// }

// alert('selamat datang');
// var lagi = true;

// //cara pengulangan dengan while + confirm
// while(lagi) {
//     var nama = prompt('nama');
//     alert('halo ' + nama);

//     lagi= confirm('coba lagi tidak ?');
// }
// //jika menekan tidak/batal maka akan keluar dalam looping
// alert('terimakasih');

//pengulangan menggunakan for sebanyak 5 kali
//  alert('mulai');
//  for(var i = 0; i<=5; i++){
//      alert('pengulangan ' + i);
//  }
//  alert('selesai');

//pengkondisian menggunakan if else
var angka = prompt ('masukan angka'); //masukan angka (input)

if(angka % 2 === 0) {
    alert(angka + 'GENAP'); //jika sisa dibagi 0 maka menampilkan ini
} else {
    alert(angka + 'GANJIL'); //jika sisa dibagi tidak 0 maka akan menampilkan ini
}
