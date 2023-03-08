function vari(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var result = document.getElementById("res")

    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique as informações e tente novamente')
    }else{
        var fsex = document.getElementsByName("radisex")
        var idade = ano - Number(fano.value)
        var gene 
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            gene = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'menino.png')
            }else if(idade < 25){
                  img.setAttribute('src', 'jovem.png')
            }else if(idade < 59) {
                img.setAttribute('src', 'adulto.png')
            }else{
                img.setAttribute('idoso.png')
            }
          
        }else if(fsex[1].checked){
            gene = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'menina.png')
            }else if(idade < 25){
                  img.setAttribute('src', 'jovemfem.png')
            }else if(idade < 59) {
                img.setAttribute('src', 'adulta.png')
            }else{
                img.setAttribute('idosa.png')
            }
        }

        result.innerHTML = `Você e um(a) ${gene} com idade ${idade} anos`
        result.appendChild(img)
    }

    
}

    



