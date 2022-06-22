'use strict';

//? işaretine atanmış olan rastgele sayı

let rastgeleSayı = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let yüksekSkor = 0;

const ekranMesajı = function (girdi) {
  document.querySelector('.message').textContent = girdi;
};


document.querySelector('.check').addEventListener('click', () => {
  //guess HTML'de bir input olduğu için girilen değer tipi önemli. Bu yüzden bu değeri Number fonksiyonu ile bir sayıya çevirip, bu sayıyı (dğer/value) seçmeliyiz.
  const guess = Number(document.querySelector('.guess').value);

  //oyuncu hiçbir değer girmeden tahmin yaparsa:
  if (!guess) {
   ekranMesajı('⛔️ Insert a number ⛔️');
  }

  //oyuncunun tahmini doğru olduğu zaman:
  else if (guess === rastgeleSayı) {
    ekranMesajı('🎉 Congratulations you find it ! 🎉');
    document.querySelector('.number').textContent = rastgeleSayı;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > yüksekSkor) {
      yüksekSkor = score;
      document.querySelector('.highscore').textContent = yüksekSkor;
    }
  }

  //oyuncunun yanlış tahmin yaptığı koşullar

  else if (guess !== rastgeleSayı) {
    if(score > 1){
      guess < rastgeleSayı ? ekranMesajı('Too low 📉') : ekranMesajı('Too high 📈');
      score--;
      document.querySelector('.score').textContent = score;
    }
    else{
      ekranMesajı('👎 You Lost ! 👎')
      document.querySelector('body').style.backgroundColor = '#990000'
      document.querySelector('.main-heading').textContent = '🚬🚬 Başaramadık abi... 🚬🚬';
      document.querySelector('.number').textContent = rastgeleSayı;
      document.querySelector('.score').textContent = '0'
      document.querySelector('.guess').value = ''
    }
  }

});


document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  document.querySelector('.score').textContent = score;
  rastgeleSayı = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  ekranMesajı('Start guessing...')
  document.querySelector('.number').textContent = '?';
  document.querySelector('.main-heading').textContent = 'Guess My Number!'
  document.querySelector('.guess').value = ''
});








//Türkçe dil seçeneği

document.querySelector('.tr').addEventListener("click", () => {

  document.querySelector('.between').textContent = '1 ile 20 Arasında';
  document.querySelector('.again').textContent = 'Tekrar!';
  document.querySelector('.again').style.left = '1.25rem';
  document.querySelector('.main-heading').textContent = 'Sayımı Tahmin Et!';
  document.querySelector('.check').textContent = 'Kontrol et!';
  document.querySelector('.message').textContent = 'Tahmine başla...';
  document.querySelector('#label-score').textContent = '💯 Puan:';
  document.querySelector('#label-highscore').textContent = '🥇 En yüksek puan:';

  document.querySelector('.check').addEventListener('click', () => {
    //guess HTML'de bir input olduğu için girilen değer tipi önemli. Bu yüzden bu değeri Number fonksiyonu ile bir sayıya çevirip, bu sayıyı (dğer/value) seçmeliyiz.
    const guess = Number(document.querySelector('.guess').value);
  
    //oyuncu hiçbir değer girmeden tahmin yaparsa:
    if (!guess) {
     ekranMesajı('⛔️ Sayı giriniz ! ⛔️');
    }
  
    //oyuncunun tahmini doğru olduğu zaman:
    else if (guess === rastgeleSayı) {
      ekranMesajı('🎉Tebrikler Buldun ! 🎉');
      document.querySelector('.number').textContent = rastgeleSayı;
  
      if (score > yüksekSkor) {
        yüksekSkor = score;
        document.querySelector('.highscore').textContent = yüksekSkor;
      }
    }
  
    //oyuncunun yanlış tahmin yaptığı koşullar
  
    else if (guess !== rastgeleSayı) {
      if(score > 1){
        guess < rastgeleSayı ? ekranMesajı('Çok düşük 📉') : ekranMesajı('Çok yüksek 📈');
        document.querySelector('.score').textContent = score;
      }
      else{
        ekranMesajı('👎 Kaybettin ! 👎')
      }
    }
  
  }
  


  );
  
  
  document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('.score').textContent = score;
    rastgeleSayı = Math.trunc(Math.random() * 20 + 1);
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    ekranMesajı('Tahmine başla...')
    document.querySelector('.number').textContent = '?';
    document.querySelector('.main-heading').textContent = 'Sayımı Tahmin Et!'
    document.querySelector('.guess').value = ''
  });
})

//Ingilizce dil seçeneği

document.querySelector('.en').addEventListener("click", () =>{
  location.reload();
})