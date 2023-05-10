
let obj = {
    name: "Claudio",
    lastname: "De Paolis",
    skill: ["html", "css", "js"],
    age: 28,
    print: function () {
        console.log(`Questo è il mio ${this.name}`);
        console.log("-----------------");
    },

    auto:
    {
        marca1: "Panda",
        marca2: "clio",
    },
};

obj.print();
console.log(obj);
console.log(obj.name);
console.log(obj.auto.marca1);
console.log("-----------------");

let array = [
    {
        name: "Claudio",
        lastname: "De Paolis",
        age: 28
    },
    {
        name: "Mario",
        lastname: "Rossi",
    }
];

function iterazione(valore, indice) {
    console.log(`La keyword ${indice} rappresenta il valore ${valore.name}`);

}

array.forEach(iterazione)
console.log("-----------------");
console.log(array[0])
console.log("-----------------");
