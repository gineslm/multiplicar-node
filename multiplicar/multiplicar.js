// requireds
// librerias propias de node
const fs = require('fs');
//librerias no natibas de node desarrolladas por 3
//nuestra libreria  require('../fs);


let listarTabla = async(base, limit) => {

    // eval parametro
    if (!Number(base)) {
        throw new Error(` el parametro de entrada ${base}, no es un numero`);
    }

    // ini var
    let data = '';
    let i;

    // build data
    for (i = 0; i < limit; i++) {

        linea = ` ${base} * ${i} = ${base * i}\n`;
        data += linea;
    }


    return data;

};




let crearArchivo = async(base, limit) => {

    // eval parametro
    if (!Number(base)) {
        throw new Error(` el parametro de entrada ${base}, no es un numero`);
    }

    // ini var
    let data = '';
    let i;

    // build data
    for (i = 0; i < limit; i++) {

        const linea = ` ${base} * ${i} = ${base * i}\n`;
        data += linea;
    }

    // write file
    fs.writeFile(`files/tabla${base}.txt`, data, (err) => {
        if (err) throw err;

    });
    return `tabla${base}.txt`;

};

let newFile = (base) => {

    return new Promise((reject, resolve) => {

        let data = '';
        let i;
        for (i = 0; i < 10; i++) {

            const linea = ` ${base} * ${i} = ${base * i}\n`;
            data += linea;
        }

        // write file
        fs.writeFile(`files/tabla${base}.txt`, data, (err) => {
            if (err) reject(`Error al crear archivo: ${err}`);

        });
        resolve(`${base}.txt`);


    });

};



module.exports = {
    crearArchivo,
    newFile,
    listarTabla


};