const obj = {
    //proprita'
    name: 'Luigi',
    lastname: 'Verdi',
    skills:['js','php','py'],
    age: 40,

    //metodi
    greet: function() {
        console.log ('ciao');
    },
    //oggetti
    first: 'blue',
    second: 'green'
}

console.log(obj);

console.log( obj.name +' '+ obj.lastname);

obj.greet()

console.log(
    obj.colors.first + ' ' + obj.colors.second
);

//const box = document.getElementById('box')
//box.style.backgroundColor='red'

const p1 = {
    name: 'Luigi',
    lastname: 'Verdi',
    printfullname:function()  {
        console.log( obj.name +' '+ obj.lastname);
    }
}

const p2 = {
    name: 'Luigi',
    lastname: 'Verdi',
    printFullname:function()  {
        console.log( obj.name +' '+ obj.lastname);
    }
}

//p1.printFullname
//p2.printFullname

function fn(o) {
    console.log ('Questo sono le info di '+ o.name);
    o.printFullname()
    console.log ('-----------------------------------');
}

fn = (p1)
fn = (p2)

