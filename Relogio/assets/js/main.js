const apphora = document.getElementById("hora");
const data = new Date();

function definirDia(data){
    switch (data){
        case 0:
            return 'Dom';
        case 1:
            return 'Seg';
        case 2:
            return 'Ter';
        case 3:
            return 'Qua';
        case 4:
            return 'Qui';
        case 5:
            return 'Sex';
        case 6:
            return 'Sab'; 
        
    }
}

var dia = definirDia(data.getDay());
var hora = data.getHours();
var minutos = data.getMinutes();
var ampm = hora >= 12 ? 'pm' : 'am';



const completo = (dia + " " + hora + " : " + minutos + " : " + ampm);


apphora.innerHTML = completo;