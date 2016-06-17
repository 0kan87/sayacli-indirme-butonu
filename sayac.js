var secs = 20; // Süre
var wait = secs * 1000;
document.okn.submitbtn.disabled=true;
for(i=1;i<=secs;i++) {
window.setTimeout("update(" + i + ")", i * 1000);
}
window.setTimeout("timer()", wait);
function update(num) {

if(num == (wait/1000)) {
document.okn.submitbtn.value = "İNDİR";
}

else {
printnr = (wait/1000)-num;
document.okn.submitbtn.value = "Lütfen " + printnr + " Saniye Bekleyiniz !";
}}

function timer() {
document.okn.submitbtn.disabled=false;
}