function carrer() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var mens = window.document.getElementById('msg01')
    var date = new Date()
    var hora = date.getHours()
    
    msg.innerHTML = `A hora atua e ${hora}`

    if(hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = 'rgb(222, 223, 182)'
    }else if(hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = 'rgb(206, 165, 89)'
        mens.innerHTML = 'Boa Tarde'
    }else{
        img.src = 'noite.png'
        document.body.style.background = 'rgba(9, 50, 68, 0.767)'
    }

    


}

