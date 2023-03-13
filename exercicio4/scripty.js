function mostra(){
    var con = document.getElementById('tabu')
    var tab = document.getElementById('seltabu')
    
    if(con.value === "0") {
        window.alert("ERRO: Digite um numero para proceguir!")
    }else{
        var n = Number(con.value)
        // var c = 1

        // while(c <= 10){
        // let item = document.createElement('option')

        // item.text = `${n} x ${c} = ${n*c}`
        // tab.appendChild(item)
        // c++
        // }
        
        for(var c = 1; c <= 10; c++){
            let item = document.createElement('option')

            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }              
    }
}
function limp(){
    var tab = document.getElementById('seltabu')

    tab.innerHTML = ''
}

    



 