/*

Kullanıcıdan bir matris boyutu ve elemanlarını alarak matrisin transpozunu bulun. 
Örneğin: 
Girdi:123 456 789 
Çıktı:147 258 369
*/

const matris = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

const tmatris = [];
for (let i=0; i<matris[0].length; i++){
    let satir = [];
    for (let j=0; j< matris.length; j++){
        satir.push(matris[j][i]);
    }
    tmatris.push(satir);
}

for(let i=0; i<tmatris.length;i++){
    console.log(tmatris[i].join(" "));
}
    
