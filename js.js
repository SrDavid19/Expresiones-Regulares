function AlmacenarDatos(){
    function vehiculo(marca, modelo, color, anio){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.anio = anio;
    }
    Capmarca = document.getElementById('Marca').value;
    Capmodelo = document.getElementById('Modelo').value;
    Capcolor = document.getElementById('Color').value;
    Capanio = document.getElementById('Año').value;

    Datosvehiculo = new vehiculo(Capmarca,Capmodelo,Capcolor,Capanio);
    agregar();
    
}
var DatosAgregados = [];
function agregar(){
    DatosAgregados.push(Datosvehiculo);
    document.getElementById('tabla').innerHTML +='<tbody id="cuerpoTable"><td>' + Datosvehiculo.marca + '</td><td>' + Datosvehiculo.modelo + '</td><td>' + Datosvehiculo.color + '</td><td>' +Datosvehiculo.anio + '</td></tbody>';
}