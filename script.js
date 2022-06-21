
alert (`Hola! No sabés qué película ver? 
No te hagas drama, nosotros elegimos por vos y te decimos en qué plataforma podés verla`)

function darPelicula (time) {

    let tiempo = prompt("¿Cuantos minutos tenes para ver la pelicula?")
    
    if (tiempo >= 120 ) alert("Podes ver 'El Padrino'. Está disponible en Prime, Paramount o MovistarPlay");

else if (tiempo > 90 && tiempo < 120) alert("Podes ver 'Blue Valentine'. Está disponible en Netflix o Mubi ") ;

else if (tiempo < 90 && tiempo >= 80) alert ("Podes ver 'La masacre de Texas' (1974) Está disponible en Prime, MovistarPlay  y Qubit");

else if (tiempo < 80 && tiempo > 60) alert ("Podes ver 'Tetsuo: The Iron Man' (1989) Está disponible en Mubi");

else if (tiempo <=60 && tiempo >= 50) alert ("Podes ver 'El chico' (1921) Está disponible en Mubi, Quibit y Filmbox");

else if (tiempo < 50) alert (`El tiempo tiene que ser mayor a 50 minutos. Volvé a intentarlo.`);
}

let tiempo = prompt("¿Cuantos minutos tenes para ver la pelicula?")
darPelicula()

while(tiempo < 50){
    darPelicula();
    }
