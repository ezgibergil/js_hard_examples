/*
Bir 'sihirli kare' oluşturun. Kullanıcıdan bir pozitif sayı alarak, 
bu sayı kadar satır ve sütunlu bir matris oluşturun. 
Her satır, sütun ve çapraz toplamlarının eşit olduğu bir sihirli kare üretin. 
(Örneğin, 3x3'lük bir matris için toplamlar 15 olmalıdır.)
*/
let n = 3;

if (n%2==1){

magicSquare = Array(n).fill(0).map(x => Array(n).fill(0));

var i = parseInt(n / 2);
var j = n - 1;

for (num = 1; num <= n * n;) {
    if (i == -1 && j == n) {
        j = n - 2;
        i = 0;
    }
    else {

        if (j == n)
            j = 0;
        if (i < 0)
            i = n - 1;
    }

    if (magicSquare[i][j] != 0) {
        
        j -= 2;
        i++;
        continue;
    }
    else
    
        magicSquare[i][j] = num++;
    j++;
    i--;
}

for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++)

        magicSquare[i][j];

}
console.log(magicSquare);
}
else {
    console.log("Lütfen Tek Sayı Giriniz!");
}
