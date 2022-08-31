// Logica de Tempo
let cron
let hor = 00;
let min = 00;
let seg = 00;
let mseg = 1000

function timer(){
    seg++
    if(seg == 60){
        seg = 00;
        min ++
    }
    if(min == 60){
        min = 00;
        hor++
    }


    document.getElementById('hor').innerText = DataCron(hor)
    document.getElementById('min').innerText = DataCron(min)
    document.getElementById('seg').innerText = DataCron(seg)

}
// Aparencia 
function DataCron(param){
    if(param < 10){
        return `0${param}`
    }else{
        return param
    }
}

function setCores(){
    return { 
        yellow: 'border: 2px solid rgb(206, 186, 7)',
        green: 'border: 2px solid rgb(18, 150, 18)',
        normal: 'border: 2px solid aliceblue;'
 }
}

// Inputs de usuario
document.getElementById('Lig').onclick = () => start()
document.getElementById('Susp').onclick = () => pause()
document.getElementById('Des').onclick = () => reset()

// Funções a ser executadas 
function start(){
    document.querySelector('.Circle').setAttribute('style', setCores().green)
    cron = setInterval(() => { timer(); }, mseg);
}

function pause(){
    document.querySelector('.Circle').setAttribute('style', setCores().yellow)
    clearInterval(cron)
}

function reset(){
    document.querySelector('.Circle').setAttribute('style', setCores().normal)
    clearInterval(cron)
    hor = 00;
    min = 00;
    seg = 00;

    document.getElementById('hor').innerText = '00'
    document.getElementById('min').innerText = '00'
    document.getElementById('seg').innerText = '00'
}