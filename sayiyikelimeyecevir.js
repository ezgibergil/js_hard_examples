/*
Kullanıcıdan alınan bir tam sayının her basamağını metne 
çeviren bir kod yazın. Örneğin: Girdi: 123
Çıktı: "Bir İki Üç"
*/


let sayi = 123;
let sayiStr = sayi.toString();

let sayiMetni = '';
let sayiBasamaklari = {
    '0': 'Sıfır',
    '1': 'Bir',
    '2': 'İki',
    '3': 'Üç',
    '4': 'Dört',
    '5': 'Beş',
    '6': 'Altı',
    '7': 'Yedi',
    '8': 'Sekiz',
    '9': 'Dokuz'
};


for (let i = 0; i < sayiStr.length; i++) {
    let basamaktakiSayi = sayiStr[i];
    sayiMetni += sayiBasamaklari[basamaktakiSayi] + ' ';
}


console.log(sayiMetni);
