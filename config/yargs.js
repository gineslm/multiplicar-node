const argv = require('yargs')
    .command(

        'crear', 'crea un archivo con la tabla de multiplicar', {
            base: {
                demand: true,
                alias: 'b'
            },
            limit: {
                alias: 'l',
                default: 10
            }
        }
    )
    .command(

        'listar', 'lista la tabla de multiplicar', {
            base: {
                demand: true,
                alias: 'b'
            },
            limit: {
                alias: 'l',
                default: 10
            }
        }
    )
    .argv;


module.exports = {
    argv
}