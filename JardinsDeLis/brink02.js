    let ano = document.getElementById('_ano')
    let mes = document.getElementById('_mes')
    let dia = document.getElementById('_dia')
     
    var tzolkin = []

    
    let anocod = 0
    let mescod = 0
    let diacod = 0
    let kin    = 0


            let kintxt = document.getElementById('Kin')

    
    

function verificar(){    
    
       if (ano.value==0 || ano.value % 52 == 0){ anocod = 232}
       else if (ano.value ==1 || ano.value % 52 == 1){anocod = 77}
       else if (ano.value ==2 || ano.value % 52 == 2){anocod = 182} 
       else if (ano.value ==3 || ano.value % 52 == 3){anocod = 27}
       else if (ano.value ==4 || ano.value % 52 == 4){anocod = 132}
       else if (ano.value ==5 || ano.value % 52 == 5){anocod = 237}
       else if (ano.value ==6 || ano.value % 52 == 6){anocod = 82}
       else if (ano.value ==7 || ano.value % 52 == 7){anocod = 187}
       else if (ano.value ==8 || ano.value % 52 == 8){anocod = 32}
       else if (ano.value ==9 || ano.value & 52 == 9){anocod = 137}
       else if (ano.value ==10 || ano.value % 52 ==10){anocod = 242}
       else if (ano.value ==11 || ano.value % 52 ==11){anocod = 87}
       else if (ano.value ==12 || ano.value % 52 ==12){anocod = 192}
       else if (ano.value ==13 || ano.value % 52 ==13){anocod = 37}
       else if (ano.value ==14 || ano.value % 52 ==14){anocod = 142}
       else if (ano.value ==15 || ano.value % 52 ==15){anocod = 247}
       else if (ano.value ==16 || ano.value % 52 == 16){anocod = 92}
       else if (ano.value ==17 || ano.value % 52 == 17){anocod = 197} 
       else if (ano.value ==18 || ano.value % 52 == 18){anocod = 42}
       else if (ano.value ==19 || ano.value % 52 == 19){anocod = 147}
       else if (ano.value ==20 || ano.value % 52 == 20){anocod = 252}
       else if (ano.value ==21 || ano.value % 52 == 21){anocod = 97}
       else if (ano.value ==22 || ano.value % 52 == 22){anocod = 202}
       else if (ano.value ==23 || ano.value % 52 == 23){anocod = 47}
       else if (ano.value ==24 || ano.value & 52 == 24){anocod = 152}
       else if (ano.value ==25 || ano.value % 52 == 25){anocod = 257}
       else if (ano.value ==26 || ano.value % 52 == 26){anocod = 102}
       else if (ano.value ==27 || ano.value % 52 == 27){anocod = 207}
       else if (ano.value ==28 || ano.value % 52 == 28){anocod = 52}
       else if (ano.value ==29 || ano.value % 52 == 29){anocod = 157}
       else if (ano.value ==30 || ano.value % 52 == 30){anocod = 2}
       else if (ano.value ==31 || ano.value % 52 == 31){anocod = 107}
       else if (ano.value ==32 || ano.value % 52 == 32){anocod = 212} 
       else if (ano.value ==33 || ano.value % 52 == 33){anocod = 57}
       else if (ano.value ==34 || ano.value % 52 == 34){anocod = 162}
       else if (ano.value ==35 || ano.value % 52 == 35){anocod = 7}
       else if (ano.value ==36 || ano.value % 52 == 36){anocod = 112}
       else if (ano.value ==37 || ano.value % 52 == 37){anocod = 217}
       else if (ano.value ==38 || ano.value % 52 == 38){anocod = 62}
       else if (ano.value ==39 || ano.value & 52 == 39){anocod = 167}
       else if (ano.value ==40 || ano.value % 52 == 40){anocod = 12}
       else if (ano.value ==41 || ano.value % 52 == 41){anocod = 117}
       else if (ano.value ==42 || ano.value % 52 == 42){anocod = 222}
       else if (ano.value ==43 || ano.value % 52 == 43){anocod = 67}
       else if (ano.value ==44 || ano.value % 52 == 44){anocod = 172}
       else if (ano.value ==45 || ano.value % 52 == 45){anocod = 17}
       else if (ano.value ==46 || ano.value % 52 == 46){anocod = 122}
       else if (ano.value ==47 || ano.value % 52 == 47){anocod = 227}
       else if (ano.value ==48 || ano.value % 52 == 48){anocod = 72}
       else if (ano.value ==49 || ano.value & 52 == 49){anocod = 177}
       else if (ano.value ==50 || ano.value % 52 == 50){anocod = 22}
       else if (ano.value ==51 || ano.value % 52 == 51){anocod = 127}

    
    console.log(`O ano é ${ano.value}, o código é ${anocod}.  `)
    

    if (mes.value == 1){ mescod = 0}
    else if (mes.value == 2){ mescod = 31}
    else if (mes.value == 3){ mescod = 59}
    else if (mes.value == 4){ mescod = 90}
    else if (mes.value == 5){ mescod = 120}
    else if (mes.value == 6){ mescod = 151}
    else if (mes.value == 7){ mescod = 181}
    else if (mes.value == 8){ mescod = 212}
    else if (mes.value == 9){ mescod = 243}
    else if (mes.value == 10){ mescod = 13}
    else if (mes.value == 11){ mescod = 44}
    else if (mes.value == 12){ mescod = 74};
    
    console.log(`O mês é ${mes.value}, o código é ${mescod}.`)  
    

    if (dia.value==1){diacod=1}
    else if (dia.value==2){diacod=2}
    else if (dia.value==3){diacod=3}
    else if (dia.value==4){diacod=4}
    else if (dia.value==5){diacod=5}
    else if (dia.value==6){diacod=6}
    else if (dia.value==7){diacod=7}
    else if (dia.value==8){diacod=8}
    else if (dia.value==9){diacod=9}
    else if (dia.value==10){diacod=10}
    else if (dia.value==11){diacod=11}
    else if (dia.value==12){diacod=12}
    else if (dia.value==13){diacod=13}
    else if (dia.value==14){diacod=14}
    else if (dia.value==15){diacod=15}
    else if (dia.value==16){diacod=16}
    else if (dia.value==17){diacod=17}
    else if (dia.value==18){diacod=18}
    else if (dia.value==19){diacod=19}
    else if (dia.value==20){diacod=20}
    else if (dia.value==21){diacod=21}
    else if (dia.value==22){diacod=22}
    else if (dia.value==23){diacod=23}
    else if (dia.value==24){diacod=24}
    else if (dia.value==25){diacod=25}
    else if (dia.value==26){diacod=26}
    else if (dia.value==27){diacod=27}
    else if (dia.value==28){diacod=28}
    else if (dia.value==29){diacod=29}
    else if (dia.value==30){diacod=30}
    else if (dia.value==31){diacod=31}
 
    let codkin = (anocod + mescod + diacod)

    if (codkin > 260){kin=codkin-260}
    else {kin=codkin}
    

  
  console.log(`O dia é ${dia.value}, o código é ${diacod}`)
  
 
   
    
    console.log(codkin)
    kintxt.innerHTML=`Seu kin é ${kin}`
   console.log(`O kin é ${kin}`)

   

   
   if (kin==1 || kin % 4 == 1) {
                    document.getElementById('_destino').style.background='red'
                    document.getElementById('_guia').style.background='red'
                    document.getElementById('_antipoda').style.background='blue'
                    document.getElementById('_analogo').style.background='white'
                    document.getElementById('_oculto').style.background='yellow'


                    document.getElementById('_jd1').style.background='#FFC0CB' //rosa
                    document.getElementById('_jd2').style.background='#9400D3' //roxo
                    document.getElementById('_jd3').style.background='#F0E68C' //amarelo claro
                    document.getElementById('_jd4').style.background='#228B22' // verde  
                    
                    
                    document.getElementById("_jd5_1" ).style.background='#87CEEB'
                    document.getElementById(
                      "_jd5_2").style.background='#87CEEB' // azul claro


                    document.getElementById('_jd6_1').style.background='#FFA500'
                    document.getElementById('_jd6_2').style.background='#FFA500 ' //laranja


                    document.getElementById('_jd7_1').style.background='red '
                    document.getElementById('_jd7_2').style.background='red '
                    document.getElementById('_jd7_3').style.background='red '
                    document.getElementById('_jd7_4').style.background='red '
                    document.getElementById('_jd7_5').style.background=' red'
                    document.getElementById('_jd7_6').style.background='red '
                    document.getElementById('_jd7_7').style.background='red '
                    document.getElementById('_jd7_8').style.background=' red'
                    document.getElementById('_jd7_9').style.background=' red'
                    document.getElementById('_jd7_10').style.background=' red'
                    document.getElementById('_jd7_11').style.background='red '
                    document.getElementById('_jd7_12').style.background=' red'
                    

          }else if (kin==2 || kin %4 == 2){
                        document.getElementById('_destino').style.background='white'
                        document.getElementById('_guia').style.background='white'
                        document.getElementById('_antipoda').style.background='yellow'
                        document.getElementById('_analogo').style.background='red'
                        document.getElementById('_oculto').style.background='blue'


                        document.getElementById('_jd1').style.background='#FFC0CB' //rosa   
                    document.getElementById('_jd2').style.background='#F0E68C' //amarelo claro   //
                    document.getElementById('_jd3').style.background='#9400D3' //roxo   //
                    document.getElementById('_jd4').style.background= '#228B22' // verde   // 
                    
                    
                    document.getElementById("_jd5_1" ).style.background='#FFA500'
                    document.getElementById(
                      "_jd5_2").style.background= '#FFA500 ' //laranja  //


                    document.getElementById('_jd6_1').style.background='#87CEEB'
                    document.getElementById('_jd6_2').style.background='#87CEEB' // azul claro


                    document.getElementById('_jd7_1').style.background='white '
                    document.getElementById('_jd7_2').style.background='white '
                    document.getElementById('_jd7_3').style.background='white'
                    document.getElementById('_jd7_4').style.background='white'
                    document.getElementById('_jd7_5').style.background='white'
                    document.getElementById('_jd7_6').style.background='white'
                    document.getElementById('_jd7_7').style.background='white'
                    document.getElementById('_jd7_8').style.background='white'
                    document.getElementById('_jd7_9').style.background='white'
                    document.getElementById('_jd7_10').style.background='white'
                    document.getElementById('_jd7_11').style.background='white'
                    document.getElementById('_jd7_12').style.background='white'
             }else if (kin==3 || kin % 4 == 3){
              document.getElementById('_destino').style.background='blue'
              document.getElementById('_guia').style.background='blue'
              document.getElementById('_antipoda').style.background='red'
              document.getElementById('_analogo').style.background='yellow'
              document.getElementById('_oculto').style.background='white'


              document.getElementById('_jd1').style.background='#228B22' // verde     
                    document.getElementById('_jd2').style.background='#9400D3' //roxo
                    document.getElementById('_jd3').style.background='#F0E68C' //amarelo claro
                    document.getElementById('_jd4').style.background='#FFC0CB' //rosa 
                    
                    
                    document.getElementById("_jd5_1" ).style.background='#FFA500 '
                    document.getElementById(
                      "_jd5_2").style.background='#FFA500 ' //laranja   //

                    document.getElementById('_jd6_1').style.background='#87CEEB'
                    document.getElementById('_jd6_2').style.background='#87CEEB' // azul claro



                    document.getElementById('_jd7_1').style.background='blue '
                    document.getElementById('_jd7_2').style.background='blue '
                    document.getElementById('_jd7_3').style.background='blue '
                    document.getElementById('_jd7_4').style.background='blue '
                    document.getElementById('_jd7_5').style.background='blue'
                    document.getElementById('_jd7_6').style.background='blue'
                    document.getElementById('_jd7_7').style.background='blue'
                    document.getElementById('_jd7_8').style.background='blue'
                    document.getElementById('_jd7_9').style.background='blue'
                    document.getElementById('_jd7_10').style.background='blue'
                    document.getElementById('_jd7_11').style.background='blue'
                    document.getElementById('_jd7_12').style.background='blue'
             }else {
              document.getElementById('_destino').style.background='yellow'
              document.getElementById('_guia').style.background='yellow'
              document.getElementById('_antipoda').style.background='white'
              document.getElementById('_analogo').style.background='blue'
              document.getElementById('_oculto').style.background='red'
             


             document.getElementById('_jd1').style.background='#228B22' // verde    //   //
                    document.getElementById('_jd2').style.background='#F0E68C' //amarelo claro   //
                    document.getElementById('_jd3').style.background='#9400D3' //roxo
                    document.getElementById('_jd4').style.background='#FFC0CB' //rosa   //
                    
                    
                    document.getElementById("_jd5_1" ).style.background='#87CEEB'
                    document.getElementById(
                      "_jd5_2").style.background='#87CEEB' // azul claro


                    document.getElementById('_jd6_1').style.background='#FFA500'
                    document.getElementById('_jd6_2').style.background='#FFA500 ' //laranja


                    document.getElementById('_jd7_1').style.background='yellow '
                    document.getElementById('_jd7_2').style.background='yellow '
                    document.getElementById('_jd7_3').style.background='yellow'
                    document.getElementById('_jd7_4').style.background='yellow'
                    document.getElementById('_jd7_5').style.background='yellow'
                    document.getElementById('_jd7_6').style.background='yellow'
                    document.getElementById('_jd7_7').style.background='yellow'
                    document.getElementById('_jd7_8').style.background='yellow'
                    document.getElementById('_jd7_9').style.background='yellow'
                    document.getElementById('_jd7_10').style.background='yellow'
                    document.getElementById('_jd7_11').style.background='yellow'
                    document.getElementById('_jd7_12').style.background='yellow'

    }
    
   
}






