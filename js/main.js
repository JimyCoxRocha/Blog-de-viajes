function soloLetras(e){
    var key = e.keyCode || e.which,
    letrasValidas="áéíóúabcdefghijlmnñopqrstuvwxyz ",
    letra = String.fromCharCode(key).toLocaleLowerCase();
    
    if(letrasValidas.indexOf(letra)==-1){
        return false;
    }
}

function soloNumeros(e){
    var key = e.keyCode || e.which,
    numeros="1234567890",
    numero = String.fromCharCode(key);

    if(numeros.indexOf(numero)==-1){
        return false;
    }
}

$(function(){
    let problemDetected =0;//Para valdiar que todos los datos sean ingresados correctamente y solo un avez se muestre
    //la advertencia en html;
    var ingresarError= function(elemento, str){
        if(($(elemento).next())[0].tagName!="P"){
            let contenido= $("<p/>", {
                "class": "error",
                "html": str,
                "style": "margin:0px"
            });
    
            $(contenido).insertAfter(elemento);
        }
        
    }

    var eliminarError= function(elemento){
        if(($(elemento).next())[0].tagName=="P"){
            ($(elemento).next()).remove();
        }
        
    }

    var validarNombre= function(e, nombre){
        if((nombre.trim()).length>16 || (nombre.trim()).length<4){
            ingresarError("#nombre", "Debe ingresar un nombre correcto.");
            
            e.preventDefault();
        }else{
            $("#nombre")[0].value=nombre.trim();
            eliminarError("#nombre");
        }
    }

    var validarDigitos= function(e, telefono){
        
        if((telefono.trim()).length!=10){
            ingresarError("#telefono", "Debe ingresar un numero de Whatsapp correcto.");
            
            e.preventDefault();
        }else{
            $("#telefono")[0].value=telefono.trim();
            eliminarError("#telefono");
        }
    }

    var plantillaCorreo= function(e, correo){
        

        if(correo.indexOf("@")==-1 || correo.indexOf(".")==-1){
            ingresarError("#correo", "Debe ingresar un correo correcto.");

            e.preventDefault();
        }else{
            $("#correo")[0].value=correo.trim();
            eliminarError("#correo");
        }
    }
    
    
    /*****************  VALIDAR FORMULARIO *******************/
    let nombre;
    let correo;
    let telefono;
    
    //Solo letras
    $("#submit").click(function(e){
        correo= $("#correo").val();
        telefono= $("#telefono").val();
        nombre= $("#nombre").val();

        validarNombre(e, nombre);
        plantillaCorreo(e, correo);
        validarDigitos(e, telefono);
    });
});