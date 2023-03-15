function veri() {
    var mon = document.getElementById('nu1')
    var nen = document.getElementById('vam')

    

    if(mon.value == 0) {
        window.alert('ERRO: Insira um numero')
    }else{
        let tem = document.createElement('option')
        tem.text = 'Vamos mostrar algo aqui!'
        nen.appendChild(tem)
    }
    
}

    



