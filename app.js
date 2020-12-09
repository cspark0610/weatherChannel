let boton=document.querySelector('button');
let input=document.querySelector('input');

//e.key en minuscula!!!
input.addEventListener('keypress' , function(e){
    if( e.key == 'Enter'){
        if(input.value !==""){
        cargarCiudad(); 
        input.value = "";
        } else{
            alert('DEBES INGRESAR UNA CIUDAD');
        }
    }
});



boton.addEventListener('click',function(e){
if( input.value !== "" && e.which===1){ 
    cargarCiudad();
    input.value = "";
    } else{
        alert('DEBES INGRESAR UNA CIUDAD');
    }
});


function cargarCiudad(){
    
       let ciudad=encodeURI(input.value);

        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function(data) {
        console.log(data);
        console.log(data.main.temp);
        
        document.querySelector(".container").style.visibility= "visible";
        let span=document.querySelector('#ciudad');
        span.textContent = data.name;
        let temp =document.querySelector('#temperatura');
        let template = String(data.main.temp)+"<sup>°C</sup>";
        temp.innerHTML= template;

        let imagen = document.querySelector('#wicon');
        imagen.src = "http://openweathermap.org/img/w/" + data.weather[0].icon+".png";

        
        let descripcion= document.querySelector('#descripcion');
        descripcion.textContent=data.weather[0].description;
        });
        
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es").fail(()=>alert('CIUDAD NO VALIDA'));
     
}






