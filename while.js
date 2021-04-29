// pengulangan menggunakan while
// var i = 1;
// while(i<=5) {
//     console.log('halow');
//     i++;
// }

var ulang = true;
while(ulang) {
    console.log('Hallo');
    ulang = confirm('lagi ga ?'); //agar pengulangan bisa di atur oleh user dengan menekan ok
}