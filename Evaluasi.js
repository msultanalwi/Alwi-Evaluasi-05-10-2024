//  1.Tipe Data
//  Jelaskan perbedaan antara tipe data number, string, dan boolean dalam JavaScript. Berikan contoh untuk masing-masing tipe data tersebut.
//  Jawab : 
//  1. Number adalah tipe data angka
// contoh :
var numberx = 1
var numbery = 2
console.log (numberx + numbery)
// maka outputnya 3
//  2. String adalah tipe data yang menggunakan tanda kutip/ double quote "", bisa juga menggunakan tanda kutip 1/ one quote ''
//  contoh : 
    'Saya Pergi main "futsal"'
    // diperbolehkan karna kata futsal menggunakan '' untuk escape
    "saya pergi solat jum\"at"
    // diperbolekan menggunakan escape \
//  3. boolean adalah tipe data yang hanya menghasilkan truthy maupun falsy


//  2.Variabel
//  Apa itu variabel dalam JavaScript? Jelaskan perbedaan antara var, let, dan const beserta contoh penggunaan masing-masing
//  jawab :
//  1.Variable adalah wadah untuk menyimpan nilai tipe data
//  2. perbedaan var, let, dan const adalah
//  var : a. function scope / global Javascript itu sendiri
//        b. bisa di deklarasikan berkali-kali/ berulang-ulang
//        c. var dapat diubah/ diakses functionnya dari luar dengan mudah ketika berkolaborasi dengan rekan kerja
//        d. hoisted 
//  let : a. block scope {} 
//        b. tidak bisa dideklarasikan berkali-kali (harus dideklarasikan sebelum digunakan).
//           Hanya boleh di deklarasikan ulang pakai {}
//        c. membantu var agar tidak mudah diakses dari luar / meminimalisir perubahan statement tetapi masih dapat dirubah objectnya
//  const : a. block scope {}
//          b. tidak bisa dideklarasikan berkali-kali (harus dideklarasikan sebelum digunakan).
//           Hanya boleh di deklarasikan ulang pakai {}
//          c. membantu var agar tidak mudah diakses dari luar / meminimalisir perubahan statement dan nilainya benar-benar tidak dapat diubah
//


//  3.Operator Aritmatika
//  Buatlah kode JavaScript yang melakukan operasi penjumlahan, pengurangan, perkalian, dan pembagian dari dua angka yang ditentukan dalam variabel. Jelaskan hasil dari setiap operasi.
// jawab :

var nilai1 = parseInt(prompt("Enter Number"))
// variable kondisi 1 = untuk membaca data dari string selain non-number (menampilkan popup dari "Enter Number")
var operator = prompt("Enter Calculation Sign + - * /")
// variable aksi = menampilkan popup dari "Enter Calculation Sign + - * /""
var nilai2 = parseInt(prompt("Enter Number"))

if (operator == '+')
// if itu untuk kondisi benar 
   {
// gunakan { } sebagai aksi
    alert(nilai1 + nilai2)
}else if (operator == '-'){
// else if untuk kondisi benar lainnya
    alert(nilai1-nilai2)
}else if (operator == '*'){
    alert(nilai1*nilai2)
}else if (operator == '/'){
    alert(nilai1/nilai2)
}

alert("done?")
alert("exit")

//  4. Operator Penugasan
//  Apa yang dimaksud dengan operator penugasan dalam JavaScript? Berikan contoh kode yang menggunakan operator penugasan untuk mengupdate nilai variabel.
//  jawab : operator penugasan yang menugaskan suatu variable
// +=, -=, *=, /=
// contoh : var 7+= maka artinya var + 7
var nilai10 = 4
nilai10 += 5
nilai10 -= 5
nilai10 *= 5
nilai10 /= 5
console.log(nilai10)
// maka artinya 4 + 5 - 5 * 5 / 5 
// maka outputnya  4


//  5.Operator Logika
// Jelaskan bagaimana operator logika bekerja dalam JavaScript. Berikan contoh penggunaan operator logika AND, OR, dan NOT dalam pernyataan.
// jawab : operator logika adalah operator yang menjalankan program dengan menggunakan logika

// && adalah operator yang menilai jika salah satunya false maka hasilnya false
//  contoh : 
var umur = 19
var kuliah = false
console.log ( umur <= 19 && kuliah == false)
//maka outputnya false

// || adalah operator yang menilai jika salah satunya benar maka hasilnya benar
// contoh :
var umur = 19
var kuliah = true
console.log ( umur <= 19 || kuliah == true)
// maka outputnya true

// ! adalah operator lawan dari nilai tersebut
// contoh :
console.log (!true)
// maka hasilnya false

//  6.Pengkondisian (if, else if, else)
// Tulis kode JavaScript menggunakan struktur pengkondisian if, else if, dan else untuk mengecek apakah sebuah angka adalah genap atau ganjil. Jelaskan alur logika yang digunakan.
// jawab :
    var bilanganGenap = 10
    var bilanganGanjil = 15
if (bilanganGenap )
    //LUPA CARA NYA :(

// 7.Pengkondisian (switch)
// Buatlah contoh penggunaan pernyataan switch untuk menentukan nama hari berdasarkan nomor hari (1-7). Misalnya, 1 adalah "Senin", 2 adalah "Selasa", dan seterusnya.
// jawab :

var Hari = prompt "Masukkan Nama Hari"
switch (Hari){
        case "1" :
        alert ("Senin")
        break;
    case "2" :
        alert ("Selasa")
        break;
    case "3" :
        alert ("Rabu")
        break;
    case "4" :
        alert ("Kamis")
    case "5" :
        alert ("Jum'at")
    case "6" :
        alert ("Sabtu")
    case "7" :
        alert ("Minggu")
}



//  8.Perulangan (for)
//  Tulis kode JavaScript menggunakan perulangan for untuk mencetak angka dari 1 sampai 10 ke konsol. Jelaskan bagaimana perulangan tersebut bekerja.
// jawab :
for ( var nilaiAngka = 1; nilaiAngka <= 10; nilaiAngka++){
    console.log ("No. Angka " + nilaiAngka + )
}
// deklarasi ; kondisi; increment

//  9.Operator Perbandingan
//  Jelaskan perbedaan antara operator perbandingan == dan === dalam JavaScript. Berikan contoh situasi di mana masing-masing operator dapat memberikan hasil yang berbeda.
// jawab : == adalah sama dengan tapi nilainya tidak akurat, sedangkan === adalah sama dengan dengan strict karna akurat
// contoh : 
number == "10" // dianggap angka
number === "10" // dianggap string

// 10.Kombinasi Tipe Data dan Operator
//  Buatlah kode JavaScript yang menggabungkan string dan angka, kemudian jelaskan hasilnya. Apa yang terjadi ketika Anda mencoba menggabungkan tipe data yang berbeda?
//  jawab : 
var number = "10"
console.log (number)
// tetap dianggap angka
    




