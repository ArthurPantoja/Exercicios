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

        result.innerHTML = `A idade calculada ${idade}`
    }
    
}

    



