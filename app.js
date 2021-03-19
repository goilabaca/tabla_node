const fs = require('fs');
const { addListener } = require('process');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear();
//console.log(process.argv);
console.log(argv);

console.log('base:yargs', argv.base);


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));





































//queda piola pero el weon recomienda que nunca lo hagamos de esta manera
//const [, , arg3 = 'base=12'] = process.argv;
//const [, base] = arg3.split('='); //divide el base y 5
//console.log(base);




//const base = 5;


/* ahorita todo esto lo llevamos al multiplicar
console.log('================');
console.log('Tabla del 5');
console.log('================');


const base = 10;
let salida = '';


for (let i = 1; i <= 10; i++) {
    salida = salida + `${base} x ${i} = ${base*i}\n`;

}
console.log(salida);

fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;
    console.log('El archivo se grabó papurri');
})
fs.writeFileSync(`tabla-${base}.txt`, salida);

console.log(`tabla-${base}.txt crearaaa`); */