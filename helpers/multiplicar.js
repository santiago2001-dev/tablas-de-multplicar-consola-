

const fs = require('fs');
const colors = require('colors');

 const crearArchivo =async(base = 5,listar,hasta)=>{
        try{
        
        let salida = '';
        let consola = '';
        

        //recorrido de tabla de multiplicar
        for(var i = 1; i <=hasta; i++){
            
            let restultado = base * i
            salida += `${base} X ${i} = ${restultado}\n`
            consola += `${base} ${'X'.america} ${i} ${'='.green} ${restultado}\n`
              
        } 
       
    // creacion de archivo
        fs.writeFileSync(`./filesTxt/tabla-${base}.txt`,`=================================\ntabla del : ${base}\n=================================\n${salida}`);
        
        if(listar ){
            console.log('================================='.america);
            console.log( 'tabla del : ' ,colors.blue( base));
            console.log('================================='.america);
            console.log(consola)
            throw('file save!!')

        }else{
            
            throw('file save')           
        }

        }catch(err){
            
            throw err
     }
  

 
 }





 

module.exports = {
    
    crearArchivo
    
}


