function myFunction() {
  alert(
    "Birazdan kendizi test etmeniz için hazırlanmış teste geçeceksiniz!\n\nLütfen hazır olduğunuzda 'Tamam' botununa tıklayın ve teste başlayın\n\nBaşarılar!"
  );
}
function cevapla() {
  var soruSayisi = 9;
  var gelenCevap = new Array();
  var dogruCevap = new Array("C", "B", "D", "D", "B", "B", "C", "A", "B");
  var dogru = 0;
  var yanlis = 0;
  var cevap = 0;
  var rapor = "";

  for (i = 1; i <= soruSayisi; i++) {
    var secenekler = document.getElementsByName("s" + i);
    for (j = 0; j < secenekler.length; j++) {
      if (secenekler[j].checked) {
        if (secenekler[j].value == dogruCevap[i - 1]) {
          cevap = 1;
        } else {
          cevap = 0;
        }
        if (cevap) {
          rapor +=
            i +
            ". Soru için cevabınız: " +
            secenekler[j].value +
            "---- DOĞRU <br />";
        } else {
          rapor +=
            i +
            ". Soru için cevabınız: " +
            secenekler[j].value +
            "---- YANLIŞ, Doğru Cevap: " +
            dogruCevap[i - 1] +
            "<br />";
        }
        gelenCevap.push(secenekler[j].value);
      }
    }
  }

  for (k = 0; k < soruSayisi; k++) {
    if (gelenCevap[k] == dogruCevap[k]) {
      dogru++;
    } else {
      yanlis++;
    }
  }
  rapor += "Sonuç: " + dogru + " Doğru, " + yanlis + " Yanlış" + "<br />";
  document.getElementById("rapor").innerHTML = rapor;
}
