function tambah () {
var hasil = 0;

    for(var i=0; i<arguments.length; i++) {
        hasil += arguments[i];//array yang ada pada javascript
    }

    return hasil; //emngembalikan nilai hasil

}

var coba = tambah (1,2,3); //menggunakan function

console.log(coba); //menampiklkan di console
