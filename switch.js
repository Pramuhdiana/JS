//parseInt agar apa yang di masukan oleh user menjadi integer
// var angka = parseInt(prompt('masukan angka :'));

// var angka = prompt('masukan angka :');

// switch (angka) {

//     case '1' :
//         alert('anda memasukan angka 1');
//         break;
//         case '2' :
//             alert ('anda memasukan angka 2');
//             break;
//             case '3' :
//                 alert ('anda memasukan angka 3');
//                 break;
//                 default :
//                 alert('angka yang anda masukan bukan 1,2 atau 3');
//                 break;
// }

var item = prompt('masukan nama makanan atau minuman : \n (nasi,daging,susu,burger,softdrink)');

switch (item) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('makanan / minuman sehat');
        break; //fungsi break untuk menghentikan program lalu keluar dari case
    case 'burger' :
    case 'softdrink' :
        alert('makanan / minuman kurang sehat');
        break;
    default :
        alert('kata tidak ditemukan');
        break;
}