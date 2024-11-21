/*
Kullanıcıdan bir dizi uzunluğu ve bu uzunluk kadar sayı girmesini isteyin. Ardından: 
- Dizide hangi sayıların tekrar ettiğini bulun.
- Tekrar eden sayılar ve tekrar etme sayılarıyla birlikte ekrana yazdırın.
*/


let dizi = [3, 5, 3, 8, 3, 2, 5, 8, 8, 7];
let sayac = {};

for (let i = 0; i < dizi.length; i++) {
    let sayi = dizi[i];
    if (sayac[sayi]) {
        sayac[sayi]++;
    } else {
        sayac[sayi] = 1;
    }
}


for (let sayi in sayac) {
    if (sayac[sayi] > 1) {  
        console.log(`Sayı ${sayi}, ${sayac[sayi]} kez tekrar ediyor.`);
    }
}
