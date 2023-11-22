function placa(){
    const d = document.querySelector('#d').value; // dia
    const n = document.querySelector('#n').value; // numero final da placa

    if(d == "segunda-feira" || d == "Segunda-feira" || d == "Segunda" || d == "segunda"){ // dia da semana 
        if(n == 1 || n == 2){ // final da placa 
            alert(`Você não pode circular com o veículo.`)
        }else {
            alert(`Você pode circular com o veículo porém nas vias limítrofes não circulam automóveis, das 7h às 10h e das 17h às 20h. Caminhões estão liberados do Rodízio, mas devem respeitar as demais regulamentações de restrição ao seu trânsito. Em outras vias, não circulam automóveis nem caminhões, das 7h às 10h e das 17h às 20h.`)
          }

    }else if(d == "terça-feira" || d == "Terça-feira" || d == "Terça" || d == "terça"){ // dia da semana 
      if(n == 3 || n == 4){ // final da placa 
                alert(`Você não pode circular com o veículo.`)
            }else if (a == "Sim" || a == "sim" || a == "s"){
                alert(`Você não pode circular nesta área das 7h às 10h e das 17h às 20h.`)
            }else {
                alert(`Você pode circular com o veículo porém nas vias limítrofes não circulam automóveis, das 7h às 10h e das 17h às 20h. Caminhões estão liberados do Rodízio, mas devem respeitar as demais regulamentações de restrição ao seu trânsito. Em outras vias, não circulam automóveis nem caminhões, das 7h às 10h e das 17h às 20h.`)
              }

            }else if(d == "quarta-feira" || d == "Quarta-feira" || d == "Quarta" || d == "quarta"){ // dia da semana 
        if(n == 5 || n == 6){ // final da placa
                alert(`Você não pode circular com o veículo.`)
            }else {
                alert(`Você pode circular com o veículo porém nas vias limítrofes não circulam automóveis, das 7h às 10h e das 17h às 20h. Caminhões estão liberados do Rodízio, mas devem respeitar as demais regulamentações de restrição ao seu trânsito. Em outras vias, não circulam automóveis nem caminhões, das 7h às 10h e das 17h às 20h.`)
            }

        }else if(d == "quinta-feira" || d == "Quinta-feira" || d == "Quinta" || d == "quinta"){ // dia da semana 
    if(n == 7 || n == 8){ // final da placa 
                alert(`Você não pode circular com o veículo.`)
            }else {
                alert(`Você pode circular com o veículo porém nas vias limítrofes não circulam automóveis, das 7h às 10h e das 17h às 20h. Caminhões estão liberados do Rodízio, mas devem respeitar as demais regulamentações de restrição ao seu trânsito. Em outras vias, não circulam automóveis nem caminhões, das 7h às 10h e das 17h às 20h.`)
              }

        }else if(d == "sexta-feira" || d == "Sexta-feira" || d == "Sexta" || d == "sexta"){ // dia da semana 
    if(n == 9 || n == 0){ // final da placa 
                alert(`Você não pode circular com o veículo.`)
            }else {
                alert(`Você pode circular com o veículo porém nas vias limítrofes não circulam automóveis, das 7h às 10h e das 17h às 20h. Caminhões estão liberados do Rodízio, mas devem respeitar as demais regulamentações de restrição ao seu trânsito. Em outras vias, não circulam automóveis nem caminhões, das 7h às 10h e das 17h às 20h.`)
              }
        }else{
    alert(`***`)
}
}