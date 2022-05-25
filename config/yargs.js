//llamado de yargs

const { number } = require('yargs');

//usamos yargs para que nuestra app de consola tenga comandos 
const argv = require('yargs')
                    .option('b',{
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe :'base de tabla de multiplicar'

                    })
                    .option('l',{
                        alias :'listar',
                        type : 'boolean',
                        demandOption : true,
                        default : false,
                        description : 'monstrar archivo en consola'

                    })
                    .option('h',{
                        alias : 'hasta',
                        type : 'number',
                        demandOption: true,
                        description : 'limite de de la tabla '
                    })
                    .check((argv,options)=>{
                        if(isNaN(argv.base)){
                            throw 'la base tiene que ser un número'
                        }
                        return true
                    })
                  
                 
                    .argv;

module.exports = argv