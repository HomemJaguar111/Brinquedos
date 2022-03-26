    
    
    let tempo = new Date()
    let hora = tempo.getHours()
    let minuto = tempo.getMinutes()
    let horakin = document.getElementById('horakin')
    let kin = '';
    
    

    function RelogioKin() {    

    if (hora == 6 || hora == 7 && minuto < 12) {
        kin = 'Dragão'
    } else if (hora == 7 && minuto >= 12 || hora == 8 && minuto < 24) {
        kin = 'Vento'
    } else if (hora == 8 && minuto >= 24 || hora == 9 && minuto < 36) {
        kin = "Noite"
    } else if (hora == 9 && minuto >= 36 || hora == 10 && minuto < 48) {
        kin = "Semente"
    } else if (hora == 10 && minuto >= 48 || hora == 11) {
        kin = "Serpente"
    } else if (hora == 12 || hora == 13 && minuto < 12) {
        kin = "Enlaçador de Mundos"
    } else if (hora == 13 && minuto >= 12 || hora == 14 && minuto < 24) {
        kin = "Mão"
    } else if (hora == 14 && minuto >= 24 || hora == 15 && minuto < 36) {
        kin = "Estrela"
    } else if (hora == 15 && minuto >= 36 || hora == 16 && minuto < 48) {
        kin = "Lua"
    } else if (hora == 16 && minuto >= 48 || hora == 17) {
        kin = "Cachorro"
    } else if (hora == 18 || hora == 17 && minuto < 12) {
        kin = "Macaco"
    } else if (hora == 19 && minuto >= 12 || hora == 20 && minuto < 24) {
        kin = "Humano"
    } else if (hora == 20 && minuto >= 24 || hora == 21 && minuto < 36) {
        kin = "Caminhante do Céu"
    } else if (hora == 21 && minuto >= 36 || hora == 22 && minuto < 48) {
        kin = "Mago"
        console.log('kin')
    } else if (hora == 22 && minuto >= 48 || hora == 23) {
        kin = "Águia"
    } else if (hora == 0 || hora == 1 && minuto < 12) {
        kin = "Guerreiro"
    } else if (hora == 1 && minuto >= 12 || hora == 2 && minuto < 24) {
        kin = "Terra"
    } else if (hora == 2 && minuto >= 24 || hora == 3 && minuto < 36) {
        kin = "Espelho"
    } else if (hora == 3 && minuto >= 36 || hora == 4 && minuto < 48) {
        kin = "Tormenta"
    } else if (hora == 4 && minuto >= 48 || hora == 5) {
        kin = "Sol"
    }
    
    horakin.innerHTML = `Hora do kin ${kin}.`

}
       
    function Relogio(){
    
    let tempo = new Date()
    let hora= tempo.getHours()
    let minuto= tempo.getMinutes()
    let segundo= tempo.getUTCSeconds();
    let horas= document.getElementById('txthoras');

    if( segundo < 10){
        segundo ='0'+segundo
    };
    if(minuto<10){
        minuto='0'+ minuto 
    } ;
    if (hora<10){
        hora = '0'+hora
    } 
      let tempototal = hora + ':' + minuto + ':' + segundo;
    

    horas.innerHTML=tempototal;

}
setInterval(Relogio,500);
setInterval(RelogioKin,500);
