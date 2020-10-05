function AlmacenarDatos(){
    function datos(usuario, contrasena, correo, telefono,dui,nit,web){
        this.usuario = usuario;
        this.contrasena = contrasena;
        this.correo = correo;
        this.telefono = telefono;
        this.dui = dui;
        this.nit = nit;
        this.web = web;
    }
    Capuser = document.getElementById('usuario').value;
    Capcontra = document.getElementById('contra').value;
    Capcorreo = document.getElementById('correo').value;
    Captelefono = document.getElementById('telefono').value;
    Capdui = document.getElementById('dui').value;
    Capnit = document.getElementById('nit').value;
    Capweb = document.getElementById('web').value;

    DatosCap = new datos(Capuser,Capcontra,Capcorreo,Captelefono,Capdui, Capnit, Capweb);
    
    var expUser = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
    var expContra = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
    var expRegCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var expTel = /^[\d]{4}[-]*([\d]{4})$/;
    var expDui = /^[\d]{8}[-]*([\d]{1})$/;
    var expNit = /^[\d]{8}[-]*([\d]{4})$/;
    var expWeb = /^http[s]?:\/\/[\w]+([\.]+[\w]+)+$/;

    var UserValido= expUser.test(Capuser);
    var ContraValido= expContra.test(Capcontra);
    var Correovalido = expRegCorreo.test(Capcorreo);
    var TelValido = expTel.test(Captelefono);
    var DuiValido= expDui.test(Capdui);
    var NitValido= expNit.test(Capnit);
    var WebValido= expWeb.test(Capweb);

    if(UserValido==true){
        if(ContraValido==true){
            if(Correovalido==true){
                if(TelValido==true){
                    if(DuiValido==true){
                        if(NitValido==true){
                            if(WebValido==true){
                                agregar();
                            }else{
                                alert('El Sitio Web no es valido');
                            }
                        }else{
                            alert('El NIT no es valido');
                        }
                    }else{
                        alert('El Dui no es valido');
                    }
                }else{
                    alert('El Telefono no es valido');
                }
            }else{
                alert('El correo no es valido');
            }
        }else{
            alert('La clave no es valido');
        }
    }else{
        alert('El Usuario no es valido');
    }
    
    
}
var DatosAgregados = [];
function agregar(){
    DatosAgregados.push(DatosCap);
    document.getElementById('tabla').innerHTML +='<tbody id="cuerpoTable"><td>' + DatosCap.usuario + '</td><td>' + DatosCap.contrasena + '</td><td>' + DatosCap.correo + '</td><td>' +DatosCap.telefono + '</td><td>' + DatosCap.dui + '</td><td>' + DatosCap.nit + '</td><td>' +DatosCap.web + '</td></tbody>';
}