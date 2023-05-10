/*
Ex 1

Creare un array che è composto da 3 oggetti, che rappresentano dei rettangoli, e avranno le proprietà base e altezza (numeri).
Crea quindi 3 oggetti che rappresentano 3 rettangoli con le caratteristiche indicate, mettili in un array.
Cicla questo array SIA con un foreach PRIMA che con un for DOPO, per stampare l'area di ogni rettangolo (ad ogni iterazione)
*/

const r1 = { base: 5, height: 10 };
const r2 = { base: 10, height: 50 };
const r3 = { base: 50, height: 5 };

const arr = [r1, r2, r3];

console.log('ForEach:');
arr.forEach(function (r, i) { console.log(`Area rettangolo ${i + 1}: ${r.base * r.height}`); });

console.log('For:');
for (let i = 0; i < arr.length; i++) {
    console.log(`Area rettangolo ${i + 1}: ${arr[i].base * arr[i].height}`);
}