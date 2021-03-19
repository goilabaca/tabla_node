const fs = require('fs');

/* con promesa asi noma
const crearArchivo = (base) => {
    return new Promise((resolve, reject) => {
        console.log('================');
        console.log(`Tabla de ${base}`);
        console.log('================');

        let salida = '';
        for (let i = 1; i <= 10; i++) {
            salida = salida + `${base} x ${i} = ${base*i}\n`;

        }
        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt`);

    })


} */

//lo de abajo es identico al código de arriba. El async es una promesa en sí mismo
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    try {



        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida = salida + `${base} x ${i} = ${base*i}\n`;

        }
        if (listar) {
            console.log('================');
            console.log(`Tabla de ${base}`);
            console.log('================');
            console.log(salida);

        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;

    }


}

module.exports = {
    crearArchivo
}