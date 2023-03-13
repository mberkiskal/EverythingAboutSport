function main () {
  var height = parseFloat(document.getElementById('Height').value);
  var weight = parseFloat(document.getElementById('Weight').value);

  var imc = weight / (height/100)**2;
  imc = imc.toFixed(2);

  if (imc > 0 && imc <= 15) {
    document.getElementById('output').innerHTML = 'Boy kilo endeksiniz: ' + imc + '<br>Kilonuz <span>çok zayıf</span>.';
  } else if (imc > 15 && imc <= 16) {
    document.getElementById('output').innerHTML = 'Boy kilo endeksiniz: ' + imc + '<br>Kilonuz <span>çok zayıf</span>.';
  } else if (imc > 16 && imc <= 18.5) {
    document.getElementById('output').innerHTML = 'Boy kilo endeksiniz: ' + imc + '<br>Kilonuz <span>zayıf</span>.';
  } else if (imc > 18.5 && imc <= 25) {
    document.getElementById('output').innerHTML = 'Boy kilo endeksiniz: ' + imc + '<br>Kilonuz <span>normal (sağlıklı kilo)</span>.';
  } else if (imc > 25 && imc <= 30) {
    document.getElementById('output').innerHTML = 'Boy kilo endeksiniz:: ' + imc + '<br>Kilonuz <span>Kilolu</span>.';
  } else if (imc > 30) {
    document.getElementById('output').innerHTML = 'Boy kilo endeksiniz: ' + imc + '<br>Kilonuz <span>Obez</span>.';
  } else {
    document.getElementById('output').innerHTML = 'Lütfen geçerli sayılar girin.';
  }
}