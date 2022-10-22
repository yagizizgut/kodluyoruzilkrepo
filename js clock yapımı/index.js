let textUp = prompt("Adınızı Giriniz");
let myName = document.querySelector("#myName");
myName.innerHTML = textUp ;


function date() {

    let momentary = new Date()
    let saat = momentary.getHours()
    let dakika = momentary.getMinutes()
    let saniye = momentary.getSeconds()
    let d = new Date()
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let icecekme = document.querySelector("#myClock")
    icecekme.innerHTML = saat + ":" + dakika + ":" + saniye + " " + days[d.getDay()]
    
    }
    let actual = setInterval(date,1000)