const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const fs = require('fs');

const argv = require('./config/yargs').argv;
const colors = require('colors');







console.log(argv.base);
console.log(argv.limit);







switch (argv._[0]) {

    case 'listar':
        //
        listarTabla(argv.base, argv.limit).then(
            archivo => console.log(archivo.grey)
        ).catch(err => console.log(`Error: ${err}`));
        break;

    case 'crear':
        //
        crearArchivo(argv.base, argv.limit).then(
            archivo => console.log(`se ha guardado el archivo :` + archivo.green)
        ).catch(err => console.log(`Error: ${err}`));

        break;

    default:
        //
        console.log('comando no reconocido');
        break;

}