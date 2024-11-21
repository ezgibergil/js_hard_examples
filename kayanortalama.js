/*
Kullanıcıdan bir dizi uzunluğu ve bu kadar sayıyı girmesini isteyin. Ardından kayan ortalamaları hesaplayın ve çıktı olarak gösterin. Örneğin:
Girdi: [10, 20, 30, 40, 50] Çıktı: [15, 25, 35, 45]
Not: İlk kayan ortalama, 10 ve 20'nin ortalaması; ikincisi 20 ve 30'un ortalaması vb.
*/

const dizi = [10,20,30,40,50];
const ortalamaDizi=[];
ortalama = 0;

for (i=0; i<dizi.length-1; i++){
    ortalama = (dizi[i]+dizi[i+1])/2;
    ortalamaDizi.push(ortalama);

}
console.log(ortalamaDizi);