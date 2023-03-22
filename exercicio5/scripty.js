var mon = document.getElementById('nu1')
var nen = document.getElementById('vam')
let res = document.querySelector('div#resp')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function veri() {
  
    if(isNumero(mon.value) && !inList(mon.value, valores)) {

        valores.push(Number(mon.value))
        var te = document.createElement('option')
        te.text = `Numero ${mon.value} Adicionado`
        nen.appendChild(te)
        res.innerHTML = ''

    }else{
        alert('ERRO: Valor invalido ou já existente!')
    }

    mon.value = ''
    mon.focus()
    

    // if(mon.value == 0) {
    //     window.alert('ERRO: Insira um numero')
    // }else{
    //     let tem = document.createElement('option')
    //     tem.text = 'Vamos mostrar algo aqui!'
    //     nen.appendChild(tem)
    // }
}

function ver(){
    if(valores.length == 0){
        window.alert("ERRO: Adicione valores antes de finalizar")
    }else{


         new Promise((resolve, resject) => {
            setTimeout(() => {
                let total = valores.length
                let maior = valores[0]
                let menor = valores[0]
                let soma = 0 
                let media = 0
        
                for(var pos in valores){
                    soma += valores[pos]
                    if(valores[pos] > maior)
                        maior = valores[pos]
                    if(valores[pos] < menor)
                        menor = valore[pos]
                }
                media = soma / total
                res.innerHTML += `<p>Ao todo temos ${total} de numeros!<p/>`
                res.innerHTML += `<p>O <strong>Maior</strong> numero detectado na lista e ${maior}<p/>`
                res.innerHTML += `<p>O <strong>Menor</strong> bunero encontrado na Lista e ${menor}<p/>`
                res.innerHTML += `<p>A soma de todos os valores e = ${soma}<p/>`
                res.innerHTML += `<p>A media obtida foi ${media}!<p/>`

                resolve()
            }, 1000)
        }) 
        .then(() => {
            res.innerHTML += ("Promise finished")
        })  
        
    }
    
}
