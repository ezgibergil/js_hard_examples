/*
 Bir diziyi döngü kullanarak ters çevirin 
 (JavaScript'in hazır `reverse()` metodunu kullanmadan). Örneğin:
```
const dizi = [10, 20, 30, 40, 50]; Çıktı: `[50, 40, 30, 20, 10]`
*/

const dizi = [10, 20, 30, 40, 50];
const tersdizi=[];
for (i=dizi.length; i>=0; i--){
    tersdizi.push(dizi[i]);
}
console.log(tersdizi);