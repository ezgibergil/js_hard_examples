/*
Spiral Matris 
*/
let n = 5;
let matris = Array.from({ length: n }, () => Array(n).fill(0));
let sol = 0, sag = n - 1, ust = 0, alt = n - 1;
let sayi = 1;


while (sol <= sag && ust <= alt) {

    for (let i = sol; i <= sag; i++) {
        matris[ust][i] = sayi++;
    }
    ust++;

    for (let i = ust; i <= alt; i++) {
        matris[i][sag] = sayi++;
    }
    sag--;

    if (sol <= sag) {

        for (let i = sag; i >= sol; i--) {
            matris[alt][i] = sayi++;
        }
        alt--;
    }

    if (ust <= alt) {

        for (let i = alt; i >= ust; i--) {
            matris[i][sol] = sayi++;
        }
        sol++;
    }
}


for (let i = 0; i < n; i++) {
    console.log(matris[i].join(' '));
}
