/*
Bir sayı piramidi oluşturun. Kullanıcıdan bir sayı alarak, 
o sayıya kadar olan pozitif tam sayıların şu formatta bir 
piramit oluşturmasını sağlayın:
*/

let n= 10;

if (n>0){
    for (i=1; i<=n;i++){
        satir='';
        for(j=1; j<=i;j++){
            satir+=j;
            
        }
        console.log(satir);
    }
}
else{
    console.log("Lütfen Pozitif Bir Sayı Girin!")
}