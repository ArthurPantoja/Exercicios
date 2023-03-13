function ok() {
    var ini = document.getElementById('nu1')
    var fim = document.getElementById('nu2')
    var pas = document.getElementById('nu3')
    var res = document.getElementById('resut')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('ERRO: Preencha os espaços')
    }else{
        
        res.innerHTML = 'Contando:  <br>'

        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
    
        for(var c = i; c <= f; c += p){
           

            if(c <= 100){
                res.innerHTML += `${c} \u{1F60A}`
            }else if(c > 100){
                res.innerHTML += `${c} \u{1F611}`
            }else if(c > 200) {
                res.innerHTML += `${c} \u{1F644}`
            }
        }

    }

   
 }

    



