/* let username = prompt("Kullanici Adinizi Giriniz:")
let kilo = prompt("kilo gir:")
let boy = prompt("boy gir:")
let vki = (kilo/(boy*boy))

console.log(vki)

if (vki >0 && vki <= 19) { 
    console.log("zayifsin")
}
else if (vki >19 && vki <=25){
    console.log("normal")
}

else if (vki >25 && vki <=30){
    console.log("kilolusun")
}
else if (vki >30){
    console.log("obez :( ")
}
else { console.log("hesaplanamadı") 
} */


document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("btn");
    button.onclick = function () {
        let isim = document.getElementById("isim");
        let kilo = document.getElementById("kilo");
        let boy = document.getElementById("boy");

        let kiloValue = parseFloat(kilo.value);
        let boyValue = parseFloat(boy.value) / 100;
        let vki = kiloValue / (boyValue * boyValue);
        // window.alert(isim.value +  " vücut kitle endeksiniz: "  + vki.toFixed(2));
        console.log(vki)

        if (vki > 0 && vki <= 19) {
            console.log(vki)
            alert(isim.value + " vücut kitle endeksiniz: " + vki.toFixed(2) + " zayıf!")
        }
        else if (vki > 19 && vki <= 25) {
            console.log(vki)
            alert(isim.value + " vücut kitle endeksiniz: " + vki.toFixed(2) + " normal! ")
        }

        else if (vki > 25 && vki <= 30) {
            console.log(vki)
            alert(isim.value + " vücut kitle endeksiniz: " + vki.toFixed(2) + " şişman! ")
        }
        else if (vki > 30) {
            console.log(vki)
            alert(isim.value + " vücut kitle endeksiniz: " + vki.toFixed(2) + " obez! ")
        }
        else {
            console.log(vki)
            alert(isim.value + " vücut kitle endeksiniz hesaplanamadı. Tekrar giriniz!")
        }

    }
});